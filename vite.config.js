import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { resolve, dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { spawn } from "node:child_process";
import fs from "node:fs";
import {
  identifyWorkspaceArtifacts,
  runWorkspaceCleanup,
} from "./tools/clean-workspace.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));

function scanDirectoryStats(dirPath) {
  let files = 0;
  let bytes = 0;
  if (!fs.existsSync(dirPath)) return { files: 0, bytes: 0 };

  const stack = [dirPath];
  while (stack.length > 0) {
    const current = stack.pop();
    let entries = [];
    try {
      entries = fs.readdirSync(current, { withFileTypes: true });
    } catch {
      continue;
    }
    for (const entry of entries) {
      if (
        entry.name === "node_modules" ||
        entry.name === ".git" ||
        entry.name === ".aistudio" ||
        entry.name === "dist" ||
        entry.name === "dist-test" ||
        entry.name === ".vite" ||
        entry.name === ".cache"
      ) {
        continue;
      }
      const fullPath = join(current, entry.name);
      if (entry.isDirectory()) {
        stack.push(fullPath);
      } else if (entry.isFile()) {
        files += 1;
        try {
          bytes += fs.statSync(fullPath).size;
        } catch {
          // ignore stat errors
        }
      }
    }
  }
  return { files, bytes };
}

function buildWorkspaceManifest(rootDir) {
  const folderSpecs = [
    {
      key: "src",
      name: "src/",
      description:
        "3D Broadcast Stadium, Match Center LSI, Scorer Analytics & UI Kit",
    },
    {
      key: "db",
      name: "db/",
      description:
        "PostgreSQL / Supabase Schemas, Migrations & Rebuild Scripts",
    },
    {
      key: "services",
      name: "services/",
      description: "Backend Microservices, Sync & API Workers",
    },
    {
      key: "packages",
      name: "packages/",
      description:
        "@scrbrd/policy, @scrbrd/scoring & @scrbrd/sync Monorepo Packages",
    },
    {
      key: "tools",
      name: "tools/",
      description: "CLI Bundlers, SQL Verifiers & Clean-Workspace Utility",
    },
    {
      key: "docs",
      name: "docs/",
      description: "Architecture, Pilot Runbooks & Governance Documentation",
    },
    {
      key: "audit",
      name: "audit/",
      description: "Compliance, RBAC & Security Verification Logs",
    },
  ];

  const directories = [];
  let totalFiles = 0;
  let totalSourceBytes = 0;

  for (const spec of folderSpecs) {
    const target = join(rootDir, spec.key);
    const stats = scanDirectoryStats(target);
    if (stats.files > 0) {
      directories.push({
        name: spec.name,
        description: spec.description,
        files: stats.files,
        bytes: stats.bytes,
        included: true,
      });
      totalFiles += stats.files;
      totalSourceBytes += stats.bytes;
    }
  }

  // Count public/ and root configuration files
  const publicStats = scanDirectoryStats(join(rootDir, "public"));
  let rootFiles = publicStats.files;
  let rootBytes = publicStats.bytes;
  try {
    const rootEntries = fs.readdirSync(rootDir, { withFileTypes: true });
    for (const entry of rootEntries) {
      if (entry.isFile()) {
        rootFiles += 1;
        try {
          rootBytes += fs.statSync(join(rootDir, entry.name)).size;
        } catch {
          // ignore
        }
      }
    }
  } catch {
    // ignore
  }

  directories.push({
    name: "public/ & root configs",
    description:
      "Static Assets, PWA Manifests, Vite, Firebase & Render Configs",
    files: rootFiles,
    bytes: rootBytes,
    included: true,
  });
  totalFiles += rootFiles;
  totalSourceBytes += rootBytes;

  // Use tools/clean-workspace.mjs to identify all build artifacts, caches & temp files
  const identifiedBuildArtifacts = identifyWorkspaceArtifacts(rootDir, {
    includeNodeModules: false,
  });
  const artifactDirsFound = identifiedBuildArtifacts.map((item) => ({
    name: item.path,
    category: item.category,
    description: item.description,
    files: item.files,
    bytes: item.bytes,
  }));
  const artifactBytes = identifiedBuildArtifacts.reduce(
    (sum, item) => sum + item.bytes,
    0
  );

  const hasNodeModules = fs.existsSync(join(rootDir, "node_modules"));

  const timestamp = new Date().toISOString().slice(0, 10);
  return {
    timestamp: new Date().toISOString(),
    archiveFilename: `scrbrd-3d-os-full-backup-${timestamp}.tar.gz`,
    totalFiles,
    totalSourceBytes,
    estimatedCompressedBytes: Math.round(totalSourceBytes * 0.24),
    cleanerScriptPath: "tools/clean-workspace.mjs",
    hasNodeModules,
    gitSyncStatus: {
      isClean: artifactDirsFound.length === 0,
      artifactDirsFound,
      artifactBytes,
    },
    directories,
  };
}

function cleanBuildArtifacts(rootDir) {
  const report = runWorkspaceCleanup({
    rootDir,
    dryRun: false,
    includeNodeModules: false,
  });
  return report.targets.map((t) => t.path);
}

/**
 * Vite plugin that provides:
 * 1. `/api/backup-manifest` — live workspace directory & Git sync readiness manifest
 * 2. `/api/clean-git-artifacts` — executes `tools/clean-workspace.mjs` to purge build artifacts & temp files
 * 3. `/api/download-source-backup` — 1-click full project `.tar.gz` archive download
 */
function sourceBackupMiddlewarePlugin() {
  return {
    name: "scrbrd-source-backup-middleware",
    configureServer(server) {
      server.middlewares.use("/api/backup-manifest", (req, res, next) => {
        if (req.method !== "GET") return next();
        try {
          const manifest = buildWorkspaceManifest(process.cwd());
          res.setHeader("Content-Type", "application/json");
          res.setHeader("Cache-Control", "no-store");
          res.statusCode = 200;
          res.end(JSON.stringify(manifest));
        } catch (err) {
          res.statusCode = 500;
          res.setHeader("Content-Type", "application/json");
          res.end(JSON.stringify({ error: err.message }));
        }
      });

      server.middlewares.use("/api/clean-git-artifacts", (req, res, next) => {
        if (req.method !== "POST") return next();
        try {
          const report = runWorkspaceCleanup({
            rootDir: process.cwd(),
            dryRun: false,
            includeNodeModules: false,
          });
          const afterManifest = buildWorkspaceManifest(process.cwd());
          res.setHeader("Content-Type", "application/json");
          res.setHeader("Cache-Control", "no-store");
          res.statusCode = 200;
          res.end(
            JSON.stringify({
              ok: true,
              cleanedDirs: report.targets.map((t) => t.path),
              freedBytes: report.totalBytes,
              report,
              manifest: afterManifest,
            })
          );
        } catch (err) {
          res.statusCode = 500;
          res.setHeader("Content-Type", "application/json");
          res.end(JSON.stringify({ ok: false, error: err.message }));
        }
      });

      server.middlewares.use("/api/download-source-backup", (req, res, next) => {
        if (req.method !== "GET" && req.method !== "HEAD") return next();

        const urlObj = new URL(req.url || "", "http://localhost");
        if (urlObj.searchParams.get("clean") === "1") {
          cleanBuildArtifacts(process.cwd());
        }

        const timestamp = new Date().toISOString().slice(0, 10);
        const filename = `scrbrd-3d-os-full-backup-${timestamp}.tar.gz`;

        res.setHeader("Content-Type", "application/gzip");
        res.setHeader(
          "Content-Disposition",
          `attachment; filename="${filename}"`
        );
        res.setHeader("X-Archive-Filename", filename);
        res.setHeader("Cache-Control", "no-store");

        if (req.method === "HEAD") {
          res.statusCode = 200;
          res.end();
          return;
        }

        const tarProc = spawn(
          "tar",
          [
            "-czf",
            "-",
            "--exclude=node_modules",
            "--exclude=dist",
            "--exclude=dist-test",
            "--exclude=.git",
            "--exclude=.vite",
            "--exclude=.aistudio",
            "--exclude=*.tar.gz",
            "--exclude=*.tgz",
            ".",
          ],
          { cwd: process.cwd() }
        );

        tarProc.stdout.pipe(res);
        tarProc.stderr.on("data", () => {
          // Ignore non-fatal tar warnings during live streaming
        });
        tarProc.on("error", (err) => {
          if (!res.headersSent) {
            res.statusCode = 500;
            res.end(`Backup archive error: ${err.message}`);
          }
        });
      });
    },
  };
}

export default defineConfig({
  plugins: [react(), tailwindcss(), sourceBackupMiddlewarePlugin()],
  define: {
    __SCRBRD_TEST_HOOKS__: JSON.stringify(false),
  },
  server: {
    port: 3000,
    host: "0.0.0.0",
    allowedHosts: true,
  },
  preview: {
    port: 3000,
    host: "0.0.0.0",
    allowedHosts: true,
  },
  resolve: {
    extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".json"],
    alias: [
      { find: "@scrbrd/policy/capabilities", replacement: resolve(__dirname, "packages/policy/src/capabilities.mjs") },
      { find: "@scrbrd/policy/roles", replacement: resolve(__dirname, "packages/policy/src/roles.mjs") },
      { find: "@scrbrd/policy/authorize", replacement: resolve(__dirname, "packages/policy/src/authorize.mjs") },
      { find: "@scrbrd/policy/tables", replacement: resolve(__dirname, "packages/policy/src/tables.mjs") },
      { find: "@scrbrd/policy/teams", replacement: resolve(__dirname, "packages/policy/src/teams.mjs") },
      { find: "@scrbrd/policy/modules", replacement: resolve(__dirname, "packages/policy/src/modules.mjs") },
      { find: "@scrbrd/policy/sa-id", replacement: resolve(__dirname, "packages/policy/src/sa-id.mjs") },
      { find: "@scrbrd/policy/date-of-birth", replacement: resolve(__dirname, "packages/policy/src/date-of-birth.mjs") },
      { find: "@scrbrd/policy/public", replacement: resolve(__dirname, "packages/policy/src/public.mjs") },
      { find: "@scrbrd/policy/notifications", replacement: resolve(__dirname, "packages/policy/src/notifications.mjs") },
      { find: "@scrbrd/policy/words", replacement: resolve(__dirname, "packages/policy/src/words.mjs") },
      { find: "@scrbrd/policy", replacement: resolve(__dirname, "packages/policy/src/authorize.mjs") },

      { find: "@scrbrd/scoring/commentary", replacement: resolve(__dirname, "packages/scoring/src/commentary.mjs") },
      { find: "@scrbrd/scoring/planner", replacement: resolve(__dirname, "packages/scoring/src/planner.mjs") },
      { find: "@scrbrd/scoring", replacement: resolve(__dirname, "packages/scoring/src/index.mjs") },

      { find: "@scrbrd/sync/pad-proof", replacement: resolve(__dirname, "packages/sync/src/pad-proof.mjs") },
      { find: "@scrbrd/sync", replacement: resolve(__dirname, "packages/sync/src/index.mjs") },
    ],
  },
  build: {
    outDir: "dist",
    sourcemap: false,
  },
});
