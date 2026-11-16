# 1.1.2 Data Types: `string`, `number`, `boolean`, `null`, `undefined`, `bigint`, `symbol`

**MDN Official References:**
- [JavaScript data types and data structures (MDN)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures) — Focus on *Dynamic and weak typing* and *Primitive values*
- [`typeof` operator (MDN)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof) — Focus on the return values table
- [`BigInt` (MDN)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt) — Focus on *Description* and *Type information*
- [`Symbol` (MDN)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol) — Focus on *Description*

---

## A. WHAT

JavaScript is a **dynamically typed** language: variables don't have fixed types—**values** have types. Every value in JavaScript is either an **Object** (reference type) or one of the **7 Primitive Data Types**:

1. **`string`** — Textual data encoded as UTF-16 code units (`"Mabuhay"`, `'123'`, `` `₱50` ``).
2. **`number`** — Double-precision 64-bit binary floating-point numbers (IEEE 754). Covers integers (`42`), decimals (`3.14`), `Infinity`, `-Infinity`, and `NaN` (Not-a-Number).
3. **`boolean`** — Logical entity with only two values: `true` or `false`.
4. **`undefined`** — Automatically assigned to declared variables without a value, missing function arguments, or missing object properties.
5. **`null`** — Represents the **intentional absence** of any object or value, explicitly set by the programmer.
6. **`bigint`** — Arbitrary-precision integers (created with an `n` suffix like `9007199254740993n` or `BigInt("...")`) for numbers beyond safe `number` precision.
7. **`symbol`** — Guaranteed-unique, immutable primitive identifiers created via `Symbol("description")`, commonly used as non-colliding object property keys.

All 7 primitives are **immutable**—you cannot alter the characters inside a string or the bits of a number in place; operations always produce a brand-new value.

---

## B. WHY

Computers store everything as binary (`0`s and `1`s), yet programs must distinguish between `"100"` (text to print on a label) and `100` (a quantity you can multiply). Having distinct types lets JavaScript know:
- How much memory to allocate and how to interpret the bits.
- Which operations are legal (`"a".toUpperCase()` vs `10 + 5`).
- Why `null` (intentionally empty) differs from `undefined` (not yet assigned).
- Why `bigint` exists when 64-bit `number` loses precision above $2^{53} - 1$ (`9,007,199,254,740,991`), and why `symbol` exists to prevent property-name collisions across libraries.

---

## C. HOW

### Inspecting Types with `typeof`

```javascript
typeof "Hello";        // "string"
typeof 42;             // "number"
typeof NaN;            // "number"  (careful!)
typeof true;           // "boolean"
typeof undefined;      // "undefined"
typeof 100n;           // "bigint"
typeof Symbol("id");   // "symbol"
typeof null;           // "object"  (famous legacy bug from 1995!)
typeof {};             // "object"
typeof [];             // "object"  (use Array.isArray([]) to check arrays!)
typeof function () {}; // "function"
```

### Safe Checks for Tricky Values
- **Checking `null`:** Never use `typeof x === "null"`. Use `x === null`.
- **Checking `NaN`:** `NaN === NaN` is `false`! Always use `Number.isNaN(x)` (with parentheses—never `x != isNaN`, recall `MISC-005`).
- **Checking Arrays:** Use `Array.isArray(x)`.

### `BigInt` & `Symbol` Basics
```javascript
// BigInt: exact integers past Number.MAX_SAFE_INTEGER (9007199254740991)
const maxSafe = Number.MAX_SAFE_INTEGER;
console.log(maxSafe + 1 === maxSafe + 2); // true! Precision lost in regular Number
console.log(9007199254740991n + 1n === 9007199254740991n + 2n); // false! Exact in BigInt

// Symbol: always unique even with identical descriptions
const id1 = Symbol("userId");
const id2 = Symbol("userId");
console.log(id1 === id2); // false
```

---

## D. UNDER THE HOOD

1. **IEEE 754 Floating-Point Math (`number`):** JavaScript stores all `number` values in 64 bits (1 sign bit, 11 exponent bits, 52 significand bits). Because base-2 binary cannot represent `0.1` or `0.2` cleanly, `0.1 + 0.2 === 0.30000000000000004`! That is also why integers lose accuracy past $2^{53} - 1$.
2. **Why `typeof null === "object"`:** In JavaScript's first implementation, values were stored with type tags; objects had tag `0`, and `null` was represented as the NULL pointer (`0x00`), so `typeof` misread its tag as `"object"`. It remains for backwards compatibility.
3. **Auto-boxing:** Even though primitives have no methods of their own, writing `"abc".toUpperCase()` works because JS temporarily wraps `"abc"` in a `String` object, runs `.toUpperCase()`, and discards the wrapper.

---

## E. WHEN

- **`undefined`**: Let JS supply it for uninitialized variables or omitted parameters; check `value === undefined` when seeing if an input was omitted.
- **`null`**: Assign explicitly when clearing a state or signaling "intentionally no record found" (e.g., `findProductById(...)` returns `null`).
- **`bigint`**: Use for huge IDs (e.g., Twitter/Snowflake 64-bit IDs from APIs), cryptography, or nanosecond timestamps.
- **`symbol`**: Use when attaching private-like metadata keys to an object so third-party code or `Object.keys()`/`for...in` won't collide with or accidentally enumerate them.

---

## F. WHEN NOT

- **Do NOT use `BigInt` for decimals** (`1.5n` is a `SyntaxError`; `BigInt` is integers only, and division truncates decimals: `5n / 2n === 2n`).
- **Do NOT mix `BigInt` and `Number` directly** (`10n + 5` throws a `TypeError`).
- **Do NOT use `NaN === NaN`** or global `isNaN("abc")` (global `isNaN("abc")` coerces `"abc"` to `NaN` and returns `true`, whereas `Number.isNaN("abc")` accurately returns `false` because `"abc"` is a string, not the `NaN` value).

---

## G. COMMON MISTAKES

1. **`typeof null` trap:** Assuming `typeof value === "object"` guarantees `value` is a non-null object (`value !== null && typeof value === "object"` is required!).
2. **`NaN` is `"number"`:** `typeof NaN` returns `"number"`, so `typeof x === "number"` passes for `NaN` unless you also guard `!Number.isNaN(x)`.
3. **Mixing `BigInt` and `Number`:** Writing `totalBigInt + 1` crashes with `TypeError: Cannot mix BigInt and other types`.
4. **Assuming `Symbol("a") === Symbol("a")`:** Two `Symbol()` calls *never* equal each other (unless using the global registry `Symbol.for("a")`).

---

## H. REAL-WORLD APPLICATION

Sa **GCash / Bank Ledger** at **Sari-Sari Store**:
- `undefined`: Hindi pa nilagyan ng laman ang form field ng customer (wala pang entry).
- `null`: Sinadyang i-set ang `discountCoupon = null` dahil pinindot ni customer ang "No voucher".
- `number`: Presyo tulad ng `140.80` (remember rounding with `Math.round(val * 100) / 100` para hindi lumabas ang `0.00000000000003`!).
- `bigint`: 19-digit transaction reference numbers mula sa bangko na lampas sa 15–16 digits.
- `symbol`: Isang secret internal security stamp sa isang transaction object na hindi madaling mapalitan o mabangga ng ibang code na gumagamit ng string keys.

---

## I. KNOWLEDGE CHECK (Answer Without Looking Back)

1. What are the 7 primitive data types in JavaScript, and what does `typeof` return for each (including the famous quirk)?
2. Why does `Number.isNaN("hello")` return `false` while global `isNaN("hello")` returns `true`?
3. Why does `9007199254740991 + 1 === 9007199254740991 + 2` evaluate to `true` in JavaScript, and which primitive solves this?
4. What happens when you run `10n + 5` in JavaScript?

