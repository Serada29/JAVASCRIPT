---
name: git-save
description: Automatically stages changes, crafts a descriptive commit message detailing what was created/modified, commits, and pushes directly to GitHub. Triggered by /git-save or /save.
---

# Git Save Skill (`/git-save`)

This skill automates version control workflow: inspecting working directory changes, generating an accurate descriptive commit message of what was created or modified, creating the git commit, and pushing changes to GitHub.

## Trigger Scenarios
- The user types `/git-save` or `/save`.
- The user asks to "save to git", "commit and push", or "backup to GitHub".

---

## Workflow Steps

### Step 1: Inspect Working Tree & Status
1. Run `git status --short` and `git branch --show-current` to identify:
   - Branch name (e.g., `main`).
   - Untracked files (`??`).
   - Modified files (`M`).
   - Deleted files (`D`).
2. If there are no changes (`working tree clean`), notify the user that everything is already up to date.

### Step 2: Analyze Changes & Craft Commit Message
1. Review `git diff --stat` or `git status` to determine the scope of changes:
   - **Created files/projects:** Identify newly added exercises, project files, documentation, or skills.
   - **Modified files:** Identify updated code, progress logs (`PROGRESS.md`, `LEARNING_JOURNAL.md`, `MASTERY_MAP.md`), or exercise solutions.
2. Construct a professional, structured commit message following this convention:
   - **Format:** `<type>(<scope>): <summary>`
   - **Types:**
     - `feat`: New project, exercise, lesson, or feature created.
     - `fix`: Bug fix, error resolution, or misconception fix in user code.
     - `docs`: Progress tracker update, journal entry, or documentation changes.
     - `chore`: Configuration, workspace setup, or tool additions.
   - **Body (if multi-file):** Include brief bullet points highlighting specific created or updated components.

### Step 3: Stage & Commit
1. Stage all relevant files:
   ```bash
   git add -A
   ```
2. Commit with the generated message:
   ```bash
   git commit -m "<generated commit message>"
   ```

### Step 4: Push to Remote Repository
1. Push to the active upstream branch:
   ```bash
   git push origin <current-branch>
   ```
2. If push fails due to network or authentication issues:
   - Diagnose the exact git error.
   - Report clearly what happened and suggest the specific resolution.

### Step 5: Report Results
Provide a clear summary to the user:
- **Commit Hash:** Short SHA.
- **Commit Message:** Exact message used.
- **Files Saved:** Summary of files created, modified, or deleted.
- **Remote Status:** Confirmed pushed to GitHub branch.

