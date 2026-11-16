# 1.1.5 Truthy and Falsy Values

**MDN Official References:**
- [Truthy (MDN Glossary)](https://developer.mozilla.org/en-US/docs/Glossary/Truthy)
- [Falsy (MDN Glossary)](https://developer.mozilla.org/en-US/docs/Glossary/Falsy)
- [Boolean (MDN)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)

---

## A. WHAT

In JavaScript, whenever a value is placed inside a **Boolean context** (like `if (value)`, `while (value)`, `!value`, or `Boolean(value)`), JavaScript converts it to either `true` or `false`:
- **Falsy:** A value that translates to `false` when evaluated in a Boolean context.
- **Truthy:** Any value that is **not** falsy—it translates to `true` in a Boolean context.

### The Complete Falsy List (Memorize All 9!)
1. `false` (boolean)
2. `0` (positive zero)
3. `-0` (negative zero)
4. `0n` (`BigInt` zero)
5. `""` (empty string — `""`, `''`, or `` `` ``)
6. `null`
7. `undefined`
8. `NaN`
9. `document.all` *(browser-only legacy HTML object—does not exist in Node.js)*

**Everything else is truthy!** Including `"0"`, `"false"`, `" "` (a space!), `[]` (empty array), `{}` (empty object), `-1`, `Infinity`, and `Symbol()`.

---

## B. WHY

Truthy and falsy rules make conditional guards shorter and more expressive: instead of writing `if (username !== null && username !== undefined && username !== "")`, developers can often write `if (username)`. Understanding the exact falsy boundary prevents dangerous bugs where valid values like `0` or `""` are accidentally treated as "empty/invalid".

---

## C. HOW

```javascript
// Falsy checks
if ("") {
  console.log("Won't run");
}

// Surprise Truthy values!
if ("false") {
  console.log("RUNS! Because 'false' is a non-empty string.");
}
if ([]) {
  console.log("RUNS! An empty array is an object, and ALL objects are truthy.");
}
if ({}) {
  console.log("RUNS! An empty object is truthy.");
}

// Explicit boolean conversion
console.log(Boolean(0));      // false
console.log(Boolean("0"));    // true
console.log(!!"hello");       // true (double NOT)
```

### Checking Empty Arrays or Objects Properly
Because `[]` and `{}` are **truthy**, `if (cart)` will pass even when `cart` has 0 items!
- To check if an **array** is empty: `if (cart.length === 0)`
- To check if an **object** has no keys: `if (Object.keys(obj).length === 0)`

---

## D. UNDER THE HOOD

JavaScript invokes the ECMAScript abstract operation `ToBoolean(argument)`:
- Unlike `ToNumber` or `==`, **`ToBoolean` does not convert objects to primitives**. Every object reference (arrays, plain objects, functions, dates, boxed `new Boolean(false)`) immediately returns `true` (except the legacy web compatibility quirk `document.all`).
- Notice that **`"false" == false`** is `false` (because `==` converts `"false"` -> `NaN` and `false` -> `0`, and `NaN == 0` is `false`), while **`Boolean("false")`** is `true`! Never confuse loose equality (`==`) with truthiness!

---

## E. WHEN

- Use truthy checks (`if (user)` or `if (!customerName)`) when checking whether a reference object exists or a required non-empty string was provided.
- Use explicit `.length === 0` for empty array checks and `typeof x === "number"` / `x !== undefined` when `0` is a valid input.

---

## F. WHEN NOT

- **Do NOT use `if (quantity)` when `0` is a meaningful state!** (`0` is falsy, so `if (!stock)` cannot distinguish between `stock = 0` [out of stock] and `stock = undefined` [missing data]!).
- **Do NOT use `if (arr)` to check if an array has items.** Always check `Array.isArray(arr) && arr.length > 0`.
- **Do NOT use `if (" ")` thinking whitespace is falsy.** `" "` has length 1, so it is truthy! Trim first: `if (input.trim())`.

---

## G. COMMON MISTAKES

1. **`if (cart)` on `[]`:** Assuming an empty array `[]` is falsy. It is **truthy**!
2. **`if (!price)` rejecting free items (`price = 0`):** If `price` is `0`, `!0` is `true`, falsely flagging a ₱0 promo item as "missing price".
3. **Confusing `"0"` or `"false"` with falsy:** Both are non-empty strings, so both are **truthy**.
4. **Whitespace-only strings:** `"   "` is truthy unless you call `.trim()` first.

---

## H. REAL-WORLD APPLICATION

Sa **Jeepney / Sari-Sari Store Inventory**:
- Kapag `stock = 0`, valid number yan (ubos na ang paninda), hindi "nawawalang data" (`undefined`). Kung isusulat mo ang `if (!stock) { console.log("Error: missing stock"); }`, mapapagkamalan mong error ang `0` stock!
- Kapag `cart = []`, kahit walang laman ang bayong ng customer, ang `cart` mismo ay totoong bayong pa rin (`[]` is truthy)—kaya kailangan mong bilangin ang laman gamit ang `cart.length === 0`.

---

## I. KNOWLEDGE CHECK (Answer Without Looking Back)

1. List all falsy values in JavaScript (there are 8 in Node.js, 9 including browser-only `document.all`).
2. Why does `if ([])` execute its block, whereas `[] == false` evaluates to `true`?
3. What bug happens if a grading function validates a student's test score with `if (!score) return "Missing score";`?
4. How do you safely check whether a user input string is empty OR only spaces?

