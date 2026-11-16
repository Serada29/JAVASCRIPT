# Challenge 03 — Type Conversion and Coercion

**Concept Note:** [03-type-conversion-and-coercion.md](../../documentation/concept-notes/1.1-fundamentals/03-type-conversion-and-coercion.md)  
**Your Implementation File:** `exercises/01-variables-and-logic/src/03-type-conversion-and-coercion.js`

---

## Part 1: Code Tracing (Predict Before Running)
Predict the exact value **and data type** of every expression:

```javascript
console.log("50" + 25);
console.log(10 + 20 + "30");
console.log("50" - 25);
console.log("10" * "3");
console.log(true + true + false);
console.log(null + 10);
console.log(undefined + 10);
console.log(Number(""));
console.log(Number("  42  "));
console.log(Number("42php"));
console.log(parseInt("42php", 10));
console.log(Boolean("false"));
```

---

## Part 2: Bug Diagnostics
Identify the subtle coercion bugs in this checkout input parser:

```javascript
function parseCustomerOrder(rawQty, rawPrice) {
  const qty = Number(rawQty);
  const price = parseFloat(rawPrice);

  if (Number.isNaN(qty) || Number.isNaN(price)) {
    return "Invalid input";
  }
  return qty * price;
}

// Why do these broken inputs sneak past the check?!
console.log(parseCustomerOrder("", "15.50"));       // Returns 0 instead of "Invalid input"!
console.log(parseCustomerOrder("2", "15abc"));      // Returns 30 instead of "Invalid input"!
console.log(parseCustomerOrder(null, "10"));        // Returns 0 instead of "Invalid input"!
console.log(parseCustomerOrder(true, "10"));        // Returns 10 instead of "Invalid input"!
```

---

## Part 3: Hands-On Coding Challenge
Create `exercises/01-variables-and-logic/src/03-type-conversion-and-coercion.js` and build a **Strict Form Input Normalizer**:

1. Write `toStrictNumber(rawInput)` that safely parses user-provided strings or numbers **without** coercion traps:
   - Reject `null`, `undefined`, `boolean`, `symbol`, `bigint`, objects, and arrays -> return `null`.
   - If `rawInput` is a `string`:
     - Trim whitespace (`rawInput.trim()`). If empty `""`, return `null` (do NOT allow `Number("") -> 0`!).
     - Convert with `Number(trimmed)` and ensure `Number.isFinite(num)` is `true` (rejecting `"15abc"` -> `NaN`, `"Infinity"`, etc.).
   - If `rawInput` is already a `number`: return it only if `Number.isFinite(rawInput)`, else `null`.
2. Write `toStrictBoolean(rawInput)` that converts CLI/config strings cleanly:
   - `"true"` / `"yes"` / `"1"` (case-insensitive, trimmed) -> `true`
   - `"false"` / `"no"` / `"0"` (case-insensitive, trimmed) -> `false`
   - Actual booleans `true`/`false` -> keep as-is
   - Anything else (e.g., `""`, `"maybe"`, `null`) -> `null`
3. Write `buildSafeSummary(rawName, rawQty, rawUnitPrice, rawIsSenior)` using your strict converters and test at least **8 edge cases**: `""`, `"   "`, `"12abc"`, `null`, `undefined`, `true`, `"0"`, and valid numeric strings like `" 3 "`.

### Run & Verify
```bash
node exercises/01-variables-and-logic/src/03-type-conversion-and-coercion.js
```

