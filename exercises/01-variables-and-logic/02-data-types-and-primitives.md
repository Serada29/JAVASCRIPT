# Challenge 02 — Data Types & All 7 Primitives

**Concept Note:** [02-data-types-and-primitives.md](../../documentation/concept-notes/1.1-fundamentals/02-data-types-and-primitives.md)  
**Your Implementation File:** `exercises/01-variables-and-logic/src/02-data-types-and-primitives.js`

---

## Part 1: Code Tracing (Predict Before Running)
Predict the exact output of every `console.log`:

```javascript
console.log(typeof "123");
console.log(typeof 123);
console.log(typeof NaN);
console.log(typeof null);
console.log(typeof undefined);
console.log(typeof 9007199254740995n);
console.log(typeof Symbol("txn"));
console.log(typeof [1, 2, 3]);

console.log(Symbol("id") === Symbol("id"));
console.log(NaN === NaN);
console.log(Number.isNaN("abc"));
console.log(isNaN("abc"));
```

---

## Part 2: Bug Diagnostics (Fix the Logic in Your Head First)
Why does each check below behave dangerously wrong?

```javascript
// Bug 1
function isPlainObject(val) {
  return typeof val === "object";
}
console.log(isPlainObject(null)); // Returns true! Why?
console.log(isPlainObject([1, 2])); // Returns true! Why?

// Bug 2
const bigA = 9007199254740991;
const bigB = 9007199254740992;
const bigC = 9007199254740993;
console.log(bigB === bigC); // Prints true! Why?

// Bug 3
const refId = 9007199254740993n;
console.log(refId + 1); // Crashes! What error is thrown and why?
```

---

## Part 3: Hands-On Coding Challenge
Create `exercises/01-variables-and-logic/src/02-data-types-and-primitives.js` and build a **Strict Primitive Type Inspector & Ledger Validator**:

1. Write `inspectValue(val)` that returns an accurate human-readable type label distinguishing **all** tricky cases:
   - `"null"` when `val === null` (must NOT return `"object"`)
   - `"array"` when `Array.isArray(val)`
   - `"NaN"` when `typeof val === "number" && Number.isNaN(val)`
   - Otherwise return `typeof val` (`"string"`, `"number"`, `"boolean"`, `"undefined"`, `"bigint"`, `"symbol"`, `"object"`, `"function"`).
2. Write `createBankTransfer(rawIdString, amountInCentavos)` that:
   - Converts `rawIdString` (e.g., `"9007199254740993123"`) into a **`BigInt`** so zero digits are lost!
   - Generates a unique internal audit key using `Symbol("auditToken")` and attaches it to the returned transfer object as `[auditKey]: true`.
   - Validates `amountInCentavos` is a real finite number (`typeof amountInCentavos === "number" && Number.isFinite(amountInCentavos) && amountInCentavos > 0`), returning `null` (intentional absence!) if invalid.
3. Write test calls covering all 7 primitives (`string`, `number`, `boolean`, `null`, `undefined`, `bigint`, `symbol`) plus `NaN`, `[1, 2]`, `{ a: 1 }`, and a 19-digit BigInt ID—and prove two transfers produce non-equal audit `Symbol`s even if their description strings are identical.

### Run & Verify
```bash
node exercises/01-variables-and-logic/src/02-data-types-and-primitives.js
```

