# 1.1.4 Operators: Arithmetic, Comparison, Logical, Nullish Coalescing

**MDN Official References:**
- [Expressions and operators (MDN)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_operators)
- [Nullish coalescing operator `??` (MDN)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing)
- [Operator precedence (MDN)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence)

---

## A. WHAT

An **operator** performs an action on one, two, or three values (operands) and produces a result:
1. **Arithmetic Operators:** `+` (add), `-` (subtract), `*` (multiply), `/` (divide), `%` (remainder/modulo), `**` (exponentiation), `++`/`--` (increment/decrement), and compound assignment (`+=`, `-=`, `*=`, `/=`).
2. **Comparison Operators:** Strict equality (`===`, `!==`), loose equality (`==`, `!=`), and relational (`<`, `<=`, `>`, `>=`). Always evaluate to a `boolean`.
3. **Logical Operators:** `&&` (AND), `||` (OR), `!` (NOT). Note: in JS, `&&` and `||` return **one of the operand values**, not necessarily a boolean!
4. **Nullish Coalescing Operator (`??`):** Returns the right-hand operand **only** when the left-hand operand is `null` or `undefined` (nullish); otherwise returns the left-hand operand.

---

## B. WHY

Before `??` (ES2020), developers used `||` to provide default values (`const port = config.port || 3000`). That broke whenever `0`, `""`, or `false` was a **valid** setting (`0 || 3000` overwrote `0` with `3000`!). `??` solves this by treating only `null` and `undefined` as "missing".

---

## C. HOW

### 1. Arithmetic & Remainder (`%`)
```javascript
10 % 3;   // 1 (remainder when 10 is divided by 3)
2 ** 3;   // 8 (2 to the power of 3)
let x = 5;
const a = x++; // Postfix: returns 5, THEN x becomes 6
const b = ++x; // Prefix: x becomes 7, THEN returns 7
```

### 2. Strict (`===`) vs Loose (`==`) Comparison
- **`===` / `!==`**: Compares **type AND value** with zero coercion. (`5 === "5"` -> `false`).
- **`==` / `!=`**: Coerces mismatched types first. (`5 == "5"` -> `true`, `null == undefined` -> `true`, `0 == ""` -> `true`).

### 3. Logical Operators & Short-Circuiting (`&&`, `||`, `!`)
- **`a && b`**: Evaluates `a`. If `a` is **falsy**, stops immediately and returns `a`! If `a` is **truthy**, evaluates and returns `b`.
- **`a || b`**: Evaluates `a`. If `a` is **truthy**, stops immediately and returns `a`! If `a` is **falsy**, evaluates and returns `b`.
- **`!a`**: Coerces `a` to boolean and flips it (`!true === false`, `!!"hi" === true`).

### 4. Nullish Coalescing (`??`) vs Logical OR (`||`)
```javascript
const discount = 0;
console.log(discount || 10); // 10  (BUG! 0 is falsy, so || overrides a valid 0% discount)
console.log(discount ?? 10); // 0   (SAFE! 0 is neither null nor undefined)

const promoCode = "";
console.log(promoCode || "NONE"); // "NONE"
console.log(promoCode ?? "NONE"); // "" (preserved because "" is not nullish)

const missing = undefined;
console.log(missing ?? "Default"); // "Default"
```

---

## D. UNDER THE HOOD

1. **Short-Circuit Evaluation:** In `typeof stock === "number" && stock >= 0`, if `stock` is `"abc"`, the left side is `false`, so JS **never even evaluates** `stock >= 0`. This lets you put safety checks on the left to protect the right side!
2. **Operator Precedence & Syntax Safety with `??`:** `*` and `/` bind tighter than `+` and `-`; `===` binds tighter than `&&`, which binds tighter than `||`, which binds tighter than `??`. Crucially, JavaScript **forbids mixing `??` directly with `&&` or `||` without parentheses** (`a || b ?? c` throws a `SyntaxError` to force clarity: `(a || b) ?? c`).
3. **NaN in Comparisons:** Any comparison with `NaN` (`NaN < 5`, `NaN >= 5`, `NaN === NaN`) always returns `false`!

---

## E. WHEN

- **Always use `===` and `!==`** for equality checks.
- **Use `??`** for default/fallback values when `0`, `""`, or `false` are legitimate values (counts, prices, flags, empty strings).
- **Use `%` (modulo)** to test divisibility (`n % 2 === 0`), wrap around indices, or break total minutes into hours & remaining minutes.

---

## F. WHEN NOT

- **Do NOT use `||` for numeric defaults** where `0` is valid (stock count `0`, temperature `0`, score `0`).
- **Do NOT chain `a < b < c`** in JavaScript! `1 < 5 < 3` evaluates `(1 < 5) < 3` -> `true < 3` -> `1 < 3` -> `true` (WRONG!). Always write `a < b && b < c`.
- **Do NOT confuse assignment (`=`) with equality (`===`)** inside an `if (...)` condition.

---

## G. COMMON MISTAKES

1. **Chained comparisons (`10 <= age <= 20`):** Evaluates left-to-right into a boolean compared to a number!
2. **Mixing `??` with `||` or `&&` without parentheses:** Causes an immediate `SyntaxError`.
3. **Using `||` when `0` is valid:** `const stock = item.stock || 10` accidentally turns out-of-stock (`0`) into `10`!
4. **Wrong guard order with `&&`:** Writing `stock < 0 || typeof stock !== "number"` works for numbers, but if you want short-circuit protection (e.g., `user && user.name`), the null/type guard **must** come first on the left.

---

## H. REAL-WORLD APPLICATION

Sa **Grab / Delivery Fee Calculator**:
- `const deliveryFee = quotedFee ?? 49`: Kapag "Free Delivery" promo (`quotedFee = 0`), ang `??` ay mananatiling `0` pesos! Kung `||` ang ginamit mo, sisingilin mo pa rin ang customer ng ₱49 kahit libre dapat!
- `isLoggedIn && showCheckoutButton()`: Short-circuiting—hindi tatawagin ang `showCheckoutButton()` kung `isLoggedIn` ay `false`.

---

## I. KNOWLEDGE CHECK (Answer Without Looking Back)

1. What does `0 || 50` return vs `0 ?? 50`? Why?  - it return 50 because 0 is falsy. using ?? it return 0 because it only return undefined or null
2. Trace what `"abc" && 0 && 99` evaluates to, and what `"" || "Fallback" || "Other"` evaluates to. //abc - //Fallback because of empty "" falsy 
3. Why does `5 < 10 < 2` evaluate to `true` in JavaScript? Fix it properly.
4. Why does `a && b ?? c` throw a `SyntaxError`, and how do you fix it?

