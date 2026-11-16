# Challenge 10 — Combined Fundamentals Challenges (Topics 1.1.1 – 1.1.9)

These **3 integrated challenges** combine **all 9 topics** from Section 1.1:
- `let`, `const`, block/function scope (zero `var`)
- All 7 primitives (`string`, `number`, `boolean`, `null`, `undefined`, `bigint`, `symbol`)
- Explicit type conversion vs coercion
- Arithmetic, comparison, logical, and nullish coalescing (`??`)
- Truthy & falsy guards (preserving `0` and `""` where valid!)
- Conditionals (`if/else`, `switch`, ternary)
- Loops (`for`, `while`, `for...of`)
- Template literals
- Structured `console` debugging & "why" comments

---

## Combined Challenge A — GCash / Maya Cash-In Fee & Reference Engine
**Your File:** `exercises/01-variables-and-logic/src/10-combined-a-ewallet.js`

Build a batch e-wallet processor `processCashInBatch(requests, config)` that processes an array of cash-in requests and returns `{ processed, rejected, totalCollected }`.

### Requirements
1. **Default Config with `??`:** `config` may omit fields or pass `0`!
   - `config?.freeTierLimit ?? 8000` (if `0` is passed, `0` must be preserved!)
   - `config?.feeRate ?? 0.02` (if `0` is passed for a zero-fee promo, `0` must be preserved!)
   - `config?.minAmount ?? 1`
2. **Strict Input Conversion & Truthy/Falsy Safety:** Each request looks like:
   `{ rawAmount: "500", channel: "gcash", refDigits: "9007199254740993101", promoWaiver: false, note: "" }`
   - Parse `rawAmount` strictly (reject `""`, `"   "`, `null`, `undefined`, `"500php"`, `NaN`, `<= 0`).
   - Convert `refDigits` into a **`BigInt`** inside `try...catch` (or validate digits first with a loop over characters!) so 19-digit transaction references never lose precision.
   - Generate a unique `Symbol("txAudit")` on every accepted transaction record.
   - Preserve `note: ""` with `??` (`req.note ?? "No remarks"`), NOT `||`.
3. **Channel Routing (`switch`) & Tiered Fee (`if/else` + ternary):**
   - Supported channels via `switch`: `"gcash"`, `"maya"` (each has rules or grouped validation), `"gotyme"` (flat ₱0 fee promo). Anything else -> reject!
   - If `amount <= freeTierLimit`, fee is `0`; otherwise fee is `Math.round(amount * feeRate * 100) / 100`.
4. **Loop (`for...of`) & Atomic Output:**
   - Never use `return` inside the batch loop for a single bad request—push invalid entries into `rejected` (with reason) and **`continue`**!
   - Return `{ processed, rejected, totalCollected }` and print a clean **template-literal** summary + `console.table` of processed items.

---

## Combined Challenge B — Jeepney & LRT Commuter Wallet Simulator
**Your File:** `exercises/01-variables-and-logic/src/10-combined-b-commuter.js`

Build a commuter trip simulator `simulateCommuteDay(wallet, trips)` combining `for...of`, `while`, `for`, `switch`, `??`, and template literals.

### Requirements
1. **Wallet Object:** `{ passengerName, passengerType, balance, maxTripsPerDay }` (use `??` to default `maxTripsPerDay ?? 10`).
2. **Trip Entries:** Each trip in `trips` has `{ mode: "lrt" | "jeep" | "bus", stationsOrKm: "6", isPeakHour: true }`.
   - Convert `stationsOrKm` strictly from string/number (reject invalid/non-positive values using `continue`).
3. **Fare Calculation (`switch` + `if/else`):**
   - `"jeep"`: Base ₱13 for first 4 km + ₱2 per extra km (`Math.ceil`).
   - `"bus"`: Base ₱15 for first 5 km + ₱2.50 per extra km.
   - `"lrt"`: ₱15 base + ₱3 per station.
   - Apply `20%` discount if `passengerType` is `"student"`, `"senior"`, or `"pwd"`.
   - Round all fares to 2 decimal places.
4. **Wallet Deduction (`while` / loop limits):**
   - Stop accepting trips (`break`) if `tripsCompleted >= maxTripsPerDay` OR if `balance < fare` (log why via `console.warn`).
   - Also write a separate `countMaxConsecutiveRides(balance, singleFare)` function using a **`while`** loop to calculate how many back-to-back rides remain affordable after the day ends!
5. **Output:** Build a multi-line **template literal** daily travel report using ternary pluralization (`ride` / `rides`) and `console.group` / `console.assert` checks proving `balance` never goes negative.

---

## Combined Challenge C — "Broken Shift Audit" Debugging & Rebuild Gauntlet
**Your File:** `exercises/01-variables-and-logic/src/10-combined-c-audit.js`

### Step 1: Diagnose Without Running!
Read the legacy broken script below and list **at least 10 bugs** (covering `var`, coercion, `typeof null`, `||` vs `??`, truthy/falsy `0`, chained comparison, `switch` fallthrough, off-by-one, premature `return`, template literal syntax):

```javascript
// LEGACY BROKEN CODE — DO NOT COPY-PASTE AS-IS!
function auditShift(records, defaultFee) {
  var grandTotal = 0;
  var fee = defaultFee || 10;

  for (var i = 0; i <= records.length; i++) {
    var rec = records[i];
    if (typeof rec === "object") {
      var amt = Number(rec.amount);
      if (!amt) {
        return "Invalid amount at " + i;
      }
      switch (rec.type) {
        case "sale":
          grandTotal += amt - fee;
        case "refund":
          grandTotal -= amt;
          break;
      }
      if (100 <= amt <= 500) {
        var bonus = 5;
      }
    }
  }
  console.log("Grand total: ${grandTotal}, last bonus: " + bonus);
}
```

### Step 2: Rebuild From Scratch
In `exercises/01-variables-and-logic/src/10-combined-c-audit.js`:
1. Write a clean comment block at the top listing every bug you spotted in the legacy code.
2. Implement a **bug-free** `auditShift(records, defaultFee)` from scratch using modern `const`/`let`, `??`, strict validation (`rec !== null && typeof rec === "object"`), proper `for` / `for...of`, `switch` with `break`, proper range checks, `0`-safe validation (if `0` is invalid vs valid—handle `amount === 0` intentionally and document your rule!), and a template literal report + returned summary object.
3. Run a test suite covering at least **6 edge cases** (`null` record, `amount: 0`, `amount: "250"`, `defaultFee: 0`, `"sale"` vs `"refund"`, and `amount: ""`).

### Verify All Combined Challenges
```bash
node exercises/01-variables-and-logic/src/10-combined-a-ewallet.js
node exercises/01-variables-and-logic/src/10-combined-b-commuter.js
node exercises/01-variables-and-logic/src/10-combined-c-audit.js
```
Invoke `/exercise-checker` after each file (or when all 3 are complete) for your Senior Developer code review!

