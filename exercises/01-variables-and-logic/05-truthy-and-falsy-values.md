# Challenge 05 — Truthy and Falsy Values

**Concept Note:** [05-truthy-and-falsy-values.md](../../documentation/concept-notes/1.1-fundamentals/05-truthy-and-falsy-values.md)  
**Your Implementation File:** `exercises/01-variables-and-logic/src/05-truthy-and-falsy-values.js`

---

## Part 1: Code Tracing (Predict Before Running)
For each `Boolean(...)` expression, predict `true` or `false` without running code:

```javascript
console.log(Boolean(0));
console.log(Boolean(-0));
console.log(Boolean(0n));
console.log(Boolean("0"));
console.log(Boolean("false"));
console.log(Boolean(" "));
console.log(Boolean(""));
console.log(Boolean([]));
console.log(Boolean({}));
console.log(Boolean(NaN));
console.log(Boolean(null));
console.log(Boolean(undefined));
```

---

## Part 2: Bug Diagnostics
Identify the truthy/falsy trap in each snippet:

```javascript
// Bug 1: Free Promo Item Rejected!
function calculateTotal(price, qty) {
  if (!price || !qty) {
    return "Missing price or quantity";
  }
  return price * qty;
}
console.log(calculateTotal(0, 2)); // Free sample (price = 0) fails! Why?

// Bug 2: Empty Cart Processed!
function submitCart(cart) {
  if (cart) {
    return "Order placed!";
  }
  return "Cart is empty!";
}
console.log(submitCart([])); // Prints "Order placed!" for an empty array! Why?

// Bug 3: Whitespace Name Accepted!
function saveCustomerName(name) {
  if (name) {
    return `Saved: ${name}`;
  }
  return "Name required";
}
console.log(saveCustomerName("   ")); // Prints "Saved:    "! Why?
```

---

## Part 3: Hands-On Coding Challenge
Create `exercises/01-variables-and-logic/src/05-truthy-and-falsy-values.js` and build a **Truthy/Falsy Audit & Safe Form Guard**:

1. Write `classifyTruthiness(values)` that takes an array of mixed values and returns an object `{ truthy: [], falsy: [] }` containing the truthy items and falsy items separated cleanly.
   - Test it with all 8 Node.js falsy values (`false`, `0`, `-0`, `0n`, `""`, `null`, `undefined`, `NaN`) plus tricky truthy values (`"0"`, `"false"`, `" "`, `[]`, `{}`, `-1`, `1n`).
   - Verify `falsy.length === 8`!
2. Write `validateProductEntry(product)` where `product` is `{ name, price, stock, tags }`:
   - `name` must be a string with non-empty trimmed characters (`typeof product.name === "string" && product.name.trim().length > 0`).
   - `price` and `stock` must accept **`0`** as valid! (Do NOT use `if (!product.price)`). Reject `null`, `undefined`, `NaN`, strings, and negatives.
   - `tags` must be a non-empty array (`Array.isArray(product.tags) && product.tags.length > 0`).
   - Return `{ valid: true }` or `{ valid: false, errors: [...] }` listing every failed field.

### Run & Verify
```bash
node exercises/01-variables-and-logic/src/05-truthy-and-falsy-values.js
```

