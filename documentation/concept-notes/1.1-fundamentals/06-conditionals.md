# 1.1.6 Conditionals: `if/else`, `switch`, and Ternary

**MDN Official References:**
- [`if...else` (MDN)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else)
- [`switch` (MDN)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch)
- [Conditional (ternary) operator `? :` (MDN)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_operator)

---

## A. WHAT

**Conditionals** let a program branch and choose different actions depending on data:
1. **`if / else if / else`** — General-purpose branching statement that runs the first block whose condition is truthy (and optional `else` fallback).
2. **`switch`** — Evaluates **one** expression once and jumps to the matching `case` clause using **strict equality (`===`)**, executing statements until a `break` (or `return`) stops it.
3. **Conditional (Ternary) Operator (`condition ? exprIfTrue : exprIfFalse`)** — The only operator in JS taking 3 operands; it is an **expression** (produces a value) rather than a statement.

---

## B. WHY

Real programs don't run straight down one fixed track—they must enforce rules: reject invalid quantities, pick the highest non-stacking discount, route menu commands, and format plural vs singular labels (`1 item` vs `3 items`). Choosing the right conditional tool keeps decision logic readable and bug-free.

---

## C. HOW

### 1. `if / else if / else` & Guard Clauses
Always order mutually exclusive conditions from **most specific/highest priority** to **least specific**, or use **early-return guard clauses** inside functions to flatten nesting:
```javascript
function getFareDiscount(passengerType) {
  if (typeof passengerType !== "string") return 0; // Guard clause

  if (passengerType === "senior" || passengerType === "pwd") {
    return 0.20;
  } else if (passengerType === "student") {
    return 0.20;
  } else {
    return 0;
  }
}
```

### 2. `switch` (Strict `===` & Fallthrough)
```javascript
const paymentMethod = "gcash";

switch (paymentMethod) {
  case "cash":
    console.log("Open cash drawer.");
    break;
  case "gcash":
  case "maya": // Intentional fallthrough: shares handler for e-wallets
    console.log("Generate QR Ph code.");
    break;
  default:
    console.log("Unsupported payment method.");
}
```
*Note on block scope in `switch`:* All `case` clauses share the **same** `{ }` block! If you declare `const msg = ...` in two `case` branches without wrapping each branch in `{ ... }`, JS throws a `SyntaxError: Identifier 'msg' has already been declared`.

### 3. Ternary Operator (`? :`)
```javascript
const count = 1;
const label = count === 1 ? "item" : "items"; // Expression returns a value
```

---

## D. UNDER THE HOOD

1. **Statement vs Expression:** `if` and `switch` are **statements** (they control flow; you cannot embed an `if` inside `${...}` in a template literal or on the right side of `const x = ...`). The ternary operator `? :` is an **expression** (it evaluates to a value, so it works inside `const label = ...` and `` `${...}` ``).
2. **How `switch` Matches Cases:** Unlike `==`, `switch` always uses **strict equality (`===`)** between the `switch (expr)` value and each `case value:`. If no `case` matches, it jumps to `default:` (if present). Without `break` or `return`, execution **falls through** into the next `case` body unconditionally—even if that next `case` doesn't match!

---

## E. WHEN

- **`if / else if / else`:** Use for range checks (`subtotal >= 500`), combined conditions (`age >= 18 && hasId`), or 2–3 distinct branches.
- **`switch`:** Use when matching **one single variable/expression** against **3 or more exact discrete values** (commands, status codes, days of week, payment types).
- **Ternary (`? :`):** Use for short, single-line value selection (`const fee = isVip ? 0 : 49`).

---

## F. WHEN NOT

- **Do NOT nest ternaries deeply** (`a ? b : c ? d : e ? f : g`)—it becomes unreadable. Use `if / else if / else` or a lookup object instead.
- **Do NOT use ternary purely for side effects** instead of `if` (`isValid ? save() : logError()` is harder to read than `if (isValid) save(); else logError();`).
- **Do NOT forget `break`** in a `switch` case unless fallthrough is 100% intentional.

---

## G. COMMON MISTAKES

1. **Missing `break` in `switch`:** Execution accidentally runs the matching case AND the next case below it!
2. **Putting `switch (score)` with `case score >= 90:`:** `score` (e.g., `95`) is compared with `===` against `true` (`95 === true` -> `false`)! Either use `if/else` for ranges, or `switch (true)` (though `if/else if` is cleaner for ranges).
3. **Unreachable `else if` order:** Putting `if (subtotal >= 100)` *before* `if (subtotal >= 500)` traps `500` in the first branch so `>= 500` never runs!
4. **Redeclaring `const`/`let` across `switch` cases** without `{ }` braces around each case body.

---

## H. REAL-WORLD APPLICATION

Sa **Traffic Light / E-Wallet Checkout Router**:
- `if / else if / else`: Para sa tiered discount rules (`>= 500` -> 15%, `>= 200` -> 10%, else 0%)—kailangan laging pinakamataas na threshold ang nauuna!
- `switch`: Para sa payment channel (`"cash"`, `"gcash"`, `"maya"`, `"card"`).
- Ternary: Para sa mabilisang label sa resibo: `` `${qty} ${qty === 1 ? "pc" : "pcs"}` ``.

---

## I. KNOWLEDGE CHECK (Answer Without Looking Back)

1. Why is `if` a statement while `? :` is an expression, and where does that distinction matter?
2. What equality algorithm (`==` or `===`) does `switch` use, and what happens if you forget `break`?
3. Why does writing `if (score >= 75) ... else if (score >= 90) ...` fail for a score of `95`?
4. Why can declaring `const msg = "hi";` inside two different `case` clauses of the same `switch` throw a `SyntaxError`?

