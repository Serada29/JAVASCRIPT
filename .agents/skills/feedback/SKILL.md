---
name: feedback
description: Reviews the user's current in-progress code or answers, diagnoses bugs and mental-model gaps without giving away solutions, explains the engineering thinking needed, provides hints, and teaches one relevant new JavaScript concept/method (e.g., find, forEach, filter) tailored to the problem being solved. Triggered by /feedback.
---

# Continuous Learning Feedback Skill (`/feedback`)

This skill gives real-time mentorship feedback on work-in-progress code or answers—combining code diagnostics, problem-solving mindset coaching, progressive hints, and contextual discovery of useful JavaScript features—while strictly adhering to the rule: **Never write the solution code for the user.**

## Trigger Scenarios
- The user types `/feedback`.
- The user asks for feedback on in-progress code or asks how to think about their current problem.

---

## Workflow Steps

### Step 1: Inspect & Execute Current Work
1. Read the user's active file(s) and check `PROGRESS.md` / `MISCONCEPTIONS.md` for context.
2. If the active file is runnable JavaScript, execute it with `node` to observe exact terminal output or errors.

### Step 2: Diagnose What Works & What Is Wrong
1. Acknowledge specific progress or correct logic first.
2. Identify exact bugs, edge-case gaps, or logic errors and explain *why* they behave that way under the hood.
3. Update `MISCONCEPTIONS.md` if a conceptual gap appears or gets resolved.

### Step 3: Coach the Engineering Thinking Needed
Explain the **mental model / architectural thinking** required to solve the problem cleanly (e.g., separating read-only validation from state mutation, keeping scopes tight, avoiding premature returns).

### Step 4: Progressive Hints (No Spoiling)
Provide concrete, actionable hints guiding the user's next edit without writing their project solution code.

### Step 5: Contextual Micro-Lesson (Learn Something New!)
Introduce **one relevant JavaScript concept, built-in method, or pattern** directly applicable to the exact problem they are currently solving (e.g., `Array.prototype.find()`, `Array.prototype.forEach()`, `Array.prototype.filter()`, `Number.isFinite()`, object references vs primitives):
1. **What it does & why it helps here**
2. **Tiny unrelated 3–5 line code example** (never the project's solution)
3. **Official MDN documentation link**

