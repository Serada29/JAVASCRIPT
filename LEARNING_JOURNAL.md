# Learning Journal

This journal records every mentorship session, key concepts explored, breakthroughs, and next steps.

---

## Session 01 — 2026-11-09

### Focus
- Workspace initialization and mentorship system setup.
- **Lesson 00:** Introduction to Programming, JavaScript, Runtimes, and the Console.

### Topics Introduced
1. What a computer program actually is (a sequence of unambiguous instructions).
2. Why JavaScript was created and where it runs today (Browser & Node.js runtimes).
3. How a JavaScript engine reads and executes instructions top-to-bottom.
4. How developers communicate with the console using `console.log()`.

### Assigned Reading
- MDN Web Docs: *What is JavaScript?* (`https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/What_is_JavaScript`)

### Assigned Work
- Answer Lesson 00 Knowledge Check questions (in your own words).
- Complete **Exercise 00-01** (`exercises/00-foundations/01-first-instructions.md`).

### Status
- **Exercise 00-01 Completed & Evaluated (PASSED).**
- Developer diagnosed 4/4 syntax errors correctly, demonstrated top-to-bottom execution understanding, fixed a runtime `MODULE_NOT_FOUND` error, and executed their first Node.js script.
- **Active Recall Quiz (`/quiz`) Completed: 3/3 (100% Score).**
  - Demonstrated solid mental model of identifiers vs. string literals.
  - Articulated sequential engine execution.
  - Successfully identified case sensitivity and quote delimiter mismatches.
- Ready for Lesson 01: Statements, Syntax, and Comments.

---

## Session 02 — 2026-11-10

### Focus
- **Lesson 01:** Statements, Syntax, Semicolons, and Comments.
- Code Review of **Exercise 00-02** (`exercise-02.js`).

### Review Findings
- **Result:** PASSED (All requirements fulfilled).
- Developer added the missing semicolon on line 13.
- Developer accurately identified the invalid backslash comment syntax in Snippet 2 (`\\` vs `//`).
- **Misconception `[MISC-001]` Resolved:** Developer clearly explained that enclosing `//` inside quotes causes the engine to evaluate it as a string literal rather than a comment.
- Ready for Lesson 02: Strings and Text Output.

---

## Session 03 — 2026-11-11

### Focus
- **Diagnostic Baseline Assessment:** Developer reported prior familiarity with `if` conditions, loops, functions, arrays, and objects.
- Created **Diagnostic Project: Sari-Sari Store Terminal POS & Inventory Manager** (`projects/02-functions-and-data/sari-sari-pos/`) following the 12-Step Project Workflow.

### Status
- Awaiting Developer's answers to the Pre-Coding Knowledge Check and Independent Plan before coding in `src/`.

---

## Session 04 — 2026-11-16

### Focus
- Completed and officially evaluated **Diagnostic Project: Sari-Sari Store Terminal POS & Inventory Manager** (`projects/02-functions-and-data/sari-sari-pos/src/index.js`) via `/exercise-checker`.

### Outcome & Calibration
- **Verdict:** **PASSED** (8/8 test scenarios verified in Node.js, including atomic rollback on TC-05 and TC-07).
- **Misconceptions Resolved:** `MISC-002` through `MISC-010` resolved across struggle-first debugging (loop bounds, premature `return`, `typeof`/`Number.isNaN`, global scope accumulator leaks, `[null]` array wrapping, array-vs-object property access, and read-only validation before mutation).
- **Calibrated `MASTERY_MAP.md`:** Level 1–2 topics scored at `2` (Guided Understanding) and `3` (Independent Competence) based on observed evidence.
- **Formal Review Saved:** `reviews/project-reviews/diagnostic-sari-sari-pos-review.md`.

