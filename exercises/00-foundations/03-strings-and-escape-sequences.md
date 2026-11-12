# Exercise 00-03 — Strings, Quotes, and Escape Sequences

**Level:** Level 0 — Zero Programming Knowledge  
**Topic:** String Literals, Quote Collision, Escape Characters (`\'`, `\"`, `\\`, `\n`, `\t`), and Concatenation (`+`)  
**Prerequisites:** Lesson 02 & Assigned MDN Reading

---

## Objective
Verify that you can:
1. Predict the terminal output of strings containing escape sequences (`\n`, `\t`) and string concatenation (`+`).
2. Identify syntax errors caused by quote collision and incorrect escape characters.
3. Write clean JavaScript in `exercises/00-foundations/exercise-03.js` using quotes, escape sequences, and concatenation.

---

## Part 1: Code Tracing (Predict Before Running)
Do **not** run this code yet. Read it carefully line by line like the JavaScript engine and write your predicted output:

```javascript
console.log("Magandang" + " " + "Araw!");
console.log("Linya 1\nLinya 2");
console.log("Kape:\tPHP 25\nTinapay:\tPHP 15");
console.log('Sabi ni Juan: "It\'s okay!"');
```

**Question 1A:** How many total lines of text will appear in the terminal when this 4-statement program runs?  
**Question 1B:** What exact text will be printed by the last line (`console.log('Sabi ni Juan: "It\'s okay!"');`)?  
**Question 1C:** What would `console.log("Bayanihan" + "Republic");` print? What is missing if the developer wanted a space between words?

---

## Part 2: Syntax Diagnostics (Find the Bugs)
Look at each snippet and explain what is wrong without running them:

```javascript
// Snippet 1
console.log('Mang Inasal's Chicken BBQ');

// Snippet 2
console.log("She said, /"Magandang Umaga/"");

// Snippet 3
console.log("Windows Path: C:\Users\Jessie");
// Question for Snippet 3: Why won't this print "C:\Users\Jessie" as expected? What does JavaScript think \U and \J are?
```

---

## Part 3: Hands-On Code Challenge
Create a new file yourself at:
`exercises/00-foundations/exercise-03.js`

### Requirements
Build a formatted terminal receipt for an eatery or store adhering to these exact requirements:

1. **Header Comment:** At the top of your file, include a multi-line comment (`/* ... */`) with the project title, your name, and the date.
2. **Compact Header (using `\n`):** In a **single** `console.log()` statement, print two lines using `\n`:
   - Line 1: Store name (e.g., `D' Original Lechon Store`)
   - Line 2: Branch location (e.g., `Branch: Quezon City`)
3. **Dialogue with Quotes:** Print a statement where a customer speaks, containing **both** double quotes and an apostrophe (e.g., `Customer said: "It's delicious!"`) without causing a syntax error.
4. **Tabular Data (using `\t` and `\n`):** Print a formatted 2-item price list in a single or multiple `console.log()` statements using `\t` to align columns cleanly:
   ```text
   ITEM         PRICE
   Lechon       PHP 150
   Rice         PHP 20
   ```
5. **String Concatenation (using `+`):** Print a thank-you note by concatenating at least **three** separate strings using `+` (e.g., `"Salamat " + "po, " + "Jessie!"`). Make sure spacing between words is correct!
6. **Literal Backslash:** Print a storage path showing an actual Windows backslash (e.g., `Backup saved to: C:\\Receipts\\2026`).
7. **Syntax Cleanliness:** Every statement must terminate with an explicit semicolon `;`.

### Execution
Run your code in your terminal:
```bash
node exercises/00-foundations/exercise-03.js
```

### Verification
Once you're ready, invoke:
```text
/exercise-checker
```
to automatically test and evaluate your code!

