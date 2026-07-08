# Claude Instructions

This repository uses HubZero Blueprint.

The canonical AI guidance is located at:

```text
.hubzero/agents/AGENTS.md
```

Read and follow that file before making any changes to this repository.

Additional guidance is available in:

```text
.hubzero/agents/planning.md
.hubzero/agents/implementation.md
.hubzero/agents/review.md
```

When planning or implementing work, consult the relevant Blueprint Core knowledge under:

```text
.hubzero/architecture/
.hubzero/seo/
.hubzero/design/
```

Read only the documents relevant to the task.

## Claude-specific guidance

When available and appropriate:

* Use your MCP servers to inspect the repository, gather context, validate assumptions, and perform tasks instead of relying on guesswork.
* Use your available Skills whenever they are applicable.
* Inspect the repository before making architectural assumptions.
* Reuse existing project infrastructure whenever appropriate.
* Verify changes before declaring them complete.
* Follow the engineering, architecture, SEO, and design guidance defined in `.hubzero`.

## HubZero Blueprint

The entire `.hubzero` directory is managed by the HubZero Blueprint CLI and is the single source of truth for HubZero guidance.

**Do not create, edit, rename, move, or delete any files inside `.hubzero` unless explicitly instructed by the user.** Those files are synchronized from Blueprint Core and local modifications will be overwritten by future updates.

If you believe the guidance should change, propose the change to the user instead of modifying `.hubzero` directly.