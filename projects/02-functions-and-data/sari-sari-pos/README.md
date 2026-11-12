# Diagnostic Project: Sari-Sari Store Terminal POS & Inventory Manager

**Curriculum Placement:** Diagnostic Assessment (Testing Level 0 – Level 2 Foundations)  
**Target Directory for Your Code:** `src/` *(You will create and write 100% of the JavaScript files here)*  
**Mode:** Terminal / Node.js (`node`)

---

## 1. Introduction & Purpose

You mentioned knowing the basics of **conditionals (`if`/`else`)**, **loops**, **functions**, **arrays**, and **objects**.  

In software engineering, recognizing syntax is very different from building reliable logic from scratch under constraints. This terminal project is designed as a **real-world diagnostic test** to:
1. Measure what you can actually build independently without tutorials or autocomplete.
2. Expose hidden foundation gaps (such as `return` vs `console.log`, `===` vs `==`, atomic state updates, or unhandled edge cases).
3. Calibrate your `MASTERY_MAP.md` so we focus your mentorship exactly where you need growth instead of wasting time on things you already know.

---

## 2. Official MDN Reference Documentation

Before starting, quickly review these MDN references if you need to check exact syntax (do **not** look up full project tutorials):

- **Conditionals:** [Making decisions in your code — conditionals (MDN)](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Conditionals)
- **Loops:** [Looping code (MDN)](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Loops)
- **Functions & Return Values:** [Functions — reusable blocks of code (MDN)](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Functions) & [Function return values](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Return_values)
- **Arrays:** [Arrays (MDN)](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Arrays)
- **Objects:** [JavaScript object basics (MDN)](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Object_basics)

---

## 3. Mandatory Pre-Coding Knowledge Check

Answer these **4 diagnostic questions** in chat **before** writing any code:

1. **Functions (`return` vs `console.log`):** What is the difference between a function that runs `console.log(total)` versus one that executes `return total`? What happens if you try to do `let final = calculate() + 10;` when `calculate()` only uses `console.log()`?
2. **Comparison (`==` vs `===`):** Why is `5 === "5"` `false`, while `5 == "5"` is `true`? Which one should you use in production JavaScript and why?
3. **Arrays vs Objects:** If you need to store a list of 10 products where each product has a name, price, and stock count, how do arrays and objects work together to represent that?
4. **Transaction Safety (Atomicity):** Imagine a customer buys 2 items: Coke (in stock) and Rice (out of stock). If you deduct Coke's stock inside a loop *before* realizing Rice is out of stock, what bug happens in your store's inventory?

---

## 4. Requirements & Test Specifications

Read the full project specifications carefully:
- Functional & Structural Requirements: [`acceptance-criteria.md`](./acceptance-criteria.md)
- Test Cases & Expected Scenarios: [`test-cases.md`](./test-cases.md)
- How Your Code Will Be Graded: [`review-rubric.md`](./review-rubric.md)

---

## 5. Independent Planning (Before Writing Code)

Do **not** jump straight into typing `.js` code. Follow the engineering workflow:
1. Read `acceptance-criteria.md` and `test-cases.md`.
2. In your own words (in chat or in a `PLAN.md` note), outline:
   - What your `inventory` data structure will look like.
   - Step-by-step **pseudocode** for `checkout()`—specifically how you will validate **all** items and cash *before* modifying any stock counts.
3. Once your plan makes sense, write your implementation inside `src/` (e.g., `src/index.js` or `src/pos.js`).
4. Run your test scenarios in the terminal:
   ```bash
   node projects/02-functions-and-data/sari-sari-pos/src/index.js
   ```
5. Submit your code in chat for a formal **Senior Developer Review (`PROJECT VERDICT`)**.

