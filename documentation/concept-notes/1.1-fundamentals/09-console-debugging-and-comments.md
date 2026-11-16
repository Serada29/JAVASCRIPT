# 1.1.9 Console Debugging and Comments

**MDN Official References:**
- [`console` API (MDN)](https://developer.mozilla.org/en-US/docs/Web/API/console)
- [`console.table()` (MDN)](https://developer.mozilla.org/en-US/docs/Web/API/console/table_static)
- [`console.warn()` (MDN)](https://developer.mozilla.org/en-US/docs/Web/API/console/warn_static) & [`console.error()` (MDN)](https://developer.mozilla.org/en-US/docs/Web/API/console/error_static)
- [Lexical grammar: Comments (MDN)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#comments)

---

## A. WHAT

1. **Console Debugging (`console.*`):** A built-in debugging interface exposed in both Node.js and browsers that prints values, warnings, errors, tables, grouped logs, and execution timings while your code runs.
2. **Comments (`//` and `/* ... */`):** Non-executable annotations written for humans. The JavaScript parser strips them completely before running your code.

---

## B. WHY

When a program produces the wrong output (`NaN`, `undefined`, missing item), staring at code and guessing wastes time. Structured `console` inspection lets you verify **actual runtime values and types** at key checkpoints—while clear comments explain **why** tricky business rules or edge-case guards exist for your future self and teammates.

---

## C. HOW

### 1. Essential `console` Debugging Methods
| Method | Purpose | Example |
|---|---|---|
| `console.log(label, val)` | General output (pass multiple args or `{ val }` to see label + value!) | `console.log({ subtotal, discount })` |
| `console.warn(msg)` | Non-fatal warning (prints to `stderr` in Node, yellow icon in browser) | `console.warn("Low stock warning")` |
| `console.error(msg)` | Error reporting (prints to `stderr` in Node, red error in browser) | `console.error("Invalid product ID")` |
| `console.table(data)` | Displays arrays/objects as a neat aligned table | `console.table(inventory)` |
| `console.group(name)` / `console.groupEnd()` | Indents related logs into a collapsible section | `console.group("Phase 1 Validation")` |
| `console.time(label)` / `console.timeEnd(label)` | Measures elapsed milliseconds between two points | `console.time("checkout")` |
| `console.assert(cond, msg)` | Prints an error **only if** `cond` is falsy! | `console.assert(total >= 0, "Negative total!")` |

### 2. Shorthand Object Logging Trick
```javascript
const subtotal = 160;
const discount = 16;
// Instead of console.log(subtotal, discount) -> "160 16" (which is which?!)
console.log({ subtotal, discount }); // Prints: { subtotal: 160, discount: 16 }
```

### 3. Comments: Explain WHY, Not WHAT
- **Single-line (`// ...`):** Short inline notes or temporarily disabling one line.
- **Multi-line (`/* ... */`):** File headers, temporarily disabling blocks, or JSDoc (`/** ... */`) function documentation.

```javascript
// BAD (narrates obvious syntax):
// Add 1 to i
i++;

// GOOD (explains the business rule / non-obvious why):
// Read-only validation must finish before stock is mutated to guarantee atomic rollback.
```

---

## D. UNDER THE HOOD

1. **Stream Separation (`stdout` vs `stderr`):** In Node.js, `console.log` and `console.table` write to **standard output (`stdout`)**, whereas `console.warn`, `console.error`, and `console.assert` failures write to **standard error (`stderr`)**. Keeping errors on `stderr` allows terminal tools to separate normal program output from error diagnostics.
2. **Comment Stripping & Tokenization:** During lexical analysis, comments outside strings are treated as whitespace and discarded—except inside quotes (`console.log("// not a comment")`, recall `MISC-001`), where `//` is ordinary string text. Also remember multi-line comments **cannot be nested**: `/* outer /* inner */ broken */` ends at the *first* `*/`!

---

## E. WHEN

- Use `console.log({ variable })` or `console.log("CHECK:", typeof x, x)` when tracing values and types at function entry/exit.
- Use `console.table()` when inspecting arrays of objects (like POS `inventory` or `cart`).
- Use `console.group()` / `console.groupEnd()` to separate multi-phase logs cleanly.
- Write comments to document **non-obvious invariants, edge cases, workarounds, and business rules** (e.g., `"// 20% senior/PWD discount is mutually exclusive with bulk promos"`).

---

## F. WHEN NOT

- **Do NOT leave noisy debug `console.log` statements** inside final production functions (unless logging is part of the spec), and remember: `console.log` returns `undefined`—it is **not** a substitute for `return`!
- **Do NOT write comments that repeat what the code already says** (`// set x to 5` above `let x = 5;`).
- **Do NOT nest `/* ... */` comments.**

---

## G. COMMON MISTAKES

1. **Logging inside a function instead of returning (`console.log(total)` vs `return total`):** Printing to screen leaves the caller with `undefined`!
2. **Concatenating objects into strings (`"User: " + user`):** Prints `"User: [object Object]"`! Pass comma-separated arguments (`console.log("User:", user)`) or `{ user }` so the console inspects the actual properties.
3. **Nesting `/* ... */` comments:** Commenting out a huge block that already contains a `/* ... */` header comment breaks at the inner `*/`.
4. **Misusing `console.timeEnd("label")` with a mismatched label:** Must match the exact string passed to `console.time("label")`.

---

## H. REAL-WORLD APPLICATION

Sa **POS System Debugging**:
Kapag may customer complaint na mali ang sukli, gumagamit ang senior engineer ng:
- `console.table(inventory)` para makita agad ang stock ng lahat ng produkto sa isang tingin.
- `console.log({ subtotal, discount, finalTotal, change })` para makita kung saang step nagsimula ang maling computation.
- `console.assert(change >= 0, "BUG: Negative change leaked past validation")` bilang automated sanity check habang nagte-test.

---

## I. KNOWLEDGE CHECK (Answer Without Looking Back)

1. What is the difference between `console.log("Data: " + obj)` and `console.log("Data:", obj)` when `obj` is `{ id: 1 }`?
2. What does `console.assert(stock >= 0, "Negative stock!")` print when `stock` is `5` vs when `stock` is `-1`?
3. Why does writing `/* outer /* inner */ end */` cause a `SyntaxError`?
4. When should you write a comment in production code, and when is a comment unnecessary noise?

