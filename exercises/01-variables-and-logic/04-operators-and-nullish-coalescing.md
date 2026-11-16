# Challenge 04 — Operators: Arithmetic, Comparison, Logical, & Nullish Coalescing

**Concept Note:** [04-operators-and-nullish-coalescing.md](../../documentation/concept-notes/1.1-fundamentals/04-operators-and-nullish-coalescing.md)  
**Your Implementation File:** `exercises/01-variables-and-logic/src/04-operators-and-nullish-coalescing.js`

---

## Part 1: Code Tracing (Predict Before Running)
Trace every line without running Node.js:

```javascript
let stock = 5;
const taken = stock--;
const updated = ++stock;
console.log({ stock, taken, updated });

console.log(0 || 49);
console.log(0 ?? 49);
console.log("" ?? "Guest");
console.log(undefined ?? "Guest");
console.log(null ?? 0 ?? 99);

console.log("Kape" && 0 && 100);
console.log(false || "Fallback" || "Last");
console.log(1 < 5 < 3);
console.log(5 == "5", 5 === "5");
```

---

## Part 2: Bug Diagnostics
Explain what is broken in each snippet:

```javascript
// Bug 1
const age = 25;
if (18 <= age <= 22) {
  console.log("Student fare eligible");
}
// Why does age = 25 print "Student fare eligible"?!

// Bug 2
function getDeliveryFee(promoFee) {
  return promoFee || 59;
}
console.log(getDeliveryFee(0)); // Customer got Free Delivery (0), why did it return 59?!

// Bug 3
// const rate = config.a || config.b ?? 0.12;
// Why does JavaScript refuse to even run this line (SyntaxError)?
```

---

## Part 3: Hands-On Coding Challenge
Create `exercises/01-variables-and-logic/src/04-operators-and-nullish-coalescing.js` and build a **Courier Fee & Time Breakdown Calculator**:

1. Write `resolveSettings(userConfig)` that accepts an object like `{ deliveryFee, note, maxRetries }` where values may be `0`, `""`, `null`, or `undefined`:
   - Default `deliveryFee` to `49` using `??` (must preserve `0` for free shipping!).
   - Default `note` to `"Leave at gate"` using `??` (must preserve `""` if the user explicitly cleared the note!).
   - Default `maxRetries` to `3` using `??` (must preserve `0` retries!).
   - Combine `||` and `??` safely with parentheses in at least one derived field (for example: treating `undefined` or `null` priority as falling back to `"standard"`, only after checking an optional override).
2. Write `formatDuration(totalMinutes)` using `/` and `%` (remainder) + `Math.floor`:
   - Reject negative or non-finite inputs using short-circuit logical checks (`typeof ... && ...`).
   - Return `{ hours, minutes }` (e.g., `135` minutes -> `{ hours: 2, minutes: 15 }`).
3. Write `isWithinRange(value, min, max)` using proper comparison + `&&` (never chained `min <= value <= max`!).
4. Test all functions against boundary inputs (`0`, `""`, `null`, `undefined`, negative numbers, exact `min`/`max` bounds).

### Run & Verify
```bash
node exercises/01-variables-and-logic/src/04-operators-and-nullish-coalescing.js
```

