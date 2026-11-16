# Official Documentation Map

As an independent JavaScript engineer, **official documentation** is your primary source of truth. Tutorials become outdated; official specs and MDN Web Docs teach you how the language actually works. 

---

## Primary JavaScript References (MDN Web Docs)

1. **MDN — Dynamic Scripting with JavaScript (Beginner Learning Pathway)**
   - URL: https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting
   - **When to use:** When learning a concept for the first time with guided explanations and context.

2. **MDN — JavaScript Guide**
   - URL: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide
   - **When to use:** When studying how language features (loops, functions, expressions, objects, promises) fit together conceptually.

3. **MDN — JavaScript Reference**
   - URL: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference
   - **When to use:** When looking up exact syntax, parameters, return values, and edge cases of built-in objects (`Array`, `String`, `Math`, `Object`, etc.) or statements.

---

## Backend Reference (Unlocked at Level 8)

4. **Node.js Official API Documentation**
   - URL: https://nodejs.org/docs/latest/api/
   - **When to use:** When working with server-side modules (`fs`, `path`, `http`, `process`, `events`, etc.).

---

## How to Read Documentation Like an Engineer

When I assign a reading from MDN:
1. **Don't memorize every word:** Read to understand the **purpose**, the **inputs**, and the **output/behavior**.
2. **Focus on the assigned sections:** MDN pages often link to advanced edge cases. Stick to the assigned sections first so you don't get side-tracked.
3. **Read the code examples actively:** Before looking at the comment or output of an MDN example, cover it and predict what it will produce.
4. **Test in your console:** Type variations of what you read into your Browser Console or Node terminal (`node`) to see what breaks.

---

## Assigned Reading Log

| Lesson | Topic | MDN Link | Focus Sections |
|---|---|---|---|
| **Lesson 00** | What is JavaScript? | [What is JavaScript? (MDN)](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/What_is_JavaScript) | *A high-level definition*, *So what can it really do?*, *How do you add JavaScript to your page?* (conceptual overview only) |
| **Lesson 00** | Console Output | [console: log() static method (MDN)](https://developer.mozilla.org/en-US/docs/Web/API/console/log_static) | Summary paragraph & *Syntax* |
| **Lesson 01** | Grammar & Comments | [Grammar and types (MDN)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types) | *Basics*, *Comments*, *Declarations* |
| **Lesson 01** | Lexical Grammar & Comments | [Lexical grammar: Comments (MDN)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#comments) | *Single-line comment*, *Multi-line comment* |
| **Lesson 02** | Strings in JavaScript | [Handling text — strings in JavaScript (MDN)](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Strings) | *The power of words*, *Single quotes, double quotes, and backticks*, *Escaping characters in a string*, *Concatenating strings* |
| **Lesson 02** | Escape Sequences | [Escape sequences (MDN Reference)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#escape_sequences) | Table of escape sequences (`\'`, `\"`, `\\`, `\n`, `\t`) |
| **1.1.1** | Variables & Scope | [`let`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let) / [`const`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const) / [`var`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var) | *Description*, *TDZ*, *Hoisting*, *Objects and arrays* |
| **1.1.2** | Data Types & Primitives | [Data types & structures (MDN)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures) | *Dynamic typing*, *Primitive values* (`BigInt`, `Symbol`, `null`, `undefined`), `typeof` |
| **1.1.3** | Type Conversion & Coercion | [Equality & sameness (MDN)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Equality_comparisons_and_sameness) | *Strict vs Loose equality*, `ToNumber` / `ToString` / `ToBoolean` rules |
| **1.1.4** | Operators & Nullish Coalescing | [`??` Operator (MDN)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing) | *Precedence*, `??` vs `\|\|`, short-circuit evaluation |
| **1.1.5** | Truthy & Falsy Values | [Truthy](https://developer.mozilla.org/en-US/docs/Glossary/Truthy) & [Falsy](https://developer.mozilla.org/en-US/docs/Glossary/Falsy) | Complete falsy list (`0`, `-0`, `0n`, `""`, `null`, `undefined`, `NaN`, `false`) |
| **1.1.6** | Conditionals | [`if...else`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else) / [`switch`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch) / [`? :`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_operator) | Strict `===` matching, fallthrough, statement vs expression |
| **1.1.7** | Loops (`for`, `while`, `for...of`) | [Loops and iteration (MDN)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration) | `for`, `while`, `for...of`, `break`, `continue` |
| **1.1.8** | Template Literals | [Template literals (MDN)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals) | Expression interpolation `${...}`, multi-line whitespace, escaping |
| **1.1.9** | Console Debugging & Comments | [`console` API (MDN)](https://developer.mozilla.org/en-US/docs/Web/API/console) | `log`, `warn`, `error`, `table`, `group`, `time`, `assert`, comments |

