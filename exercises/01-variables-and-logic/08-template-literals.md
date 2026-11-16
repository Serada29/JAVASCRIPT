# Challenge 08 — Template Literals

**Concept Note:** [08-template-literals.md](../../documentation/concept-notes/1.1-fundamentals/08-template-literals.md)  
**Your Implementation File:** `exercises/01-variables-and-logic/src/08-template-literals.js`

---

## Part 1: Code Tracing (Predict Before Running)
Predict the exact output (watch quotes, spaces, and line breaks!):

```javascript
const item = "Kape";
const qty = 2;
const price = 15;

console.log("Order: ${qty}x ${item}");
console.log(`Order: ${qty}x ${item} = ₱${(qty * price).toFixed(2)}`);
console.log(`Status: ${qty > 1 ? "Bundle" : "Single"}`);

const box = `Line 1
  Line 2`;
console.log(box);
```

---

## Part 2: Bug Diagnostics
Find the error or formatting surprise in each snippet:

```javascript
// Bug 1
const stock = 0;
// const msg = `Stock: ${if (stock === 0) "Empty" else "Available"}`;
// Why does this throw a SyntaxError? Fix it!

// Bug 2
function buildNote(title, body) {
  return `
    Title: ${title}
    Body: ${body}
  `;
}
console.log(buildNote("Alert", "Low sugar"));
// Why does the printed output have ugly 4-space indentation before Title and Body?
```

---

## Part 3: Hands-On Coding Challenge
Create `exercises/01-variables-and-logic/src/08-template-literals.js` and build a **Dynamic Receipt & SMS Alert Formatter** using **zero `+` string concatenations**:

1. Write `formatReceiptLine(item)` where `item` is `{ name, qty, unitPrice }`:
   - Return a single-line string using a template literal with embedded math and ternary pluralization, e.g.:  
     `3x Pandesal (pcs) @ ₱5.00 = ₱15.00` (use `"pc"` when `qty === 1`, `"pcs"` otherwise).
2. Write `buildShiftReceipt(storeName, cashier, items, cashPaid)`:
   - Loop over `items` (using `for...of`) to build line items and compute `subtotal`.
   - Use a multi-line template literal (with clean, non-indented left alignment!) to return a multi-line formatted receipt showing:
     - Store header (`=== StoreName ===`)
     - Cashier name
     - All formatted item lines
     - Subtotal, Cash Paid, and Change (all formatted to `.toFixed(2)`)
     - A dynamic footer message using a ternary expression inside `${...}` (`"PAID IN FULL"` vs `"INSUFFICIENT CASH"`).
3. Include a literal `` `${variable}` `` syntax example in a demo message using backslash escaping (`` `\${amount}` ``) without triggering interpolation.

### Run & Verify
```bash
node exercises/01-variables-and-logic/src/08-template-literals.js
```

