	 # Acceptance Criteria — Sari-Sari Store Terminal POS & Inventory Manager

Your implementation in `src/` must satisfy all requirements below without using any external libraries or frameworks (100% pure Vanilla JavaScript running in Node.js).

---

## 1. Data Modeling (Arrays & Objects)

1. Create an `inventory` array containing **at least 5 product objects**.
2. Each product object must have these properties:
   - `id` (number or string, unique per product — e.g., `1` or `"P01"`)
   - `name` (string — e.g., `"Lucky Me Pancit Canton"`)
   - `price` (number — e.g., `18`)
   - `stock` (number — e.g., `15`)
   - `category` (string — e.g., `"Noodles"`)

---

## 2. Required Modular Functions

Your program must break down logic into clean, reusable functions. **Functions must `return` values**—do not rely only on `console.log()` inside calculation/lookup functions.

### Function 1: `findProductById(inventory, productId)`
- Loops through the `inventory` array to search for an item matching `productId` using **strict equality (`===`)**.
- **Returns:** The matching product object if found, or `null` if no product matches.

### Function 2: `getStockStatus(stock)`
- Uses `if / else if / else` logic to classify stock availability:
  - If `stock < 0` or not a valid number -> return `"Invalid Stock"`
  - If `stock === 0` -> return `"Out of Stock"`
  - If `stock >= 1 && stock <= 5` -> return `"Low Stock"`
  - If `stock > 5` -> return `"In Stock"`

### Function 3: `calculateDiscount(subtotal, isSeniorOrPwd, promoCode)`
- Computes the exact peso discount based on these business rules (discounts do **not** stack):
  1. If `isSeniorOrPwd === true`, discount is **20%** of `subtotal` (Senior/PWD discount always takes priority).
  2. Otherwise, if `promoCode === "SUKI10"` **AND** `subtotal >= 200`, discount is **10%** of `subtotal`.
  3. Otherwise, discount is `0`.
- **Returns:** The discount amount as a number (e.g., `40`, not `"40"`).

### Function 4: `getLowStockReport(inventory)`
- Loops through `inventory` and finds every product whose `stock <= 5`.
- **Returns:** A new array containing only the low-stock / out-of-stock product objects. *(Tip: Do not mutate the original `inventory` array).*

### Function 5: `checkout(inventory, cart, cashTendered, isSeniorOrPwd, promoCode)`
- `cart` is an array of order objects, where each entry has `{ productId, quantity }`.
- Must execute these steps safely:
  1. **Validate Cart Not Empty:** If `cart` is empty (`cart.length === 0`), reject the checkout.
  2. **Validate Every Item Before Mutating Stock:**
     - Does the `productId` exist in `inventory`? (Use `findProductById`).
     - Is `quantity` a positive number (`> 0`) and a whole integer? (Cannot buy `0`, `-2`, or `1.5` pieces of canned sardines).
     - Is `quantity <= product.stock`?
     - **CRITICAL ATOMICITY RULE:** If **any** item in the cart fails validation, the **entire checkout must fail** and **NO product's stock may be deducted**.
  3. **Calculate Totals:**
     - Sum `(product.price * item.quantity)` across all cart items to get `subtotal`.
     - Call `calculateDiscount(subtotal, isSeniorOrPwd, promoCode)` to get `discount`.
     - Compute `finalTotal = subtotal - discount`.
  4. **Validate Payment:**
     - Check if `cashTendered` is a valid number and `cashTendered >= finalTotal`.
     - If insufficient cash, reject the checkout without modifying inventory!
     - Compute `change = cashTendered - finalTotal`.
  5. **Update Inventory & Print Receipt:**
     - Only after all checks succeed, deduct the purchased `quantity` from each product's `stock` in `inventory`.
     - Print a clear, formatted terminal receipt showing items bought, quantities, line totals, subtotal, discount, final total, cash paid, and change.
  6. **Return Result Object:**
     - On failure: Return `{ success: false, message: "..." }` (with a clear human-readable reason).
     - On success: Return `{ success: true, subtotal, discount, finalTotal, change }`.

---

## 3. Coding Standards & Constraints

- Use `const` by default; only use `let` when a variable must be reassigned. Never use `var`.
- Always use strict equality (`===` and `!==`), never loose equality (`==` or `!=`).
- Handle currency cleanly (e.g., avoid `19.999999999999` floating-point noise in printed receipts using `.toFixed(2)` when formatting output).
- Do not leave unused variables or messy commented-out code.
- **No AI-generated shortcuts:** You must write and understand 100% of your code.

