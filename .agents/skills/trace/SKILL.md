---
name: trace
description: Generates a code tracing challenge where the user must trace JavaScript execution line by line, predict variable values, and output without running code. Triggered by /trace or /trace-code.
---

# Code Tracing Skill (`/trace`)

This skill trains the developer to execute code mentally like the JavaScript engine (V8), building a reliable mental model of execution order, scope, and evaluation.

## Trigger Scenarios
- The user types `/trace` or `/trace <topic>`.
- The user asks to "practice tracing" or "give me a tracing exercise".

---

## Workflow Steps

### Step 1: Generate a Calibrated Code Snippet
1. Read `PROGRESS.md` to ensure the snippet only uses concepts the user has already learned or is currently studying (e.g., Level 0: sequential `console.log`, statements, strings, arithmetic).
2. Craft a 3-8 line snippet that contains intentional sequencing, intermediate steps, or subtle traps (e.g., execution order, case sensitivity, or evaluation order).

### Step 2: Present the Tracing Prompt
1. Instruct the user: **"Do not run this in Node or the terminal yet."**
2. Ask the user to provide:
   - The line-by-line order of execution.
   - The exact console output printed at each step.
   - What the engine does in memory during execution.

### Step 3: Verify and Explain
1. Check the user's prediction.
2. If correct: Affirm their mental model and explain the under-the-hood engine steps.
3. If incorrect: Ask guiding questions to help them locate where their mental model diverged from reality.

