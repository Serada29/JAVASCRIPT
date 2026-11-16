# Challenge 06 — Conditionals: `if/else`, `switch`, and Ternary

**Concept Note:** [06-conditionals.md](../../documentation/concept-notes/1.1-fundamentals/06-conditionals.md)  
**Your Implementation File:** `exercises/01-variables-and-logic/src/06-conditionals.js`

---

## Part 1: Code Tracing (Predict Before Running)
Predict the exact output for each snippet:

```javascript
// Snippet A
const tier = "gold";
switch (tier) {
  case "bronze":
    console.log("5% off");
  case "gold":
    console.log("15% off");
  case "platinum":
    console.log("25% off");
    break;
  default:
    console.log("0% off");
}

// Snippet B
const score = 95;
let grade;
if (score >= 75) {
  grade = "C";
} else if (score >= 90) {
  grade = "A";
} else {
  grade = "F";
}
console.log(grade);

// Snippet C
const items = 1;
console.log(`${items} ${items === 1 ? "item" : "items"}`);
```

---

## Part 2: Bug Diagnostics
Explain what is wrong in each snippet:

```javascript
// Bug 1
const code = "gcash";
switch (code) {
  case "gcash":
    const fee = 0;
    console.log("GCash:", fee);
    break;
  case "card":
    const fee = 15; // SyntaxError! Why?
    console.log("Card:", fee);
    break;
}

// Bug 2
const x = "1";
switch (x) {
  case 1:
    console.log("Matched number 1");
    break;
  default:
    console.log("No match");
}
// Which branch runs and why?
```

---

## Part 3: Hands-On Coding Challenge
Create `exercises/01-variables-and-logic/src/06-conditionals.js` and build a **Jeepney / Tricycle Fare & Payment Router**:

1. Write `getBaseFare(vehicleType)` using a **`switch`** statement:
   - `"traditional-jeep"` -> `13`
   - `"modern-jeep"` -> `15`
   - `"tricycle-regular"` or `"tricycle-special"` (shared grouped `case` fallthrough!) -> `20` (for `"tricycle-regular"` and `"tricycle-special"` only if handled cleanly—or give `"tricycle-regular"` `15` and group `"modern-jeep"`/`"e-jeep"` at `15`, and `"tricycle-special"` `30`!) Let's use:
     - `"traditional-jeep"` -> `13`
     - `"modern-jeep"` or `"e-jeep"` (grouped fallthrough) -> `15`
     - `"tricycle-special"` -> `30`
     - `default` -> `null`
2. Write `calculateCommuterFare(vehicleType, distanceKm, passengerType)` using **`if / else if / else`** guard clauses and priority rules:
   - Validate `getBaseFare(vehicleType)` is not `null`, and `distanceKm` is a finite number `> 0` (return `null` if invalid).
   - First 4 km are covered by the base fare; every additional km above 4 (use `Math.ceil(distanceKm - 4)` if fractional) adds `2` pesos per km.
   - Discounts (`if / else if / else`):
     - `"senior"`, `"pwd"`, or `"student"` -> `20%` discount (`0.20`).
     - `"regular"` -> `0%` discount.
     - Any unknown `passengerType` -> return `null`.
   - Round final fare cleanly to 2 decimal places (`Math.round(val * 100) / 100`).
3. Write `formatFareTag(passengerCount, fare)` using a **ternary** expression for `"passenger"` vs `"passengers"` and `"FREE"` vs `"₱..."` if fare is `0`.
4. Test all vehicle types, distances (`2`, `4`, `7.5`), passenger types (`"student"`, `"senior"`, `"regular"`, `"alien"`), and invalid inputs.

### Run & Verify
```bash
node exercises/01-variables-and-logic/src/06-conditionals.js
```

