# Challenge 09 — Console Debugging and Comments

**Concept Note:** [09-console-debugging-and-comments.md](../../documentation/concept-notes/1.1-fundamentals/09-console-debugging-and-comments.md)  
**Your Implementation File:** `exercises/01-variables-and-logic/src/09-console-debugging-and-comments.js`

---

## Part 1: Code Tracing (Predict Before Running)
Predict what appears in the terminal:

```javascript
const product = { id: 1, name: "Milo" };
console.log("Product: " + product);
console.log("Product:", product);
console.log({ product });

const stock = 4;
console.assert(stock >= 0, "Stock cannot be negative");
console.assert(stock > 10, "Low stock alert!");

console.log("// Inside quotes is not a comment");
```

---

## Part 2: Bug Diagnostics
Identify the two comment/debugging mistakes below:

```javascript
// Mistake 1:
/*
  Disable old checkout block:
  /* Nested note: old tax formula */
  const tax = 0.12;
*/

// Mistake 2:
function computeFee(amount) {
  console.log(amount * 0.02);
}
const total = 100 + computeFee(100);
console.log("Total:", total); // Prints NaN! Why?
```

---

## Part 3: Hands-On Coding Challenge
Create `exercises/01-variables-and-logic/src/09-console-debugging-and-comments.js` and build a **Diagnostic Audit Runner**:

1. Write a short **JSDoc (`/** ... */`)** comment above your main function explaining its parameters and return value, plus at least **two "WHY" comments** inside the code explaining non-obvious business logic (do NOT write noisy "what" comments like `// increment i`).
2. Write `auditInventory(items)` that:
   - Opens a `console.group("Inventory Audit")` and starts a `console.time("auditDuration")` timer.
   - Displays the raw array cleanly with `console.table(items)`.
   - Loops through `items`, using:
     - `console.assert(typeof item.stock === "number" && item.stock >= 0, ...)` to flag invalid negative/corrupted stock.
     - `console.warn(...)` when an item is low stock (`stock > 0 && stock <= 5`).
     - `console.error(...)` when an item is out of stock (`stock === 0`) or invalid.
   - Stops the timer (`console.timeEnd("auditDuration")`) and closes the group (`console.groupEnd()`).
   - **Returns** a clean summary object `{ totalItems, lowStockCount, outOfStockCount, invalidCount }` (never substitute `console.log` for `return`!).
3. Test with a realistic 5-item array containing healthy stock, low stock (`3`), zero stock (`0`), and a corrupted negative stock (`-2`), then log `{ summary }`.

### Run & Verify
```bash
node exercises/01-variables-and-logic/src/09-console-debugging-and-comments.js
```

