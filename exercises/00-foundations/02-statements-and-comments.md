# Exercise 00-02 — Statements, Syntax, and Comments

**Level:** Level 0 — Zero Programming Knowledge  
**Topic:** Statements, Semicolons, and Comments (`//`, `/* */`)  
**Prerequisites:** Lesson 01 & Assigned MDN Reading

---

## Objective
Verify that you can:
1. Predict how the JavaScript engine treats comments during execution.
2. Spot syntax errors involving broken or unclosed comments.
3. Write clean, well-documented JavaScript code in `exercises/00-foundations/exercise-02.js` using both single-line and multi-line comments.

---

## Part 1: Code Tracing (Predict Before Running)
Do **not** run this code yet. Read it carefully line by line like the JavaScript engine and write your prediction:

```javascript
// console.log("A. Papasok sa trabaho.");
console.log("B. Kumain ng almusal.");
/* 
console.log("C. Naligo sa banyo.");
console.log("D. Nag-abang ng bus.");
*/
console.log("E. Dumating sa opisina."); // console.log("F. Umalis ng maaga.");
```

**Question 1A:** What lines of text will actually be printed to the terminal? (List the letters).  B, E
**Question 1B:** Will `"F. Umalis ng maaga."` be printed? Why or why not?  No, comment  was remove in the code after javascript initialization.
**Question 1C:** How many statements did the JavaScript engine actually execute? 2

---

## Part 2: Syntax Diagnostics (Find the Bugs)
Look at these snippets and explain what is wrong with each one without running them:

```javascript
// Snippet 1
/*
  Receipt Generator
  Version: 1.0
console.log("Printing receipt...");

// Snippet 2
\\ Check if store is open
console.log("Store Open");

// Snippet 3
console.log("// Magandang araw!");
// Question for Snippet 3: Does this line print "// Magandang araw!" or does JavaScript ignore it as a comment? Why? - this will not run and it was comment because of the muliple line comment is not end with "*/"
```

---

## Part 3: Hands-On Code Challenge
Create a new file yourself at:
`exercises/00-foundations/exercise-02.js`

### Requirements
1. **Multi-line Header Comment:** At the very top of your file, create a multi-line comment (`/* ... */`) that includes:
   - Script Title (e.g. `Sari-Sari Store POS` or `Transaction Logger`)
   - Developer: Your name
   - Date: Current date
2. **First Statement:** Print a welcome or transaction start message terminated with a semicolon `;`.
3. **Single-line Explanation Comment:** Write a single-line comment (`//`) explaining a business note (e.g., `// Regular customer transaction`).
4. **Second & Third Statements:** Print two purchased items or transaction details terminated with semicolons `;`.
5. **A Commented-Out Statement:** Write a statement that prints a discount (e.g., `console.log("Discount: -10 PHP");`), but **comment it out** using `//` so it does not run.
6. **Final Statement:** Print the exact text:
   `console.log("Transaction saved.");`
7. Every active JavaScript statement must end with an explicit semicolon `;`.

### Execution
Run your code in your terminal:
```bash
node exercises/00-foundations/exercise-02.js
```

### Verification
Once you're done, invoke:
```text
/exercise-checker
```
to automatically test and evaluate your work!

