# Lesson 01 — Statements, Syntax, and Comments

**Level:** Level 0 — Zero Programming Knowledge  
**Prerequisites:** Lesson 00

---

## A. WHAT

### 1. What is a Statement?
A **statement** in JavaScript is a complete sentence of code that performs an action. Just as an English sentence ends with a period (`.`) to tell the reader *"this thought is complete,"* a JavaScript statement typically ends with a semicolon (`;`) to tell the JavaScript engine *"this instruction is complete."*

Example:
```javascript
console.log("Welcome to Sari-Sari Store POS!"); // This entire line is a statement
```

### 2. What are Comments?
**Comments** are notes written in your code for human developers to read. When the JavaScript engine runs your program, it **completely ignores comments**. Comments do not execute, they do not slow down your program, and they never appear in the terminal.

There are two ways to write comments in JavaScript:
1. **Single-Line Comment (`//`)**: Everything on the line after `//` is ignored.
   ```javascript
   // Ito ay comment. Hindi ito babasahin ng computer.
   console.log("Ito ay babasahin.");
   ```
2. **Multi-Line Comment (`/* ... */`)**: Everything between `/*` and `*/` is ignored, even across multiple lines.
   ```javascript
   /*
     Sari-Sari Store Inventory System
     Author: Jessie
     Date: 2026-11-09
   */
   console.log("System Initialized.");
   ```

---

## B. WHY

### Why do we need semicolons (`;`)?
Without clear sentence boundaries, words run together. In early programming languages, computers could not figure out where one instruction ended and the next began without a delimiter. Semicolons provide an unambiguous signal: *"Finish this instruction now."*

### Why do we need comments?
Code tells the computer **HOW** to do something. Comments tell other humans (and your future self 3 months from now) **WHY** you did it that way. If you write code today without notes, you will come back in a few weeks and wonder, *"Bakit ko nga ba sinulat ito?"*

---

## C. HOW

### 1. Statement Structure
A standard statement consists of:
- Keywords or objects (`console`)
- Operators or accessors (`.`)
- Identifiers or methods (`log`)
- Arguments inside parentheses (`("Hello")`)
- Terminator semicolon (`;`)

```javascript
console.log("Customer: Juan dela Cruz");
console.log("Payment: Cash");
console.log("Status: Paid");
```

### 2. Whitespace and Indentation
JavaScript does not care about extra spaces, tabs, or blank lines between statements:
```javascript
// This works:
console.log("Line 1");

console.log("Line 2");
```
However, clean developers use consistent spacing so the code remains neat, readable, and professional.

### 3. Commenting Out Code (Debugging Technique)
Comments are also used during development to temporarily turn off a line of code without deleting it:
```javascript
console.log("Ordering Chicken Joy");
// console.log("Ordering Extra Rice");  <-- Temporarily disabled while testing!
console.log("Order submitted.");
```

---

## D. UNDER THE HOOD (The Engine's Lexer)

When you run `node app.js`, what does the JavaScript Engine (V8) do first?

1. **Lexical Analysis (Tokenization):**  
   The engine reads your file character by character. Before it even attempts to understand your logic:
   - It **strips away** all comments (`//` and `/* ... */`). To the engine, comments vanish into thin air.
   - It breaks down the remaining text into tiny building blocks called **Tokens** (like words in a dictionary).
2. **Automatic Semicolon Insertion (ASI):**  
   If you forget a semicolon at the end of a line, the JavaScript engine tries to be helpful by automatically inserting one behind the scenes.  
   *Warning:* While ASI works in simple cases, in complex code ASI can make wrong guesses and cause silent bugs. That is why professional senior engineers explicitly type their semicolons.

---

## E. WHEN to Use Comments
- To explain **business rules** or non-obvious reasoning (e.g., `// Senior citizens get a 20% discount as mandated by law`).
- To provide a quick summary at the top of a file or module.
- To temporarily disable an instruction while debugging (`commenting out`).

---

## F. WHEN NOT to Use Comments
- **Don't comment the obvious:**  
  ```javascript
  // BAD: Redundant comment
  // This prints hello
  console.log("Hello");
  ```
- **Don't leave dead, obsolete code forever:** If you don't need a chunk of code anymore, delete it (version control like Git remembers old code).

---

## G. COMMON MISTAKES

### Mistake 1: Unclosed Multi-line Comment
```javascript
/* This comment was never closed!
console.log("Hello World");
```
- **Why it breaks:** Because there is no closing `*/`, the JavaScript engine thinks the entire rest of your file is just one giant comment! Your code will never run.

### Mistake 2: Typing comments with backwards slashes
```javascript
\\ Wrong: Backslashes do not create comments
// Correct: Forward slashes
```

---

## H. REAL-WORLD APPLICATION

Imagine a Point-of-Sale (POS) terminal at an **SM Supermarket** or **Mercury Drug**:

```javascript
// ==========================================
// Mercury Drug Checkout Module
// Cashier ID: 1042
// ==========================================

console.log("Item: Biogesic 500mg (10 tablets)");
console.log("Subtotal: PHP 75.00");

// Apply Senior Citizen discount if ID presented
// console.log("Discount Applied: PHP 15.00"); // Disabled: Customer had no ID

console.log("Total Due: PHP 75.00");
```
Here, comments document what cashier is logged in, explain what the discount line does, and allow the cashier system to temporarily disable the discount when the ID is absent without deleting the logic!

---

## I. KNOWLEDGE CHECK

1. What does the JavaScript engine do with your comments when you run a program? -Remove comment code into thin air
2. What is the difference between `//` and `/* */`? double forward slash single line comment, while the other one is multiple line comment. It was required to closed the multiple line comment
3. What is "commenting out" code, and why do developers use it during debugging? help to remove code to test out
4. What is Automatic Semicolon Insertion (ASI), and why shouldn't you rely on it blindly? - javascript automatically insert semicolon at the end of the javascript statement. But sometimes it end the statement premateurly never finished the statemement 

