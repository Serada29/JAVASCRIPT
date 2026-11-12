# Review Rubric — Sari-Sari Store Terminal POS & Inventory Manager

This diagnostic project will be evaluated using a Senior Developer Code Review (`PROJECT VERDICT`) across the 5 pillars below. Each pillar maps directly to `MASTERY_MAP.md`.

---

## Pillar 1: Variables, Data Types & Strict Syntax (Level 0–1)
- [ ] Uses `const` by default and `let` only when reassignment is necessary (no `var`).
- [ ] Uses strict equality (`===`, `!==`) rather than loose equality (`==`, `!=`).
- [ ] Prevents `NaN` or type coercion bugs (e.g., checks numeric validity on quantity/cash).
- [ ] Formats monetary values cleanly in terminal output.

---

## Pillar 2: Conditionals & Business Rule Precision (Level 1)
- [ ] Correctly classifies `"Out of Stock"`, `"Low Stock"`, `"In Stock"`, and invalid negative values in `getStockStatus()`.
- [ ] Properly handles discount precedence: Senior/PWD (20%) overrides Promo Code `"SUKI10"` (10%), and discounts never stack.
- [ ] Enforces the minimum `200` subtotal threshold on `"SUKI10"`.

---

## Pillar 3: Loops & Array Processing (Level 1–2)
- [ ] Cleanly iterates through `inventory` and `cart` without off-by-one errors (`<=` vs `<`).
- [ ] Exits search loops early once a matching product is found (no unnecessary full-array overwrites).
- [ ] `getLowStockReport()` returns a new filtered array without mutating `inventory`.

---

## Pillar 4: Functions, Parameters & Return Values (Level 2)
- [ ] Each function accepts inputs via parameters rather than silently relying on global variables.
- [ ] Calculation and search functions **return** clean values (`null`, numbers, arrays, result objects) rather than only calling `console.log()`.
- [ ] Clear separation between business logic (`calculateDiscount`, `findProductById`) and receipt printing.

---

## Pillar 5: Edge Cases, Atomicity & Code Quality
- [ ] **Atomic Transaction Integrity:** Rejecting an invalid item or insufficient payment leaves ALL inventory stocks completely untouched.
- [ ] Handles empty carts, unknown IDs, `0`/negative/decimal quantities, and insufficient cash cleanly without crashing.
- [ ] Clear, descriptive variable names, flat control flow (uses early returns instead of deeply nested `if` blocks), and concise explanatory comments.

---

## Diagnostic Calibration Outcome
After reviewing your code and questioning your implementation decisions:
- Topics where you demonstrate independent competence will be promoted directly to **Level 3** in `MASTERY_MAP.md`.
- Any identified gaps or habits (e.g. side-effect mutations, missing `return`s, nested `if` pyramids, loose equality) will be logged and targeted with focused remediation drills.

