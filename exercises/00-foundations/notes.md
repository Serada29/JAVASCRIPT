Q1: Identifiers vs. String Literals
Your Answer: "javascript think Jessie a variable or other not a sting as supposed to be because it doesnt have the quoatation."
Verdict: Full Credit.
Engineering Note: Exactly right. When you omit quotes, JavaScript looks inside its memory for a variable or identifier named Jessie. Since it doesn't exist, the engine crashes with a ReferenceError: Jessie is not defined. Wrapping it in quotes tells the engine: "This is raw text (a String), don't search memory for it."

Q2: Sequential Execution Order
Your Answer: "Gitna, Wakas, Simula" & "read from top to bottom."
Verdict: Full Credit.
Engineering Note: Perfect. The JavaScript engine executes synchronously on the Call Stack—it processes instruction 1, finishes it, then instruction 2, finishes it, and so forth. It does not look ahead to reorder your logic based on human meaning.

Q3: Syntax Error Diagnosis
Your Answer:
"first error syntax case sensetive 'C' is capitilze."
"second error 'Tuloy ang laban" starts with single quote and end with double quote"
Verdict: Full Credit.
Engineering Note: Clean diagnosis.
Fix 1: Change Console to lowercase console.
Fix 2: Use matching delimiters (either "Tuloy ang laban" or 'Tuloy ang laban').