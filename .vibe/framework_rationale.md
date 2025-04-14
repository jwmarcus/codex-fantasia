# AI Collaboration Framework for Development ("Vibe Coding")

This document captures the ideas discussed regarding structuring AI-assisted development workflows for better context, efficiency, and traceability.

## The Problem

Starting new AI chat sessions (e.g., in Cursor) requires manually providing essential context (project goals, status, key files, tech stack) repeatedly. This is inefficient, error-prone, and doesn't scale well. Furthermore, the *process* of collaboration (prompts, AI suggestions, developer steering) is often lost, making it hard to understand *how* code evolved.

## Proposed Solution: Layered Context Artifacts

We propose creating specific, version-controlled artifacts within the project repository to address these issues:

### 1. `PROJECT_CONTEXT.md` (Root Directory)

*   **Purpose:** Provides the factual, objective grounding for the project.
*   **Content:** Concise summary of vision, current status/goals, tech stack, links to key documents (PRD, Checklists), pointers to critical code locations, and essential project-wide conventions.
*   **Usage:** Referenced at the start of an AI session to quickly bootstrap the assistant with *what* the project is and *where* things are.

### 2. `.developer_vibes.md` (Root Directory)

*   **Purpose:** Captures the subjective preferences of the developer(s) regarding the AI interaction and coding style, complementing formal linters.
*   **Content:** Preferred interaction style (e.g., explain rationale, offer alternatives), specific code style nuances (beyond linters), semantic preferences (naming, commit messages), workflow patterns.
*   **Usage:** Instructs the AI on *how* the developer prefers to collaborate and *how* code should be approached stylistically during the session.

### 3. Session Logs (e.g., `docs/session-logs/YYYY-MM-DD-Feature.md`)

*   **Purpose:** To capture the history and flow of a specific development task performed with AI assistance.
*   **Process:**
    1.  Define a standard `SESSION_LOG_TEMPLATE.md`.
    2.  Use simple markers `[SessionLog Start: Task Description]` and `[SessionLog End: Task Description]` in the chat around the task.
    3.  After the `End` marker, prompt the AI to summarize the conversation between the markers using the template.
    4.  Review, refine, and commit the generated log.
*   **Usage:** Provides a traceable history of how specific features were built collaboratively, documenting key decisions, AI contributions, and developer steering.

## How They Work Together

*   `PROJECT_CONTEXT.md` sets the **stage** (the what, where, and current status).
*   `.developer_vibes.md` directs the **performance** (the how of collaboration and style).
*   `Session Logs` document the **history** of specific acts/scenes.

This layered approach aims to make AI-assisted development ("vibe coding") faster, safer (through clear guidance and review), and more transparent by embedding the context and process directly within the project structure. 