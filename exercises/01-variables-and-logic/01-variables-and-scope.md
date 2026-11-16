# Challenge 01 — Variables: `let`, `const`, `var` and Scope

**Concept Note:** [01-variables-and-scope.md](../../documentation/concept-notes/1.1-fundamentals/01-variables-and-scope.md)  
**Your Implementation File:** `exercises/01-variables-and-logic/src/01-variables-and-scope.js`

---

## Part 1: Code Tracing (Predict Before Running)
Write down your predicted output (or exact error name) for each snippet **without** running Node.js:

```javascript
// Snippet A
const storeName = "Kuya Ben's";
let cash = 500;
{
  const cash = 200;
  var registerId = "POS-01";
  console.log("Inside:", cash); // 200
}
console.log("Outside cash:", cash); // 500
console.log("Outside registerId:", registerId); // POS-01 

// Snippet B
const receipt = { total: 100, items: ["Kape"] };
receipt.items.push("Pandesal"); // items = ["Kape", "Pandesal"]
receipt.total = 120; // total = 120;
console.log(receipt); // {total = 120, items = ["Kape", "Pandesal"]}

// Snippet C
console.log(a); // undefined
var a = 10;
console.log(b); // ReferenceError variable use before the initialization
let b = 20;
```

**Questions:**
1. In Snippet A, what prints for `"Inside:"`, `"Outside cash:"`, and `"Outside registerId:"`? Why did `registerId` escape the `{ }` block? 
	 - Inside 200
	 - Outside 500
	 - Outside registerId: POS-01 
	 - registerId escape from {} block scoper because it use the var to declare the registerId. var can access to inner or outer scrope 
2. Does Snippet B throw a `TypeError`? Explain the difference between `const` reassignment and object mutation. 
     - No it was not throw error. 
     - const reassignment is assigning new value to decalared and initialized variable, while object mutation only uses the address to the memory to modified the value
3. In Snippet C, what prints for `a`, and what exact error occurs on `console.log(b)`?
     - Undefined for a 
    - ReferenceError variable use before the initialization

---

## Part 2: Bug Diagnostics (Spot the Scope Flaw)
Inspect this code and explain the **two** scope bugs without running it:

```javascript
let shiftTotal = 0;

function addSale(amount) {
  let shiftTotal = 0; 
  shiftTotal += amount;
  return shiftTotal;
}

for (var i = 0; i < 3; i++) {
  // simulate 3 sales of 50
  addSale(50);
} // because it uses var 

console.log("Shift Total:", shiftTotal); // Expected 150, prints 0!
console.log("Loop index:", i);           // Should not be accessible here!

// Bug 1 shiftTotal because shiftTotal was declared again inside the addSale function scope it now shadowing the outside shiftTotal variable and the data get from the shiftTotal += amount is stay in the function

// Bug 2 i because var can escape the block scope the variable i can be access outside of the for block.

```

---

## Part 3: Hands-On Coding Challenge
Create `exercises/01-variables-and-logic/src/01-variables-and-scope.js` and build a **Shift Cash Drawer Tracker** meeting these rules:

1. Use `const` for all non-reassigned bindings (store config, drawer object, functions) and `let` **only** where reassignment is genuinely required. Use **zero `var`** declarations.
2. Create a `createCashDrawer(storeName, openingBalance)` function that initializes a **local** drawer object inside function scope (no global mutable state!) and returns an object with `{ storeName, balance, transactions: [] }`.
3. Create `recordSale(drawer, itemName, amount)` that:
   - Updates `drawer.balance` and pushes a record into `drawer.transactions` (proving `const drawer` allows internal mutation).
   - Uses a block-scoped `const` fee or bonus label inside an `if` block (e.g., if `amount >= 100`, declare a block-scoped `const note = "High-value sale"`). Verify outside the `if` block that you do not leak block variables.
4. Create two **independent** drawers (`morningDrawer` and `eveningDrawer`), record different sales in each, and prove they do **not** share or corrupt each other's state.
5. In comments at the bottom of your file, include a brief comment showing a small commented-out `//` example of what would trigger a `TypeError` (reassigning a `const`) vs a `ReferenceError` (TDZ or out-of-scope `let`).

### Run & Verify
```bash
node exercises/01-variables-and-logic/src/01-variables-and-scope.js
```
Then invoke `/exercise-checker` when ready!

