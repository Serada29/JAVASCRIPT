# Challenge 07 — Loops: `for`, `while`, and `for...of`

**Concept Note:** [07-loops.md](../../documentation/concept-notes/1.1-fundamentals/07-loops.md)  
**Your Implementation File:** `exercises/01-variables-and-logic/src/07-loops.js`

---

## Part 1: Code Tracing (Predict Before Running)
Trace every iteration carefully without running Node.js:

```javascript
// Snippet A
const nums = [10, -5, 20, 0, 30];
let sum = 0;
for (const n of nums) {
  if (n < 0) continue;
  if (n === 0) break;
  sum += n;
}
console.log("Sum:", sum);

// Snippet B
let load = 50;
let rides = 0;
while (load >= 15) {
  load -= 15;
  rides++;
}
console.log({ rides, load });

// Snippet C
const word = "JS";
for (const ch of word) {
  console.log(ch);
}
```

---

## Part 2: Bug Diagnostics
Identify the bug in each loop without running code:

```javascript
// Bug 1
const ids = [101, 102, 103];
function hasId(list, target) {
  for (let i = 0; i <= list.length; i++) {
    if (list[i] === target) {
      return true;
    } else {
      return false;
    }
  }
}
console.log(hasId(ids, 103)); // List TWO distinct bugs here!

// Bug 2
const config = { host: "localhost", port: 3000 };
// for (const val of config) { console.log(val); }
// What error does this throw, and how do you fix it with Object.entries()?
```

---

## Part 3: Hands-On Coding Challenge
Create `exercises/01-variables-and-logic/src/07-loops.js` and build **three loop engines**—choosing the right loop for each job:

1. **`sumValidReadings(readings)` using `for...of`:**
   - Takes an array containing mixed numbers and corrupted entries (e.g., `[12, null, -5, 18, "bad", 999, 10]`).
   - Use **`continue`** to skip non-numbers, `NaN`, or negative values.
   - Use **`break`** if a sentinel stop signal `999` is encountered (stop summing immediately—do NOT include `999` or anything after it!).
   - Return the sum of valid readings before `999`.
2. **`simulateBeepCard(startingBalance, farePerRide)` using `while`:**
   - Validate inputs (`startingBalance >= 0`, `farePerRide > 0`); return `null` if invalid.
   - Deduct `farePerRide` while `balance >= farePerRide`, tracking `ridesTaken` and `remainingBalance`.
   - Return `{ ridesTaken, remainingBalance }` (remember IEEE 754 rounding if fares have decimals!).
3. **`findAllPairsSummingTo(numbers, target)` using classic nested `for` loops:**
   - Needs indices (`i` and `j = i + 1`) so each pair of positions is checked **once** without pairing an element with itself.
   - Return an array of pairs `[numbers[i], numbers[j]]` whose sum equals `target`.
4. Test every function thoroughly, including empty arrays `[]`, all-corrupted arrays, exact-zero remaining balance, and `999` at index `0`.

### Run & Verify
```bash
node exercises/01-variables-and-logic/src/07-loops.js
```

