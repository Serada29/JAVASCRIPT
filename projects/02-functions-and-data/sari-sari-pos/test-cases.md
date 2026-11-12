	# Test Cases — Sari-Sari Store Terminal POS & Inventory Manager

Use a sample initial inventory like the one below when writing your test runner inside `src/` so you can verify every single scenario directly in your terminal.

### Sample Starting Inventory
| ID | Name | Price (PHP) | Stock | Category |
|---|---|---|---|---|
| `1` | `"Lucky Me Pancit Canton"` | `18` | `10` | `"Noodles"` |
| `2` | `"Coke Mismo 300ml"` | `25` | `6` | `"Drinks"` |
| `3` | `"Argentina Corned Beef"` | `42` | `4` | `"Canned Goods"` |
| `4` | `"Jasmine Rice (1 kg)"` | `58` | `15` | `"Staples"` |
| `5` | `"Kopiko Black 3-in-1"` | `12` | `0` | `"Coffee"` |

---

## Core Functional & Edge-Case Scenarios

Run all 8 test cases sequentially at the bottom of your script (or in a separate `tests.js` file) and verify both the returned object and the terminal output.

---

### TC-01: Normal Checkout (No Discount)
- **Input:**
  - `cart`: `[{ productId: 1, quantity: 3 }, { productId: 2, quantity: 2 }]`
  - `cashTendered`: `150`
  - `isSeniorOrPwd`: `false`
  - `promoCode`: `""`
- **Expected Computation:**
  - Pancit Canton: `3 * 18 = 54`
  - Coke Mismo: `2 * 25 = 50`
  - `subtotal`: `104`
  - `discount`: `0`
  - `finalTotal`: `104`
  - `change`: `46`
- **Expected Side Effect on Inventory:**
  - Product `1` stock drops from `10` to `7`.
  - Product `2` stock drops from `6` to `4` (now `"Low Stock"`!).
- **Expected Return:** `{ success: true, subtotal: 104, discount: 0, finalTotal: 104, change: 46 }`

---

### TC-02: Senior / PWD Discount (20% Off)
- **Input:**
  - `cart`: `[{ productId: 3, quantity: 2 }]` *(Argentina Corned Beef)*
  - `cashTendered`: `100`
  - `isSeniorOrPwd`: `true`
  - `promoCode`: `""`
- **Expected Computation:**
  - `subtotal`: `84` (`2 * 42`)
  - `discount`: `16.8` (`20% of 84`)
  - `finalTotal`: `67.2`
  - `change`: `32.8`
- **Expected Side Effect on Inventory:**
  - Product `3` stock drops from `4` to `2`.
- **Expected Return:** `{ success: true, subtotal: 84, discount: 16.8, finalTotal: 67.2, change: 32.8 }`

---

### TC-03: Promo Code `"SUKI10"` Rules & Non-Stacking
- **Part A — Subtotal Under 200 (Should NOT apply discount):**
  - `cart`: `[{ productId: 1, quantity: 2 }]` -> `subtotal = 36`
  - `isSeniorOrPwd`: `false`, `promoCode`: `"SUKI10"`, `cashTendered`: `50`
  - **Expected:** `discount = 0`, `finalTotal = 36`, `change = 14`.
- **Part B — Subtotal >= 200 (Should apply 10%):**
  - `cart`: `[{ productId: 4, quantity: 4 }]` -> `subtotal = 232` (`4 * 58`)
  - `isSeniorOrPwd`: `false`, `promoCode`: `"SUKI10"`, `cashTendered`: `300`
  - **Expected:** `discount = 23.2`, `finalTotal = 208.8`, `change = 91.2`.
- **Part C — Non-Stacking Priority Check:**
  - If `isSeniorOrPwd = true` AND `promoCode = "SUKI10"` on a `200` peso subtotal -> only **20%** (`40`) applies, NOT 30%!

---

### TC-04: Edge Case — Non-Existent Product ID
- **Input:**
  - `cart`: `[{ productId: 99, quantity: 1 }]`
  - `cashTendered`: `100`
- **Expected Result:** `{ success: false, message: "..." }` (e.g., `"Product ID 99 not found"`)
- **Inventory Check:** All stocks remain untouched.

---

### TC-05: Edge Case — Atomic Rollback on Insufficient Stock
*This tests if your loop protects inventory integrity!*
- **Input:**
  - Suppose Product `1` currently has `stock = 5` and Product `5` has `stock = 0`.
  - `cart`: `[{ productId: 1, quantity: 2 }, { productId: 5, quantity: 1 }]`
  - `cashTendered`: `100`
- **Expected Result:** `{ success: false, message: "..." }` (Insufficient stock for Kopiko Black)
- **CRITICAL INVENTORY CHECK:** Product `1` stock **MUST STILL BE `5`** (it must **NOT** drop to `3`!).

---

### TC-06: Edge Case — Empty Cart & Invalid Quantity
- **Test 6A:** `cart = []` -> `{ success: false, message: "..." }`
- **Test 6B:** `cart = [{ productId: 1, quantity: 0 }]` -> `{ success: false, message: "..." }`
- **Test 6C:** `cart = [{ productId: 1, quantity: -2 }]` -> `{ success: false, message: "..." }`
- **Test 6D:** `cart = [{ productId: 1, quantity: 1.5 }]` -> `{ success: false, message: "..." }` *(Cannot sell half a sachet of Pancit Canton!)*

---

### TC-07: Edge Case — Insufficient Cash Tendered
- **Input:**
  - `cart`: `[{ productId: 4, quantity: 2 }]` (`subtotal = 116`)
  - `cashTendered`: `100`
- **Expected Result:** `{ success: false, message: "..." }` (Insufficient payment)
- **CRITICAL INVENTORY CHECK:** Product `4` stock **MUST NOT** change!

---

### TC-08: Low Stock Report & Stock Status
- Call `getLowStockReport(inventory)` after running the transactions above.
- **Expected:** Returns an array containing only products whose stock is `<= 5`, and `getStockStatus(product.stock)` accurately classifies `0` as `"Out of Stock"` and `1–5` as `"Low Stock"`.

---

### Bonus Challenge (Optional Edge Case)
What happens if a customer puts the **same product twice** in one cart?  
Example: `inventory` has `4` Cokes, and `cart` is:  
`[{ productId: 2, quantity: 3 }, { productId: 2, quantity: 3 }]` (total requested: `6` Cokes!).  
Think about how your validation handles that!

