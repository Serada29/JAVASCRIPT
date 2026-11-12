# Mentor Slash-Command Skill Catalog

Below is the catalog of available slash commands you can invoke at any time during our mentorship.

> **Note:** As required by our mentorship rules, this file initially contains **only** the command names, descriptions, and usage instructions. When you want to generate the full underlying skill definition file for any command inside `skills/`, explicitly invoke `/build-skill <name>`.

---

## 1. Learning and Teaching

| Command | Description | Usage Example |
|---|---|---|
| `/start-session` | Starts your next structured learning session based on `PROGRESS.md` and due spaced-repetition items. | `/start-session` |
| `/diagnose` | Tests your current understanding and identifies conceptual gaps before introducing a new topic. | `/diagnose` or `/diagnose variables` |
| `/teach <topic>` | Delivers a structured lesson on `<topic>` using our A–I Teaching Framework and MDN reading assignments. | `/teach strings` |
| `/create-exercise <topic>` | Generates targeted programming exercises on `<topic>` calibrated to your current mastery level. | `/create-exercise arithmetic` |
| `/quiz <topic>` | Tests your knowledge on `<topic>` using retrieval questions without showing answers upfront. | `/quiz console-and-statements` |
| `/spaced-review` | Runs a retrieval-practice review of previously learned concepts due for spaced repetition. | `/spaced-review` |

---

## 2. Project Development

| Command | Description | Usage Example |
|---|---|---|
| `/create-project <level>` | Scaffolds a new progressive project brief (`README.md`, `acceptance-criteria.md`, `test-cases.md`, `review-rubric.md`, and empty `src/`) for `<level>`. | `/create-project 0` |
| `/project-upgrade` | Adds realistic, more challenging requirements to a project you have already passed. | `/project-upgrade` |
| `/mastery-project` | Creates a capstone synthesis project that combines multiple concepts without step-by-step scaffolding. | `/mastery-project` |

---

## 3. Assistance & Debugging

| Command | Description | Usage Example |
|---|---|---|
| `/hint` | Provides the first/current level hint (starting at Hint 0: Question) for your active problem without revealing code. | `/hint` |
| `/next-hint` | Advances one step further in the Struggle-First Hint System (Hint 0 -> 1 -> 2 -> 3 -> 4) after you share your attempt. | `/next-hint` |
| `/debug-coach` | Walks you through systematic debugging (expected vs. actual, error reading, isolating state) without fixing your code. | `/debug-coach` |
| `/trace-code` | Presents a snippet of JavaScript and challenges you to trace variable values and predict the exact output line by line. | `/trace-code` |
| `/explain-error` | Helps you dissect an error message (SyntaxError, ReferenceError, TypeError, etc.) and locate its root cause yourself. | `/explain-error` |

---

## 4. Evaluation & Code Review

| Command | Description | Usage Example |
|---|---|---|
| `/exercise-checker` | Evaluates your completed exercise code, runs it in Node.js, validates answers, and updates your trackers. | `/exercise-checker` |
| `/review-code` | Performs a full Senior Engineer Code Review on your submitted implementation and issues a formal `PROJECT VERDICT`. | `/review-code` |
| `/misconception-check` | Tests a specific misconception recorded in `MISCONCEPTIONS.md` to verify if it is resolved. | `/misconception-check` |
| `/refactor-challenge` | Challenges you to improve the readability, structure, or efficiency of your working code without rewriting it for you. | `/refactor-challenge` |
| `/mastery-check` | Administers an unassisted transfer problem to verify if a topic can move to Mastery Level 3 or 4. | `/mastery-check` |

---

## 5. Tracking and Skill Management

| Command | Description | Usage Example |
|---|---|---|
| `/progress` | Displays a summary of your current learning progress, active milestones, and mastery scores. | `/progress` |
| `/weekly-review` | Reviews your strengths, recurring mistakes, completed exercises/projects, and next priorities. | `/weekly-review` |
| `/build-skill <name>` | Creates the detailed skill definition markdown file inside `skills/` for the specified command. | `/build-skill review-code` |
| `/add-skill <name> <purpose>` | Registers a new slash command name and description into this `SKILLS.md` catalog. | `/add-skill benchmark "Compare performance of two approaches"` |
| `/reveal-solution` | **Exceptional command:** Used only after you have submitted a genuine attempt or exhausted an exercise to discuss a complete reference solution. | `/reveal-solution` |

