# Lesson 02 — Strings and Text Output

**Level:** Level 0 — Zero Programming Knowledge  
**Prerequisites:** Lesson 00 & Lesson 01

---

## A. WHAT

### What is a String?
In programming, human text—whether it is a single letter, a full word, a sentence, or a phone number—is called a **String**. Think of it as a literal "string of characters" strung together like beads on a necklace.

In JavaScript, raw words written in your file are interpreted as commands or variable names unless you enclose them in quotation marks. Quotation marks tell the JavaScript engine:  
*"Treat everything between these marks as literal text data."*

---

## B. WHY

### Why do we have multiple types of quotes?
JavaScript gives developers three ways to wrap strings:
1. **Double Quotes (`" "`):** Traditional and universally recognized across programming languages.
2. **Single Quotes (`' '`):** Shorter to type, very popular in the JavaScript community.
3. **Backticks (`` ` ` ``):** Introduced in modern JavaScript (ES6) as **Template Literals**, enabling multi-line text and embedded expressions.

Having multiple quote styles solves the **Quote Collision Problem**. If your sentence contains an apostrophe (like `"It's a sunny day"`), using double quotes on the outside prevents JavaScript from getting confused by the apostrophe inside!

---

## C. HOW

### 1. The Three Quote Types
```javascript
console.log("Double quotes: Mabuhay!");
console.log('Single quotes: Magandang hapon!');
console.log(`Backticks: Masayang mag-code!`);
```

### 2. Solving Quote Collision

#### Approach 1: Alternate Outer and Inner Quotes
If your sentence has an apostrophe (`'`), wrap the sentence in double quotes (`"`):
```javascript
// SAFE: Outer double quotes, inner single quote (apostrophe)
console.log("It's time to open the store.");

// SAFE: Outer single quotes, inner double quotes (dialogue)
console.log('The customer said, "Pabili po ng bigas."');
```

#### Approach 2: The Escape Character (`\`)
What if your sentence contains **both** single quotes and double quotes?  
Example: `The customer said, "It's 50 pesos."`

This is where the **backslash (`\`)** comes in. In JavaScript strings, `\` is the **escape character**. It tells the engine:  
*"Do not treat the next character as code syntax. Treat it as a literal character!"*

```javascript
// Escape the apostrophe using \'
console.log('It\'s time to open the store.');

// Escape double quotes using \"
console.log("The customer said, \"Magkano po?\"");

// Sentence containing both:
console.log('The customer said, "It\'s 50 pesos."');
```

### 3. Essential Escape Sequences
When `\` is combined with certain letters, it triggers special formatting:
- `\n` — **New Line:** Moves subsequent text to the next line without calling `console.log()` again.
- `\t` — **Tab:** Inserts horizontal spacing (useful for aligning receipt columns).
- `\\` — **Literal Backslash:** Prints an actual single backslash.

```javascript
// \n creates multiple lines in one statement:
console.log("Line 1\nLine 2\nLine 3");

// \t aligns columns:
console.log("Item\tPrice");
console.log("Kape\tPHP 15");
console.log("Tinapay\tPHP 10");

// \\ prints a real backslash:
console.log("File path: C:\\Projects\\JavaScript");
```

### 4. String Concatenation (`+`)
You can glue multiple strings together using the plus operator (`+`):
```javascript
console.log("Hello, " + "Jessie" + "!"); // Output: Hello, Jessie!
```

---

## D. UNDER THE HOOD

What does the V8 engine do when evaluating a string?
1. **UTF-16 Memory Storage:** JavaScript strings are stored in memory as an immutable sequence of 16-bit code units following the Unicode (UTF-16) standard. This means JavaScript natively supports emojis, Filipino accented characters (ñ), and symbols (`₱`).
2. **Compile-time Escape Resolution:** When the engine parses `"Line 1\nLine 2"`, it converts the two characters `\` and `n` into a single binary newline character (ASCII code 10).
3. **String Immutability:** Once a string is created in memory, its contents can never be changed. Any concatenation (`+`) creates an entirely brand-new string in memory.

---

## E. WHEN to Use Each Style
- Use **double quotes (`"`)** or **single quotes (`'`)** for simple, one-line strings. Pick one style and stay consistent throughout your project.
- Use **the escape character (`\`)** whenever you have no choice but to include the same quote symbol inside the text, or when formatting multi-line output with `\n` and `\t`.
- Use **backticks (`` ` ``)** when text naturally spans multiple lines.

---

## F. WHEN NOT to Use Escape Characters
Don't use `\` when you can simply alternate quote types for cleaner readability:
```javascript
// HARDER TO READ:
console.log('It\'s nice to meet you.');

// MUCH CLEANER:
console.log("It's nice to meet you.");
```

---

## G. COMMON MISTAKES

### Mistake 1: Quote Collision Crash
```javascript
// CRASH: SyntaxError: Unexpected identifier 's'
console.log('It's raining outside');
```
- **Why it breaks:** JavaScript pairs the opening quote with the first matching quote it sees (the apostrophe in `It's`). It thinks the string ended at `'It'`. The following letters `s raining outside'` make no sense to the parser.

### Mistake 2: Using Forward Slash `/` to Escape Instead of Backslash `\`
```javascript
// WRONG:
console.log("She said, /"Hello/""); // SyntaxError!

// CORRECT:
console.log("She said, \"Hello\"");
```

### Mistake 3: Forgetting Space During Concatenation
```javascript
console.log("Hello" + "World"); // Output: HelloWorld (dikit!)
console.log("Hello " + "World"); // Output: Hello World (tamang spacing)
```

---

## H. REAL-WORLD APPLICATION

Imagine printing a formatted receipt for an eatery or sari-sari store with item alignment:

```javascript
// ==========================================
// Aling Nena's Karinderya - Official Receipt
// ==========================================

console.log("===============================");
console.log("ALING NENA'S KARINDERYA");
console.log("Customer: Mr. O'Connor"); // Handled apostrophe cleanly with double quotes
console.log("===============================");
console.log("ITEM\t\tQTY\tPRICE");
console.log("Adobong Manok\t1\tPHP 65.00");
console.log("Kanin\t\t2\tPHP 24.00");
console.log("===============================");
console.log("Note: \"Salamat po sa pagtangkilik!\""); // Escaped double quotes
console.log("System Status: Online\nCashier: 01"); // Used \n for compact printing
```

---

## I. KNOWLEDGE CHECK

1. Why does `console.log('It's hot today');` crash with a `SyntaxError`? How would you fix it using two different methods?
2. What do the escape sequences `\n` and `\t` do?
3. How would you print this exact sentence to the terminal without causing an error?  
   `He yelled, "Don't touch that!"`

