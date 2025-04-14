# Project Context for AI Assistants

This document provides essential context for AI assistants working on the Codex Fantasia project.

## 1. Project Vision

Codex Fantasia is a discovery platform and interactive guide for classic JRPGs, focusing on helping users find and **legally play** these games today. It aggregates resources and provides a curated, nostalgically-themed experience.

## 2. Current Status & Immediate Goals

*   **Overall Phase:** Phase 2: Core Features (Backend focus)
*   **Checklist:** See `docs/codex-fantasia-build-checklist.md` for detailed status.
*   **Immediate Goals:**
    *   Build out core backend API endpoints (CRUD for Games is done, need Users, Resources, etc.).
    *   Implement basic authentication.
    *   Seed initial game data.

## 3. Technology Stack

*   **Frontend:** Vite + React + TypeScript (`./codex-fantasia-web` or root - TBC)
*   **Backend:** Node.js + Express + TypeScript (`./codex-fantasia-server`)
*   **Database:** PostgreSQL (`codex-fantasia-server/.env` for connection)
*   **ORM:** Prisma (`codex-fantasia-server/prisma/schema.prisma`)
*   **Styling:** (Assumed: CSS Modules/Tailwind/Styled Components - TBD in frontend setup)
*   **State Management:** (Likely Context API or Redux - TBD in frontend setup)

## 4. Key Documents

*   **Product Requirements:** `docs/codex-fantasia-prd.md`
*   **Build Checklist & Status:** `docs/codex-fantasia-build-checklist.md`

## 5. Core Code Locations

*   **Server Entrypoint:** `codex-fantasia-server/src/server.ts`
*   **API Routes:** `codex-fantasia-server/src/routes/` (e.g., `game.routes.ts`)
*   **Database Schema:** `codex-fantasia-server/prisma/schema.prisma`
*   **Prisma Client Instance:** `codex-fantasia-server/src/utils/db.server.ts`
*   **Frontend Root:** (Likely `codex-fantasia-web/src/App.tsx` or `src/main.tsx` - TBC)
*   **UI Components:** (Likely `codex-fantasia-web/src/components/` - TBC)

## 6. Important Conventions

*   Use Prisma for all database interactions on the backend.
*   Commit generated Prisma client (`codex-fantasia-server/src/generated/prisma`).
*   Follow conventional commit message format (e.g., `feat(server): ...`, `fix(web): ...`).
*   API endpoints should be prefixed with `/api` (e.g., `/api/games`).
*   Keep `.env` files out of version control (add to `.gitignore`). 