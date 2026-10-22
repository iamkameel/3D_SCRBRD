# SCRBRD — CricketOS

South African school sports management and match-intelligence platform for cricket scoring, fixtures, and analytics.

Rewritten as a standard React SPA on Vite.

## Architecture

- **Frontend**: React 18 with Vite, modular functional components, hooks, dynamic theme engine (`floodlit` dark mode and `daylight` light mode), and responsive multi-persona shell.
- **Scoring Engine**: Pure event-sourced ball-by-ball cricket scoring (`packages/scoring`), wagon wheel tracking, pitch maps, Duckworth-Lewis-Stern (DLS) calculations, and deterministic match replay.
- **Policy & Security**: Granular capability and role bundles (`packages/policy`) with scoped assignments and multi-persona RBAC.
- **Sync & Offline**: Offline-first outbox and indexedDB queue (`packages/sync`) designed for signal-less field operations.

## Running the Application

```bash
npm install
npm run dev
```

The application runs on `http://0.0.0.0:3000`.

To build the production bundle:

```bash
npm run build
```

