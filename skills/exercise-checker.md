# Skill: `/exercise-checker`

## Overview
Evaluates and verifies the user's JavaScript exercise code and answers against the exercise requirements without writing the solution for them.

## Trigger
- `/exercise-checker`
- "Check my exercise"

## Procedures
1. Read the active exercise requirements from `exercises/` matching `PROGRESS.md`.
2. Inspect the user's implementation code and written answers.
3. Execute the code using Node.js to verify terminal output and test for runtime/syntax errors.
4. Output a structured **Senior Developer Review**:
   - Result: `PASSED` / `NEEDS IMPROVEMENT` / `NOT PASSED`
   - What was done right
   - Specific areas for improvement
   - 1-2 Knowledge assessment questions
5. Update `PROGRESS.md`, `MASTERY_MAP.md`, and `LEARNING_JOURNAL.md` upon passing.

