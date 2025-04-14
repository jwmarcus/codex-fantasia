# Developer Vibes & AI Collaboration Preferences

This document outlines preferred ways of working, coding conventions, and interaction styles for AI collaboration on this project, complementing formal linters and the `.vibe/context.md` file.

## 1. Interaction Style

*   **Explain Rationale:** Briefly explain the reasoning behind significant code suggestions or architectural choices.
*   **Offer Alternatives:** When relevant (e.g., different libraries, design patterns), mention alternatives and their trade-offs.
*   **Clarity First:** Prioritize clear, readable code over overly clever or condensed solutions unless specifically requested for optimization.
*   **Confirm Dependencies:** Ask before adding new npm packages or significant dependencies.
*   **Error Handling:** Implement basic error handling (e.g., try/catch for async operations, checking for null/undefined) by default in new code.
*   **Iterative Approach:** Break down complex tasks into smaller, manageable steps.

## 2. Code Style & Conventions (Beyond Linter/Formatter)

*   **TypeScript:**
    *   Use explicit types where appropriate (avoid excessive reliance on `any`).
    *   Prefer `interface` for defining object shapes, `type` for unions/intersections or simple types.
    *   Use `async/await` for asynchronous operations.
*   **Node.js/Express:**
    *   Structure routes logically (e.g., one file per resource in `src/routes/`).
    *   Use clear middleware patterns when needed.
*   **React (Anticipated):**
    *   Prefer functional components with Hooks.
    *   Keep components focused and composable.
*   **General:**
    *   Use meaningful variable and function names.
    *   Add JSDoc comments for complex functions or non-obvious logic.
    *   Keep functions relatively short and focused on a single responsibility.

## 3. Semantic Preferences

*   **Naming:**
    *   API endpoints: Use RESTful conventions (e.g., `GET /api/games`, `POST /api/games`, `GET /api/games/:id`).
    *   Service/utility functions: Use descriptive names reflecting their action (e.g., `fetchGameById`, `validateUserInput`).
    *   Database models: Use singular nouns (e.g., `Game`, `User`).
*   **Commit Messages:** Follow Conventional Commits format (`feat:`, `fix:`, `docs:`, `style:`, `refactor:`, `test:`, `chore:`). Include scope (e.g., `feat(server): ...`).

## 4. Testing Preferences (Anticipated)

*   (To be defined - e.g., preference for Jest/Vitest, request basic unit tests for new logic).

## 5. Workflow

*   **Session Logging:** (Optional) Use `[SessionLog Start/End]` markers and summarize interactions for complex features (Template: `.vibe/session_template.md`).
*   **Context:** Refer to `.vibe/context.md` for overall project status and links. 