# 1.1.8 Template Literals

**MDN Official References:**
- [Template literals (MDN)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)
- [Handling text — strings in JavaScript (MDN)](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Strings)

---

## A. WHAT

**Template literals** are string literals enclosed in **backticks (`` ` ``)** instead of single (`'`) or double (`"`) quotes. They provide three superpowers:
1. **String Interpolation (`${expression}`):** Embed variables, math, function calls, or ternary expressions directly inside a string.
2. **True Multi-line Strings:** Newlines typed inside backticks are preserved directly in the resulting string without needing `\n`.
3. **Tagged Templates (Advanced):** Passing a template literal to a tag function (covered in later levels for CSS-in-JS / SQL sanitization).

---

## B. WHY

Before ES6 (2015), building formatted receipts or dynamic messages required awkward `+` concatenation chains:
`"Hello, " + name + "! Your total for " + qty + " items is PHP " + (price * qty).toFixed(2) + "."`
Missing one space (`"Hello," + name`) or misplacing a `+` caused messy bugs. Template literals make dynamic text read almost like the final printed output.

---

## C. HOW

```javascript
const store = "Aling Nena's Store";
const item = "Kape";
const qty = 3;
const price = 15;

// Interpolation with expressions + ternary + method calls
const line = `${qty}x ${item} (${qty > 1 ? "multi" : "single"}) = PHP ${(qty * price).toFixed(2)}`;

// Multi-line receipt (preserves line breaks AND indentation!)
const receipt = `=== ${store} ===
${line}
Thank you!`;

console.log(receipt);
```

### Escaping Special Characters Inside Backticks
- To print a literal backtick: `` \` ``
- To print a literal `${` without interpolation: `` \${name} ``

---

## D. UNDER THE HOOD

1. **Evaluation Order:** When JavaScript executes a template literal, it evaluates each `${...}` expression left-to-right, runs `ToString` coercion on each result, and concatenates the static string parts with the converted expression strings into a standard immutable UTF-16 `string` (`typeof \`hi\` === "string"`).
2. **Symbol Trap:** Because `${...}` uses implicit string conversion (`ToString`), interpolating a `Symbol` directly (`` `${Symbol("x")}` ``) throws a `TypeError`—you must explicitly call `String(sym)`.
3. **Indentation Sensitivity:** Every space and newline between the opening `` ` `` and closing `` ` `` becomes part of the string! Indenting lines inside a function adds leading spaces to the output.

---

## E. WHEN

- Use template literals whenever a string combines **variables or expressions** with text.
- Use template literals when formatting **multi-line output** (receipts, SQL/HTML snippets, structured error messages).
- Use template literals when a sentence contains both `'` and `"` (`` `She said, "It's fine!"` ``) cleanly without backslashes.

---

## F. WHEN NOT

- **Do NOT use `${...}` with statements** (`if`, `for`, `switch`)—only **expressions** (values, calls, ternaries) are allowed inside `${...}`!
- **Do NOT forget indentation effects:** If you write a multi-line template literal indented 6 spaces inside a function, all lines after line 1 will have 6 leading spaces in the terminal!
- For plain static strings with no interpolation or line breaks, `'...'` or `"..."` (or `` `...` `` consistently per project style) is fine.

---

## G. COMMON MISTAKES

1. **Using single/double quotes instead of backticks:**
   ```javascript
   const name = "Ana";
   console.log("Hello, ${name}"); // Prints literal "Hello, ${name}"! Needs backticks `...`
   ```
2. **Putting `if` inside `${...}`:**
   ```javascript
   // SyntaxError! `if` is a statement, not an expression:
   // const msg = `Status: ${if (ok) "Pass"}`;
   // Fix with ternary expression:
   const msg = `Status: ${ok ? "Pass" : "Fail"}`;
   ```
3. **Unexpected indentation spaces in multi-line templates.**

---

## H. REAL-WORLD APPLICATION

Sa **POS Terminal Receipt Generator**:
Imbes na magdugtong ng sampung `+` operators at `\n`, isang malinis na backtick template ang bumubuo sa buong resibo: pangalan ng tindahan, oras, item line (`${qty}x ${name}`), discount status (`${discount > 0 ? "Applied" : "None"}`), at final change na naka-`.toFixed(2)`.

---

## I. KNOWLEDGE CHECK (Answer Without Looking Back)

1. What happens if you write `"Total: ${total}"` with double quotes instead of backticks?
2. Why does `` `${if (stock > 0) "In Stock"}` `` throw a `SyntaxError`, and how do you fix it?
3. What type does `typeof \`hello\`` return—is a template literal a separate data type from `string`?
4. What happens to spaces/tabs at the beginning of lines inside a multi-line template literal?

