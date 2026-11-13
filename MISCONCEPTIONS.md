# Misconception Diagnostic Tracker

Whenever a conceptual misunderstanding surfaces during quizzes, code tracing, exercises, or project reviews, it is logged here so we can systematically diagnose **why** it happened and verify its resolution through targeted practice.

---

## Active & Historical Misconceptions

## [MISC-001] String Literals vs Comment Syntax Inside Quotes
- **Date Identified:** 2026-11-10
- **Status:** Resolved
- **Developer's Incorrect Mental Model:** Initially conflated comment symbols inside a string literal with actual comments.
- **Correct Engineering Mental Model:** Anything enclosed inside quotation marks (`" "` or `' '`) is treated strictly as string data (text characters). Comment symbols like `//` or `/*` lose their special syntactic meaning inside quotes.
- **Root Cause Analysis:** Conflation of tokenization rules (code syntax vs string literal contents) and reading separate test snippets as a single cascaded file.
- **Verification Exercise / Question:** What does `console.log("// Magandang araw!");` print when run in isolation?
- **Resolution Evidence:** 2026-11-10 — Developer independently and correctly stated: "It will run completely fine. because of the \"\" it read as a string."

## [MISC-002] Missing Return Value & Undefined Arithmetic (NaN)
- **Date Identified:** 2026-11-11
- **Status:** Improving
- **Developer's Incorrect Mental Model:** Correctly identified that a function without `return` yields `undefined`, but guessed `undefined + 10` might equal `20` (unsure what JavaScript produces).
- **Correct Engineering Mental Model:** `undefined` coerced to a number during arithmetic yields `NaN` (Not-a-Number). Therefore `undefined + 10` evaluates to `NaN`, and any further math using `NaN` also produces `NaN`.
- **Root Cause Analysis:** Unfamiliarity with JavaScript numeric coercion rules for `undefined` vs `null` vs numbers.
- **Verification Exercise / Question:** Tested in the Diagnostic POS project (`calculateDiscount` and `checkout` totals) to ensure all calculation functions strictly `return` numbers and avoid `NaN`.
- **Resolution Evidence:** Pending project completion & review.

## [MISC-003] Array Loop Boundary & Zero-Based Indexing (Off-By-One Error)
- **Date Identified:** 2026-11-11
- **Status:** Resolved
- **Developer's Incorrect Mental Model:** Fixed display loop to `i < Inventory.length`, but in `findProductById` wrote `for (let i = 1; i <= Inventory.length; i++)`, skipping index `0` and overshooting to `Inventory[5]` (`undefined`).
- **Correct Engineering Mental Model:** Zero-indexed arrays always start at index `0` and end at `arr.length - 1` (so standard loop is `let i = 0; i < arr.length; i++`). Array index `i` is separate from a product's `id` property (`1, 2, 3...`).
- **Root Cause Analysis:** Confusing array index position (`0`-based) with object `id` numbers (`1`-based), and mixing `<` vs `<=`.
- **Verification Exercise / Question:** Test `findProductById(Inventory, 1)` and `findProductById(Inventory, 6)` and confirm index `0` is checked without `TypeError`.
- **Resolution Evidence:** 2026-11-11 — Fixed loop bounds to `i = 0; i < Inventory.length` and verified ID 1, ID 5, and ID 6 in Node.js.

## [MISC-004] Premature Return Inside Search Loop (`if ... return ... else return null`)
- **Date Identified:** 2026-11-11
- **Status:** Resolved
- **Developer's Incorrect Mental Model:** Placed `else { return null }` inside the `for` loop in `findProductById`.
- **Correct Engineering Mental Model:** Executing `return` exits the entire function immediately on the very first non-matching item. A search loop must only `return` early when a match **is** found; `return null` belongs **after** the loop finishes checking all elements.
- **Root Cause Analysis:** Thinking `return` only exits the `if` branch or moves to the next loop iteration (confusing `return` with `continue`).
- **Verification Exercise / Question:** Trace `findProductById(Inventory, 3)` step by step and move `return null` outside the loop.
- **Resolution Evidence:** 2026-11-11 — Moved `return null;` outside the loop in `findProductById` and verified ID 1, ID 5, and ID 6.

## [MISC-005] Misuse of `typeof` and `isNaN` (`stock != typeof (Number)` -> `stock != isNaN`)
- **Date Identified:** 2026-11-11
- **Status:** Resolved
- **Developer's Incorrect Mental Model:** Replaced `stock != typeof (Number)` with `stock != isNaN`, treating `isNaN` as a value/type constant rather than a function call, and without using `typeof stock !== "number"`.
- **Correct Engineering Mental Model:** Check type with `typeof stock !== "number"` (returns `"number"`, `"string"`, etc.) and check `NaN` by **calling** `Number.isNaN(stock)` with parentheses. Comparing `stock != isNaN` compares a number against the `isNaN` function object, which is always `true`.
- **Root Cause Analysis:** Unfamiliarity with function invocation (`isNaN(x)` vs `isNaN`) and `typeof` syntax (`typeof x !== "number"`).
- **Verification Exercise / Question:** Test `getStockStatus` with `-1`, `0`, `3`, `10`, `"abc"`, and `NaN` in Node.js.
- **Resolution Evidence:** 2026-11-11 — Fixed line 70 to `stock < 0 || typeof stock !== "number" || Number.isNaN(stock)` and verified string, In Stock, Low Stock, and Out of Stock outputs in Node.js.

## [MISC-006] Global Accumulator State & Returning Inside Filter Loop (`return arr.push(...)`)
- **Date Identified:** 2026-11-12
- **Status:** Resolved
- **Developer's Incorrect Mental Model:** Declared empty result arrays outside `getLowStockReport` and wrote `return inventoryLowStock.push(inventory[i])` inside the `for` loop.
- **Correct Engineering Mental Model:** 1) Using `return` inside a filtering/collection loop stops the function after the first match, missing all remaining items. 2) `arr.push(x)` returns the new array length (a number), not the array. 3) Accumulator arrays should be initialized locally *inside* the function and returned *after* the loop completes, avoiding shared global state bugs (e.g., duplicate items if called twice).
- **Root Cause Analysis:** Transferring single-item search pattern (`return` on match) into a multi-item collection loop, plus using global variables instead of pure local return values.
- **Verification Exercise / Question:** Refactor `getLowStockReport(inventory)` to collect both low-stock and out-of-stock items (`<= 5`) into a local array and return it cleanly—and prove calling it twice doesn't duplicate results.
- **Resolution Evidence:** 2026-11-12 — Articulated global scope cause ("it repeat the same data... happened because of global scope reference"), moved array into function scope, removed premature return, and verified calling `getLowStockReport(inventory)` twice cleanly returns 2 items without duplicates.

## [MISC-007] Wrapping Single Function Return Inside an Array (`[null] !== null`)
- **Date Identified:** 2026-11-12
- **Status:** Resolved
- **Developer's Incorrect Mental Model:** Created `let productIdExist = []` and pushed the result of `findProductById()` into it inside `checkout`, then compared `productIdExist !== null`.
- **Correct Engineering Mental Model:** `findProductById()` returns either a single product object or `null`. Wrapping `null` in an array produces `[null]`, and an array object is never strictly equal to `null` (`[null] !== null` is always `true`). Store the return value directly in a variable (`const product = findProductById(...)`) and test `product === null` directly.
- **Root Cause Analysis:** Over-using arrays when storing a single return value per loop iteration, masking `null` inside `[null]`.
- **Verification Exercise / Question:** Trace what `[null] !== null` evaluates to, store `findProductById` directly in a `const` variable, and implement early guard returns (`{ success: false, message: "..." }`) for TC-04 through TC-06.
- **Resolution Evidence:** 2026-11-12 — Removed array wrapper and stored `const productIdExist = findProductById(...)` directly with `if (productIdExist === null)` guard clause.

## [MISC-008] Returning Success Inside Multi-Item Validation Loop & Boundary `<` vs `<=`
- **Date Identified:** 2026-11-12
- **Status:** Resolved
- **Developer's Incorrect Mental Model:** Placed `return cart;` inside the `for` loop in `checkout` after validating only `cart[0]`, and wrote `product.stock <= cart[i].quantity` (rejecting exact-stock purchases).
- **Correct Engineering Mental Model:** A validation loop must check **every** item before proceeding—only *failures* can `return` early inside the loop. Buying the exact remaining stock (`stock === quantity`) is valid; failure occurs only when `quantity > product.stock`.
- **Root Cause Analysis:** Premature loop return habit + off-by-one boundary condition (`<=` vs `<`).
- **Verification Exercise / Question:** Test `checkout` when item 0 is valid (`id: 1, qty: 3`), item 1 is invalid (`id: 5, qty: 1`), AND when a customer buys all exact remaining stock (`id: 3, qty: 5`).
- **Resolution Evidence:** 2026-11-12 — Moved `return cart` outside loop, fixed `product.stock < cart[i].quantity`, and verified mixed valid/invalid cart catches item #2 (`id: 5`) cleanly.

## [MISC-009] Accessing Object Properties Directly on an Array (`inventory.id`, `inventory.price`)
- **Date Identified:** 2026-11-12
- **Status:** Resolved
- **Developer's Incorrect Mental Model:** Inside `checkout`'s second loop, wrote `if (cart[i].productId === inventory.id)` and `inventory.price` directly on the `inventory` array.
- **Correct Engineering Mental Model:** `inventory` is an **array** (`[...]`), not a single product object, so `inventory.id` and `inventory.price` both evaluate to `undefined`. To get a product object's `.price`, you must either index into an element (`inventory[j].price`) or call `findProductById(inventory, cart[i].productId)`.
- **Root Cause Analysis:** Temporarily forgetting that `inventory` is an outer collection array containing objects rather than an object itself.
- **Verification Exercise / Question:** Compute `subtotal` cleanly using `findProductById` (or directly inside Phase 1's loop where `product` is already retrieved) with a running accumulator variable (`let subtotal = 0`).
- **Resolution Evidence:** 2026-11-12 — Eliminated redundant array/nested loop, computed `product.price * cart[i].quantity` inside Phase 1's loop into `subtotal`, and verified exact sum `176` in Node.js.

## [MISC-010] Premature State Mutation Inside Validation Loop & Premature Return (`return inventory[j].stock = ...`)
- **Date Identified:** 2026-11-13
- **Status:** Improving
- **Developer's Incorrect Mental Model:** Placed stock deduction (`for (let j...) return inventory[j].stock = ...`) inside `checkout()`'s Phase 1 validation loop, breaking atomicity and returning `14` on the first item.
- **Correct Engineering Mental Model:** Keep validation completely read-only. Only deduct stock in a separate Phase 3 loop *after* every item and `cashTendered` have passed validation. Additionally, `return x = y` exits the function immediately with `y`; never place `return` inside a loop that must process multiple items.
- **Root Cause Analysis:** Trying to finish validation + subtotal + stock update all in a single pass, plus recurring `return` inside loop habit.
- **Verification Exercise / Question:** Move stock deduction into Phase 3 after `cashTendered` validation, verify TC-05 and TC-07 leave `inventory` stocks untouched on failure, and return `{ success: true, subtotal, discount, finalTotal, change }`.
- **Resolution Evidence:** 2026-11-13 — Moved stock deduction into Phase 3 (`cart.forEach`) after `cashTendered` validation and verified receipt + return object on happy path; awaiting full TC-01..TC-08 test run (TC-05/TC-07 verification).

---

### Entry Template

```markdown
## [MISC-001] <Topic Name>
- **Date Identified:** YYYY-MM-DD
- **Status:** Unresolved | Improving | Resolved
- **Developer's Incorrect Mental Model:** What was assumed or written.
- **Correct Engineering Mental Model:** How JavaScript actually works.
- **Root Cause Analysis:** Why the misunderstanding occurred.
- **Verification Exercise / Question:** Specific prompt or challenge used to verify correction.
- **Resolution Evidence:** Date and proof of independent mastery.
```

