# Exercise 00-01 — First Instructions & Console Output

**Level:** Level 0 — Zero Programming Knowledge  
**Topic:** Program Execution, Statements, and `console.log()`  
**Prerequisites:** Lesson 00 & Assigned MDN Reading

---

## Objective
Verify that you can:
1. Read and predict the exact output of a sequential JavaScript program before running it.
2. Spot syntax errors by inspecting instructions carefully.
3. Write and execute your very first JavaScript file (`exercise-01.js`) using Node.js in this workspace.

---

## Part 1: Code Tracing (Predict Before Running)
Do **not** run the code below yet. Read it line by line like the JavaScript engine and answer in the chat:

```javascript
console.log("1. Sumakay ng jeep pa-Cubao.");
console.log("2. Nagbayad ng 13 pesos.");
console.log("3. Bumaba sa kanto.");
```

**Question 1A:** In what exact order will these lines appear in the console, and **why**?  
 - 1, 2, 3 from top to bottom.
**Question 1B:** What would happen if you swapped Line 1 and Line 3? Would JavaScript realize that "Bumaba sa kanto" doesn't make logical sense before riding the jeep, or would it still run it? Why?
 - It runs the 3, and proceed to run 2, 1.

---

## Part 2: Syntax Diagnostics (Find the Bugs)
A beginner developer wrote the following four lines of JavaScript, and every single one of them is broken. **Without running them first**, explain what is wrong with each line:

```javascript
// Line A
Console.log("Magandang umaga!"); 
- because of javaScript case sensetive it will be an error the capitlize "C"

// Line B
console.log(Kumusta ka?);
- Kamusta ka? is runs like a command because there is no "" to make it string

// Line C
console.log("Handa na akong mag-code!');
- Incosistent " or double quote at the first and ' at the end 

// Line D
console.log("Tuloy ang laban"
- broken sysntax it doesn't have the closing parenthises
```

---

## Part 3: Your First Hands-On Code
Create a new file yourself at:
`exercises/00-foundations/exercise-01.js`

### Requirements
Write a JavaScript program that prints **4 separate lines** to the console in this exact order:
1. Line 1: A greeting in English or Filipino (e.g., `Magandang araw!`).
2. Line 2: Your name or nickname (e.g., `Ako si [Name].`).
3. Line 3: Why you want to master JavaScript in one sentence.
4. Line 4: The exact text: `Execution complete.`

### How to Execute Your Code
Open your terminal in the workspace and run:
```bash
node exercises/00-foundations/exercise-01.js
```

### Submission Checklist
In your reply to me, provide:
1. Your answers to **Knowledge Check** (from Lesson 00).
2. Your answers to **Part 1 (Code Tracing)** and **Part 2 (Syntax Diagnostics)**.
3. Confirmation that you created and ran `exercises/00-foundations/exercise-01.js`, what output appeared in your terminal, and a brief explanation in your own words of what `console.log()` is doing.

