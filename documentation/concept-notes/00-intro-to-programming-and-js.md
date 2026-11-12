# Lesson 00 — Introduction to Programming, JavaScript, and the Console

**Level:** Level 0 — Zero Programming Knowledge  
**Prerequisites:** None (Absolute Zero)

---

## A. WHAT

### 1. What is Programming?
**Programming** is the act of writing a step-by-step list of exact instructions (called a **program**) for a computer to follow.

Computers look smart, rendered with flashy graphics and fast responses, but on their own, they have **zero common sense** and **zero initiative**. A computer is a literal instruction-following machine. If you tell a human, *"Go buy 1 kilo of rice at the kanto,"* a human knows to bring money, walk out the door, cross the street safely, and ask the vendor. A computer doesn't know any of that unless every single step is explicitly instructed.

### 2. What is JavaScript?
**JavaScript (JS)** is one of the languages humans use to write those instructions.
- Every website you visit is built on three core pillars:
  1. **HTML** — Content & structure (e.g., text, buttons, input boxes).
  2. **CSS** — Visual style & layout (e.g., colors, fonts, spacing).
  3. **JavaScript** — Logic, calculation, and behavior (e.g., calculating your shopping cart total, checking if your GCash balance is enough, updating the screen when you click a button).

### 3. What is a JavaScript Runtime?
JavaScript code is just plain text until something runs it. The environment that reads and runs your JavaScript is called a **JavaScript Runtime**.
- **Browser Runtime:** Built into Chrome, Edge, Firefox, Safari. Runs JavaScript inside web pages.
- **Node.js Runtime:** Installed directly on your computer (you have `Node.js v24.15.0` installed!). It lets you run JavaScript files directly from your terminal without needing a browser or a website.

### 4. What is the Console?
The **Console** is a text output window where your program can print messages so you (the developer) can see what your program is doing. We send messages to the console using the instruction:

```javascript
console.log("Magandang araw!");
```

---

## B. WHY

### Why does JavaScript exist?
When the World Wide Web started in the early 1990s, web pages were completely static—like digital posters or newspaper pages. If you typed a number into a form and clicked submit, your browser had to send a request all the way to a remote server just to check if you left a box blank.

In 1995, **Brendan Eich** created JavaScript so browsers could execute logic *right there on the user's computer*. Later, engineers took Chrome's JavaScript engine (**V8**) and created **Node.js**, allowing developers to build entire backend servers, command-line tools, and full-stack applications using a single language: JavaScript.

### Why do we start with the Console instead of buttons and web pages?
If you try to learn HTML, CSS, browser layouts, and JavaScript logic all at the same time, it is easy to get confused about which part is doing what. By starting in the **Console**, we strip away all visual noise and focus 100% on how JavaScript thinks, calculates, and executes instructions.

---

## C. HOW

### How a Computer Executes JavaScript Instructions
By default, JavaScript executes your code **synchronously from top to bottom, left to right**—one statement at a time.

Look at this tiny 3-line program:

```javascript
console.log("Step 1: Buksan ang tindahan.");
console.log("Step 2: Bilangin ang paninda.");
console.log("Step 3: Magbenta sa customer.");
```

When you run this file:
1. JavaScript reads **Line 1**, executes it completely (prints `Step 1: Buksan ang tindahan.`), and finishes.
2. Only after Line 1 finishes does JavaScript move to **Line 2**, executing it completely.
3. Only after Line 2 finishes does JavaScript move to **Line 3**.

### Breaking Down `console.log("Magandang araw!");`
Every single symbol in that line has a specific job:
- `console` — Refers to the runtime's built-in console object (our diagnostic output screen).
- `.` (dot) — Means "access a tool/action inside `console`."
- `log` — The specific action (method) that prints a message out.
- `( ... )` (parentheses) — Means "run/execute the `log` action using whatever is inside these parentheses."
- `"Magandang araw!"` — A piece of text data (called a **String**), wrapped in quotation marks so JavaScript knows it is plain text and not a JavaScript command.
- `;` (semicolon) — Marks the end of the statement (like a period `.` at the end of an English sentence).

---

## D. UNDER THE HOOD

What actually happens in the split second when you run `node my-file.js`?

1. **Reading the Source Code:** The JavaScript Engine (**V8** in Node.js and Chrome) reads your `.js` file as raw characters.
2. **Parsing (Syntax Check):** Before executing your logic, the engine checks the **syntax** (grammar). It verifies that quotes are closed, parentheses match, and keywords are valid. If you wrote `console.log("Hello)` (missing the closing quote), the parser stops immediately and throws a `SyntaxError`.
3. **Execution (Top-to-Bottom):** Once parsed, the engine creates a **Global Execution Context** and runs your statements sequentially on the **Call Stack**—one instruction at a time.

---

## E. WHEN

- **When to use `console.log()`:**
  - When writing CLI (Command-Line Interface) programs to display information to the user.
  - When debugging and inspecting what your program is doing at a specific step.
  - When verifying whether a line of code actually ran.

---

## F. WHEN NOT

- **When NOT to rely only on `console.log()`:**
  - In a real web application (Level 4+), regular users don't open the Developer Console (`F12`) to use a website—they look at the web page itself. `console.log()` is for developers and terminal programs, not for webpage buttons or alerts.

---

## G. COMMON MISTAKES

### Mistake 1: Forgetting Quotation Marks Around Text
```javascript
// WRONG:
console.log(Magandang araw);
```
- **Why it happens:** Humans naturally write words without quotes.
- **Why JavaScript fails:** Without quotes (`" "` or `' '`), JavaScript thinks `Magandang` and `araw` are the names of commands or variables in its memory, not plain text! It will crash with a `SyntaxError` or `ReferenceError`.

### Mistake 2: Capitalizing `Console` or `Log`
```javascript
// WRONG:
Console.log("Hello");
console.Log("Hello");
```
- **Why it happens:** Word processors auto-capitalize the first letter of a line.
- **Why JavaScript fails:** JavaScript is **case-sensitive**. `console` and `Console` are treated as two completely different words. Built-in `console.log` is strictly lowercase.

### Mistake 3: Unmatched Parentheses or Quotes
```javascript
// WRONG:
console.log("Hello');
console.log("Hello"
```
- **Why it happens:** Starting a string with double quotes `"` and ending with a single quote `'`, or forgetting the closing parenthesis `)`.
- **How to recognize it:** JavaScript will report `SyntaxError: Invalid or unexpected token` or `SyntaxError: missing ) after argument list`.

---

## H. REAL-WORLD APPLICATION

Imagine a digital queuing screen at an **LTO branch** or **BDO bank** in the Philippines, or the thermal receipt printer at **7-Eleven**.
When a cashier scans three items, the system doesn't print the receipt in a random order. It executes instructions sequentially:
1. Print store header (`7-Eleven Philippines`).
2. Print Item 1 (`Gulp 16oz - 35.00`).
3. Print Item 2 (`Siopao Asado - 49.00`).
4. Print total and thank-you message.

If the programmer puts the "Print Total" instruction on Line 1 before the items, the machine will blindly print the total at the top of the receipt. Order of instructions matters!

