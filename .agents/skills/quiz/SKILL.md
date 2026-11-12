---
name: quiz
description: Delivers rapid, high-yield retrieval quizzes to test the user's active recall of JavaScript concepts and syntax without giving away answers upfront. Triggered by /quiz or /quiz <topic>.
---

# Rapid Retrieval Quiz Skill (`/quiz`)

This skill tests the developer's retention and mental model through targeted questions based on the current level or a requested topic.

## Trigger Scenarios
- The user types `/quiz` or `/quiz <topic>`.
- The user asks for a pop quiz or practice test.

---

## Workflow Steps

### Step 1: Topic Selection
1. If `<topic>` is specified, target that topic.
2. If no topic is specified, read `PROGRESS.md` and select the most recently completed lesson or spaced repetition item due for review.

### Step 2: Formulate 3 Rapid Questions
Generate exactly 3 questions designed for retrieval practice (no multiple-choice unless requested):
1. **Question 1: Conceptual Core (The "Why")**  
   Ask what problem the concept solves or why JavaScript behaves that way.
2. **Question 2: Code Tracing / Prediction**  
   Show a 2-4 line snippet and ask the developer to predict the exact output or explain what happens under the hood before running it.
3. **Question 3: Error Diagnosis / Edge Case**  
   Show a subtle bug or mistake and ask the user to explain why it fails and how to fix it.

### Step 3: Evaluate Answers
When the user submits their answers:
1. Grade each answer candidly: Full Credit, Partial Credit, or Misconception.
2. Explain the internal engine mechanics if an answer is inaccurate.
3. If a misconception is detected, log it in `MISCONCEPTIONS.md`.
4. Update `MASTERY_MAP.md` if the score warrants an increase.

