# Codex Fantasia

*Your nostalgic guide to discovering and playing classic JRPGs.*

## ✨ What is this?

**Codex Fantasia** is a discovery platform dedicated to helping people find and play classic JRPGs from the golden age. Whether you're a nostalgic veteran looking to revisit beloved worlds or a curious newcomer wondering where to start, we're here to guide your journey through these timeless adventures.

We don't aim to replace the incredible resources already created by the JRPG community. Instead, we connect you with the best existing guides, walkthroughs, and fan sites while providing the context and guidance you need to actually start playing.

## 🎮 Features (Planned)

- 🔍 **Smart Discovery System**: Find your next JRPG adventure based on your preferences, available time, and experience level
- 🚪 **Gateway Guides**: Newcomer-friendly introductions to the genre with personalized recommendations
- 🕹️ **How to Play Now**: Clear, up-to-date information on how to legally play each game on modern systems
- 📚 **Resource Directory**: Curated links to the best existing guides, communities, and content for each game
- 📊 **Playability Insights**: Modern perspective on how these classics hold up today, with version comparisons
- 💾 **Play Tracking**: Mark games as played, currently playing, or on your wishlist
- 🧩 **Community Features**: Share your journey with others and join group playthroughs

## 🛠️ Tech Stack

- **Frontend**: React + TypeScript
- **Backend**: Node + Express (TypeScript)
- **Database**: PostgreSQL (via Prisma or similar ORM)
- **Storage**: TBD (likely S3 or Supabase)
- **Deployment**: Docker, Railway/Vercel/Fly.io TBD

## 🤖 AI Collaboration & `.vibe` Directory

This project heavily utilizes AI pair programming assistants (like Cursor). To streamline this collaboration and maintain context, we use a dedicated `.vibe` directory at the project root.

**Purpose:**

*   Provides essential, up-to-date context for AI assistants.
*   Defines preferred interaction styles and coding conventions for AI collaboration.
*   Optionally logs the history of AI-assisted development sessions.

**Structure:**

*   `.vibe/context.md`: Core project context (vision, status, tech, key file pointers).
*   `.vibe/preferences.md`: Developer preferences for AI interaction and code style.
*   `.vibe/session_template.md`: Template for documenting AI pairing sessions.
*   `.vibe/sessions/`: Directory containing individual session logs (optional).
*   `.vibe/framework_rationale.md`: Explanation of this framework.

**Workflow:**

When starting a new coding session with an AI assistant:

1.  **Provide Initial Context:** Point the AI to the key files:
    ```
    @.vibe/context.md 
    @.vibe/preferences.md
    ```
2.  **Follow Preferences:** The AI should adhere to the guidelines in `preferences.md` during the session.
3.  **(Optional) Log Session:** For complex tasks, use the `[SessionLog Start/End]` markers in chat and ask the AI to summarize the interaction using the `session_template.md`, saving the result in the `sessions/` directory.

This approach helps maintain consistency, reduces repetitive context sharing, and makes the collaborative development process more transparent.

**Starting a New Session (Example):**

To ensure the AI assistant is properly oriented when resuming work:

1.  **Open the Project:** In your IDE (e.g., Cursor).
2.  **Start a New Chat Session:** Initiate a chat with the AI assistant.
3.  **Provide Context:** Begin the conversation by referencing the core `.vibe` files. Example prompt:
    ```
    Good morning! Let's continue working on Codex Fantasia. Please review the project context and our preferences:
    @.vibe/context.md
    @.vibe/preferences.md

    Today, I'd like to focus on [mention your specific goal, e.g., implementing the User model routes].
    ```
4.  **Proceed:** Continue the development conversation, optionally using the Session Logging workflow for significant tasks.

## 💡 Inspiration

- *Nintendo Power strategy guides*
- *GameFAQs community*
- *BradyGames books*
- *Modern retro gaming YouTube channels*
- *Patient Gamer communities*

## 🗺️ Philosophical Approach

Codex Fantasia operates on a few core principles:

1. **Play First**: Our primary goal is to get you playing these games, not just reading about them
2. **Respect Time**: We recognize modern players have different time constraints and provide options accordingly
3. **Celebrate Existing Work**: We highlight and connect to the best community resources rather than recreating them
4. **Thoughtful Curation**: Not every game deserves the same amount of attention—we guide you to experiences worth your time
5. **Modern Context**: We discuss these classics with both historical appreciation and contemporary perspective

## 🧪 Status

This is a nights-and-weekends passion project between friends. Expect slow progress but high polish.

## 🤝 Contributing

We're not accepting external contributors *yet*, but if you've got ideas or want to help with the project, feel free to open an issue for discussion.

## 📜 License

TBD. Likely something open but protective of nostalgic intent.

---

*"Turns out the real treasure was the 60+ hour JRPG we played along the way."*
