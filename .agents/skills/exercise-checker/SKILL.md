---
name: exercise-checker
description: Evaluates and verifies the user's JavaScript exercise code and answers against the exercise requirements without writing the solution for them. Triggered whenever the user types /exercise-checker or asks to verify an exercise.
---

# Exercise Checker Skill (`/exercise-checker`)

This skill evaluates the user's completed or in-progress exercise in the JavaScript mastery curriculum. It runs the code, tests output, inspects answers, verifies edge cases, and updates progress tracking files while strictly adhering to the rule: **Never write implementation code for the user.**

## Trigger Scenarios
- The user types `/exercise-checker`.
- The user asks to "check my exercise", "check what I did", or "verify exercise".

---

## Workflow Steps

### Step 1: Identify Active Exercise
1. Inspect `PROGRESS.md` to identify the current active exercise.
2. Read the exercise instruction file in `exercises/**/` to retrieve:
   - Part 1 & Part 2 questions (Tracing & Diagnostics).
   - Part 3 implementation requirements, expected output, and edge cases.
3. Locate the user's corresponding JavaScript file (e.g., `exercises/00-foundations/exercise-01.js`).

### Step 2: Static Code & Answer Analysis
1. Read the user's code file:
   - Check casing, syntax, and punctuation.
   - Check variable names and structure.
   - Ensure the user did not copy-paste a pre-made solution.
2. Read the user's answers to theoretical and diagnostic questions (either in chat or written in the markdown file).
3. Check for conceptual misconceptions.

### Step 3: Runtime Execution & Verification
1. Run the user's file using Node.js via command execution:
   ```bash
   node <path-to-user-exercise-file>
   ```
2. Capture the standard output and error output:
   - If there is a runtime or syntax error, do **not** fix it for them. Guide them through the debugging process.
   - If it runs cleanly, compare the exact output against the exercise requirements.

### Step 4: Issue Formal Review
Format the feedback using our standard **Senior Developer Review**:
- **Overall Result:** `PASSED` / `NEEDS IMPROVEMENT` / `NOT PASSED`
- **What Was Done Right:** Highlight specific correct implementations, clean practices, or correct predictions.
- **What Needs Improvement:** Point out exact mismatches (e.g. typos, capitalization, missing semicolons, formatting).
- **Misconception Alert:** Note any flawed assumptions.
- **Knowledge Assessment:** Ask 1-2 follow-up verification questions to confirm deep understanding.

### Step 5: Update Tracking Records
If the exercise is passed:
1. Mark the exercise complete in `PROGRESS.md`.
2. Update corresponding scores in `MASTERY_MAP.md`.
3. Log the milestone in `LEARNING_JOURNAL.md`.
4. Present the next milestone or lesson.

