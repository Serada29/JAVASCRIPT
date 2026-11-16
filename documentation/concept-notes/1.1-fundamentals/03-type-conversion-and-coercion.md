# 1.1.3 Type Conversion and Coercion

**MDN Official References:**
- [Type coercion (MDN Glossary)](https://developer.mozilla.org/en-US/docs/Glossary/Type_coercion)
- [Type conversion (MDN Glossary)](https://developer.mozilla.org/en-US/docs/Glossary/Type_conversion)
- [Equality comparisons and sameness (MDN)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Equality_comparisons_and_sameness)

---

## A. WHAT

- **Type Conversion** is the general process of changing a value from one data type to another (e.g., converting `"42"` into `42`).
  - **Explicit Conversion (Type Casting):** *You* deliberately command JavaScript to convert a value using `Number(x)`, `String(x)`, `Boolean(x)`, `BigInt(x)`, `parseInt(x, 10)`, or `parseFloat(x)`.
  - **Implicit Conversion (Type Coercion):** *JavaScript* automatically converts a value behind the scenes when an operator or context receives mismatched types (e.g., `"5" * 2` becoming `10`).

---

## B. WHY

JavaScript was originally designed for browser forms where user inputs (like `<input value="25">`) arrive as **strings** even when they represent numbers. Automatic coercion allowed beginners to do quick math on strings without crashing, while explicit conversion gives professional engineers **predictable, bug-free control** over data boundaries.

---

## C. HOW

### 1. Explicit Conversion Functions
```javascript
// To String
String(123);       // "123"
String(null);      // "null"
String(undefined); // "undefined"
String(Symbol("x")); // "Symbol(x)" (only explicit works!)

// To Number
Number("42");      // 42
Number("  42  ");  // 42 (trims whitespace)
Number("");        // 0  (careful! empty string becomes 0)
Number("42px");    // NaN
Number(true);      // 1
Number(false);     // 0
Number(null);      // 0  (careful!)
Number(undefined); // NaN (recall MISC-002!)

// Parsing numbers with trailing units
parseInt("42px", 10); // 42 (stops at non-digit; ALWAYS pass radix 10)
parseFloat("12.5kg"); // 12.5

// To Boolean
Boolean(1);        // true
Boolean(0);        // false
Boolean("false");  // true (non-empty string!)
Boolean("");       // false
```

### 2. Implicit Coercion Triggers
| Trigger | Rule | Example | Result |
|---|---|---|---|
| Binary `+` with any string | Coerces other side to **String** | `"PHP " + 50` | `"PHP 50"` |
| Binary `+` without strings | Coerces both sides to **Number** | `true + 4` | `5` |
| Arithmetic `-`, `*`, `/`, `%`, `**` | Coerces both sides to **Number** | `"20" - 5` | `15` |
| Unary `+` | Coerces operand to **Number** | `+"99"` | `99` |
| Logical context (`if`, `!`, `&&`, `\|\|`) | Coerces to **Boolean** | `if ("0")` | truthy (`true`) |
| Loose equality `==` | Complex coercion (often to Number) | `"5" == 5` | `true` |

---

## D. UNDER THE HOOD

Inside the ECMAScript specification, JS runs three abstract internal algorithms:
1. **`ToString`:** Turns primitives into strings. Note: `Symbol` **throws a `TypeError`** during implicit string coercion (e.g., `` `${Symbol()}` `` or `"" + Symbol()` crashes) to prevent accidental stringification of unique tokens.
2. **`ToNumber`:** Turns values into numbers. Key surprise: `null` becomes `0`, `""` becomes `0`, while `undefined` becomes `NaN`. Passing a `Symbol` to `Number(sym)` or `+sym` **throws a `TypeError`**.
3. **`ToBoolean`:** Pure lookup table—no math required (checked against the 9 falsy values).

And look at the order of evaluation with `+`:
```javascript
1 + 2 + "3"  // (1 + 2) -> 3, then 3 + "3" -> "33" (left-to-right!)
"1" + 2 + 3  // ("1" + 2) -> "12", then "12" + 3 -> "123"
```

---

## E. WHEN

- **Always prefer explicit conversion** at system boundaries (user input, CSV/JSON strings, CLI arguments): `const qty = Number(rawInput);` followed by `!Number.isNaN(qty)`.
- **Use `String(val)`** when safely logging unknown values (works cleanly even on `null`, `undefined`, and `Symbol`, unlike `val.toString()` which crashes on `null` and `undefined`!).

---

## F. WHEN NOT

- **Do NOT rely on `==` loose equality** (except the occasional intentional `x == null` check, though `x === null || x === undefined` is clearer for beginners).
- **Do NOT use `.toString()` on values that might be `null` or `undefined`** (`null.toString()` throws `TypeError`).
- **Do NOT forget `Number("") === 0` and `Number(null) === 0`** when validating empty inputs—check `rawInput.trim() === ""` before calling `Number()`.

---

## G. COMMON MISTAKES

1. **String concatenation instead of addition (`"10" + 5 === "105"`):** Forgetting that `+` favors strings if *either* side is a string, whereas `-` and `*` always convert to numbers (`"10" - 5 === 5`).
2. **`undefined + 10 === NaN` vs `null + 10 === 10`:** Mixing up how `null` (`0`) and `undefined` (`NaN`) coerce in math (`MISC-002`).
3. **Treating `Number("")` as `NaN`:** `Number("")` silently returns `0`! An empty form box becomes `0` pesos instead of "missing input" if you don't check for an empty string first.
4. **`parseInt("08")` vs `parseInt("10px", 10)`:** Always include radix `10` and remember `parseInt("abc")` returns `NaN`, while `parseInt("12abc", 10)` returns `12` (which can hide invalid input like `"12abc"`!).

---

## H. REAL-WORLD APPLICATION

Sa **Online Order Form ng Sari-Sari Store**:
Kapag nag-type ang customer ng `"5"` sa quantity input box, nakukuha ito ng program bilang text (`"5"`).
- Kung hindi ka mag-explicit `Number("5")` at direkta mong ginawa ang `qty + 2` (halimbawa may +2 promo), ang kalalabasan ay `"52"` imbes na `7`!
- At kung iniwang blangko (`""`) ng customer ang field, `Number("")` ay magiging `0`—kaya dapat i-check muna kung walang laman bago i-convert.

---

## I. KNOWLEDGE CHECK (Answer Without Looking Back)

1. Evaluate step-by-step without running code: `10 + 5 + "2"` vs `"10" + 5 + 2` vs `"10" - 5`.
2. What do `Number("")`, `Number(null)`, and `Number(undefined)` each return?
3. Why does `String(null)` succeed while `null.toString()` throws a `TypeError`?
4. What happens if you run `Number(Symbol("id"))` or `` `${Symbol("id")}` ``?

