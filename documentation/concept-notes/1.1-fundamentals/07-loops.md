# 1.1.7 Loops: `for`, `while`, and `for...of`

**MDN Official References:**
- [Loops and iteration (MDN Guide)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration)
- [`for` (MDN)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for)
- [`while` (MDN)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while)
- [`for...of` (MDN)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of)

---

## A. WHAT

A **loop** repeats a block of code multiple times until a stopping condition is reached:
1. **`for` loop:** Best when you know the number of iterations or need an index counter (`for (let i = 0; i < arr.length; i++)`).
2. **`while` loop (and `do...while`):** Repeats **as long as** a condition remains truthy—ideal when you don't know upfront how many steps it will take. (`do...while` always runs the body at least once before checking).
3. **`for...of` loop:** Cleanly iterates directly over the **values** of any **iterable** (`Array`, `String`, `Map`, `Set`) without manual index variables (`for (const item of items)`).

**Loop Control Keywords:**
- **`break`** — Exits the **loop** immediately and continues at the next line *after* the loop (without exiting the enclosing function, unlike `return`!).
- **`continue`** — Skips the rest of the **current iteration** and jumps straight to the next iteration (updating the loop counter in `for`).

---

## B. WHY

Without loops, processing 500 cart items or retrying an operation until a condition settles would require copy-pasting code 500 times. Having `for`, `while`, and `for...of` lets you pick the exact abstraction: index control (`for`), condition-driven repetition (`while`), or clean value traversal (`for...of`).

---

## C. HOW

### 1. Classic `for` Loop (Zero-Based Index)
```javascript
const items = ["Kape", "Asukal", "Gatas"];
for (let i = 0; i < items.length; i++) {
  console.log(`${i + 1}. ${items[i]}`);
}
```
Notice: Start at `0`, stop at `i < items.length` (never `<=`, which overshoots to `undefined`! Recall `MISC-003`).

### 2. `while` Loop
```javascript
let attempts = 0;
let balance = 100;

while (balance >= 30) {
  balance -= 30;
  attempts++;
}
console.log(`Rides taken: ${attempts}, remaining: ${balance}`);
```

### 3. `for...of` Loop (Clean Value Iteration)
```javascript
const prices = [15, 25, 40];
let total = 0;

for (const price of prices) {
  total += price;
}
```
Notice you can use `const` for `price` because each iteration creates a **fresh block binding**!

### 4. `break` vs `continue` vs `return`
- `continue`: Skip this single item, keep looping.
- `break`: Stop looping, continue running code *below* the loop.
- `return`: Exit the **entire function** immediately (only use inside a loop when a search succeeds or a validation fails—never on the first non-match or inside a multi-item collector! Recall `MISC-004`, `MISC-006`, `MISC-008`).

---

## D. UNDER THE HOOD

1. **How `for` executes:** `(1) initialization` runs **once** -> `(2) condition` checked -> if truthy, `(3) loop body` runs -> `(4) afterthought (i++)` runs -> jump back to `(2)`.
2. **Per-iteration binding with `let`/`const`:** In `for (let i = 0; ...)` and `for (const item of arr)`, JavaScript creates a fresh lexical binding for each pass, preventing classic closure/scope-leak bugs that happened with `var`.
3. **Iteration Protocol (`for...of`):** Under the hood, `for...of` calls the object's `[Symbol.iterator]()` method and pulls values one by one. Plain objects (`{ a: 1, b: 2 }`) are **not** iterable by default (`for...of` throws `TypeError: obj is not iterable`—use `Object.keys(obj)`, `Object.values(obj)`, or `Object.entries(obj)` instead!).

---

## E. WHEN

- **Use `for...of`** as your default for arrays and strings when you only need each element's value (and want `break`/`continue`/`return` support, unlike `.forEach()`).
- **Use classic `for`** when you need the numeric **index `i`**, need to walk backwards (`i--`), step by 2 (`i += 2`), or repeat `N` times without an array.
- **Use `while`** when the stop condition depends on dynamic state changing inside the loop (e.g., dividing until `< 1`, draining a balance, simulation ticks).

---

## F. WHEN NOT

- **Do NOT use `for...of` directly on a plain `{}` object** (use `Object.entries(obj)` with `for...of`).
- **Do NOT use `for...in` on arrays** (`for...in` iterates over string property keys and inherited enumerable properties, not array elements in guaranteed numeric order—use `for...of` or `for`).
- **Do NOT mutate an array's length (e.g. `splice` or `push`) while iterating forward over it** unless you carefully adjust the index, or you'll skip elements or create an infinite loop!

---

## G. COMMON MISTAKES

1. **Off-by-one boundary (`i <= arr.length`):** Accesses `arr[arr.length]`, which is `undefined` (`MISC-003`).
2. **Infinite `while` loop:** Forgetting to update the condition variable inside the `while` body!
3. **Confusing `return` with `continue` (`MISC-004`):** Putting `else { return null; }` inside a search loop exits on item 0 instead of checking the remaining items.
4. **Using `break`/`continue` inside `.forEach()`:** `.forEach()` takes a callback function, so `break`/`continue` is a `SyntaxError`, and `return` only exits that single callback pass—not the outer function! Use `for...of` when you need early exit.

---

## H. REAL-WORLD APPLICATION

Sa **Jeepney / Load Wallet / POS**:
- `for...of`: Pag-scan ng lahat ng item sa basket (`for (const item of cart)`). Mas malinis kaysa `cart[i]` kung hindi naman kailangan ang index number.
- `for`: Pag-print ng numbered queue tickets (`Ticket #1` hanggang `Ticket #10`) o pag-check ng index pairs.
- `while`: Pag-deduct ng pamasahe sa beep card hanggang hindi na kasya sa minimum fare (`while (balance >= minFare)`).

---

## I. KNOWLEDGE CHECK (Answer Without Looking Back)

1. Why does `for (let i = 0; i <= arr.length; i++)` cause a bug, and what value does `arr[arr.length]` return?
2. What is the difference between `continue`, `break`, and `return` inside a loop?
3. Why can you write `for (const x of array)` without getting a `TypeError: Assignment to constant variable`?
4. What happens if you try to run `for (const val of { a: 1, b: 2 })` directly? How do you iterate over an object's entries properly?

