# 1.1.1 Variables: `let`, `const`, `var` and Scope

**MDN Official References:**
- [`let` (MDN)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let) — Focus on *Description*, *Temporal dead zone (TDZ)*, and *Redeclaration*
- [`const` (MDN)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const) — Focus on *Description* and *Objects and arrays*
- [`var` (MDN)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var) — Focus on *Description* and *var hoisting*
- [Grammar and types: Declarations & Variable scope (MDN)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#declarations)

---

## A. WHAT

A **variable** is a named binding that points to a value stored in memory so your program can read, reuse, or update that information later.

JavaScript provides three keywords to declare variables:
1. **`const`** — Declares a **block-scoped**, read-only binding. It **must** be initialized immediately and **cannot be reassigned** with `=`.
2. **`let`** — Declares a **block-scoped** binding that **can be reassigned** later. Initialization is optional (defaults to `undefined`).
3. **`var`** — The legacy (pre-2015) keyword that declares a **function-scoped** or **globally-scoped** binding. It ignores `{ }` blocks like `if` or `for`, allows redeclaration, and is hoisted with `undefined`.

**Scope** is the region of your code where a variable name is visible and accessible:
- **Global Scope:** Top-level code outside any function, block, or module.
- **Module Scope:** Top-level code inside an ES module (`.mjs` or `type: "module"`).
- **Function Scope:** Everything inside a function body `{ ... }`.
- **Block Scope:** Anything inside curly braces `{ ... }` (e.g., `if (...) { }`, `for (...) { }`, or standalone `{ }`).

---

## B. WHY

Before ES6 (2015), JavaScript only had `var`. Because `var` ignores block boundaries and silently allows redeclaring the same name, variables inside loops or `if` statements accidentally leaked out and overwrote outer variables—causing subtle, hard-to-trace bugs.

`let` and `const` were introduced to give engineers:
1. **Tight containment (Block Scope):** Temporary variables stay strictly inside the `{ }` block where they are needed.
2. **Intent signaling (`const` vs `let`):** Readers immediately know whether a binding is fixed (`const`) or expected to change (`let`).
3. **Fail-fast safety (TDZ):** Catching use-before-declaration bugs immediately with a `ReferenceError` instead of silently computing with `undefined`.

---

## C. HOW

| Feature | `const` | `let` | `var` |
|---|---|---|---|
| **Scope** | Block `{ }` | Block `{ }` | Function or Global |
| **Reassignable (`x = ...`)?** | No (`TypeError`) | Yes | Yes |
| **Redeclare in same scope?** | No (`SyntaxError`) | No (`SyntaxError`) | Yes (overwrites silently) |
| **Initializer required?** | Yes (`SyntaxError` if missing) | No (`undefined`) | No (`undefined`) |
| **Hoisting behavior** | Hoisted, uninitialized (TDZ -> `ReferenceError`) | Hoisted, uninitialized (TDZ -> `ReferenceError`) | Hoisted & initialized to `undefined` |
| **Creates property on `globalThis`?** | No | No | Yes (in non-module global script) |

```javascript
// const vs let
const TAX_RATE = 0.12;
let total = 100;
total = 112; // Valid: let allows reassignment

// const binding vs object mutation
const receipt = { store: "Aling Nena", paid: false };
receipt.paid = true; // VALID! Modifying a property inside the object
// receipt = {};     // TypeError! Cannot reassign the const binding itself
```

### Lexical Scoping & Shadowing
Inner scopes can read variables from outer scopes (searching outward up the **scope chain**), while outer scopes **cannot** see variables declared inside inner scopes. If an inner scope declares a variable with the same name as an outer variable, the inner one **shadows** the outer one inside that block.

```javascript
const discount = 0.10; // Outer scope

if (true) {
  const discount = 0.20; // Shadows outer discount ONLY inside this block
  console.log(discount); // 0.20
}

console.log(discount); // 0.10 (outer binding untouched)
```

---

## D. UNDER THE HOOD

*Taglish mental model:* **Isipin mong ang bawat `{ }` block ay isang tinted na kwarto.** Kung nasa loob ka ng kwarto, nakikita mo kung ano ang nasa labas (outer scope). Pero yung nasa labas, hindi nakikita ang nasa loob (inner `let`/`const`). Si `var` naman, parang walang pader ang `if`/`for` blocks—tumatagos siya hanggang sa pinakamalapit na function!

Under the hood in the JavaScript engine (V8):
1. **Creation Phase vs Execution Phase:** Before running a single line of a scope, the engine scans declarations and allocates slots in the **Lexical Environment** (for `let`/`const`) and **Variable Environment** (for `var`).
2. **Hoisting & the Temporal Dead Zone (TDZ):** Both `var` and `let`/`const` are registered during the creation phase. `var` is immediately initialized to `undefined`. `let` and `const` remain **uninitialized** until execution reaches their exact declaration line. Accessing them earlier hits the **TDZ** and throws `ReferenceError: Cannot access '...' before initialization`.
3. **`const` Pointer vs Heap Value:** For objects/arrays, the `const` binding stores a **memory reference** (address) on the stack, not the object's contents on the heap. `const` locks the address, not the properties inside that address.

---

## E. WHEN

- **Use `const` by default** for every variable that is not reassigned (configuration values, functions, imported modules, arrays/objects whose contents you push/update, `for...of` loop items).
- **Use `let`** only when a binding genuinely needs reassignment: running totals (`let subtotal = 0`), loop counters (`for (let i = 0; ...)`), or state flags (`let isReady = false`).
- **Keep variables in the tightest scope possible** (declare inside the `if`, loop, or function rather than globally—recall `MISC-006`!).

---

## F. WHEN NOT

- **Do NOT use `var`** in modern JavaScript unless maintaining legacy ES5 codebases.
- **Do NOT declare accumulator variables globally** when a function can initialize a local variable and `return` it cleanly.
- **Do NOT assume `const` freezes an array or object.** If you truly need shallow immutability, you need `Object.freeze()` (covered later in Level 6).

---

## G. COMMON MISTAKES

1. **Expecting `const` to make arrays/objects immutable:**
   ```javascript
   const cart = ["Kape"];
   cart.push("Tinapay"); // Works! Mutates array, does NOT reassign `cart`
   ```
2. **Accessing `let`/`const` in the TDZ:**
   ```javascript
   console.log(price); // ReferenceError (TDZ!), NOT undefined
   const price = 50;
   ```
3. **`var` leaking out of `for` loops:**
   ```javascript
   for (var i = 0; i < 3; i++) {}
   console.log(i); // 3! `var` leaked out of the loop block
   ```
4. **Shadowing by accident:** Declaring `let total = ...` inside an `if` block when you actually meant to reassign `total = ...` from the outer scope—leaving the outer `total` unchanged!

---

## H. REAL-WORLD APPLICATION

Sa isang **Sari-Sari Store**:
- `const STORE_TIN = "123-456-789"` — Fixed business ID; hindi dapat mapalitan habang nagpapatakbo ng tindahan.
- `const cashDrawer = { hundreds: 5, coins: 40 }` — Ang *lalagyan mismo* ng kaha (`cashDrawer`) ay hindi pinapalitan ng ibang kahon (`const`), pero puwedeng dagdagan o bawasan ang laman nitong barya (`cashDrawer.coins += 10`).
- `let currentCustomerTotal = 0` — Nagbabago habang ini-scan ang mga binibili ng isang customer.
- `var` — Parang bukas na listahan sa gitna ng kalsada kung saan puwedeng magsulat at magbura kahit sino mula sa ibang block.

---

## I. KNOWLEDGE CHECK (Answer Without Looking Back)

1. What is the difference between **reassignment** and **mutation** when using `const` with an object or array?
	 - const reassignment ay ang pag declared again ng isang variable
	 -  const mutation to array or object is my accessing the address of array or object to change the value or data of array and object.
2. Explain what the **Temporal Dead Zone (TDZ)** is and what error type it throws. 
     - It is after the code scan the scope and if some variable is used before it initialization it throws the error refferenceError.
3. Why does `for (var i = 0; i < 3; i++)` behave differently from `for (let i = 0; i < 3; i++)` after the loop ends? var has the legacy issue where it like an open to anyone. it has no restriction to the scope like block scope. While let has block scope restriction it can't be access outside it scope
4. If an outer scope has `let status = "pending"` and inside an `if` block you write `let status = "paid"`, what is the value of `status` outside the `if` block, and why?
   - The status outside was pending. Because of shadowing let is declared inside the if block scope so the changes is in this scope was changed not the outer scope.

