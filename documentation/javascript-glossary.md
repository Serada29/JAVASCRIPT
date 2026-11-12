# JavaScript Glossary

This glossary grows as you master each level. Every technical term is defined in clear English alongside a practical Filipino/Taglish mental model.

---

## Level 0 — Foundations

### Program (Computer Program)
- **Technical Definition:** A sequence of specific, unambiguous instructions written in a programming language that tells a computer what actions to perform step by step.
- **Mental Model (Taglish):** Parang exact recipe o step-by-step instruction list para sa isang sobrang masunurin pero literal na assistant. Walang sariling diskarte ang computer—kung ano lang ang eksaktong sinulat mo, 'yun lang ang gagawin niya, from top to bottom.

### Programming Language
- **Technical Definition:** A formal language with strict grammar rules (syntax) used by humans to write instructions that can be translated into machine-executable operations.
- **Mental Model (Taglish):** Ang bridge language sa pagitan ng tao at computer. Ang computer ay nakakaintindi lang ng binary (`0` at `1`), kaya gumagamit tayo ng programming language gaya ng JavaScript para makapagsulat tayo ng utos na kaya nating basahin.

### JavaScript (JS)
- **Technical Definition:** A high-level, interpreted (or just-in-time compiled), dynamic programming language originally created to make web pages interactive, and now also used on servers, mobile apps, and desktop tools.
- **Mental Model (Taglish):** Kung ang HTML ay ang *kalansay* (structure) ng bahay at ang CSS ay ang *pintura at disenyo* (style), ang JavaScript naman ang *kuryente, gripo, at appliances* (behavior/action)—siya ang nagpapagalaw at nagbibigay ng utak sa application.

### Runtime Environment (JavaScript Runtime)
- **Technical Definition:** The complete environment where your JavaScript code executes. It includes the JavaScript Engine (which parses and runs the code) plus extra host tools (like `console`, browser DOM APIs, or Node.js file system tools).
- **Mental Model (Taglish):** Ang "kusina" kung saan niluluto at pinapatakbo ang code mo. Dalawa ang pinakasikat na kusina ng JavaScript: ang **Web Browser** (Chrome, Edge, Firefox) at ang **Node.js** (diretso sa computer/terminal mo).

### JavaScript Engine
- **Technical Definition:** The core program inside a runtime (such as V8 in Chrome and Node.js) that reads your JavaScript text, checks its grammar, translates it into machine code, and executes it.
- **Mental Model (Taglish):** Ang mismong "makina" sa loob ng runtime na nagbabasa at nagpapatakbo ng bawat linya ng code mo.

### Instruction / Statement
- **Technical Definition:** A single command in a program that tells the JavaScript engine to perform an action. Statements are typically separated by semicolons (`;`) and executed one after another from top to bottom.
- **Mental Model (Taglish):** Isang buong pangungusap na utos. Halimbawa: "I-display mo ang mensaheng ito sa screen."

### Syntax
- **Technical Definition:** The exact rules of spelling, punctuation, symbols, and structure required by a programming language. Violating these rules produces a `SyntaxError`.
- **Mental Model (Taglish):** Grammar at spelling rules ng JavaScript. Kapag nakalimutan mo ang isang closing parenthesis `)` o quotation mark `"`, hindi ka huhulaan ng JavaScript—titigil siya at magrereklamo ng `SyntaxError`.

### Console
- **Technical Definition:** A text-based interface provided by the runtime (Browser DevTools or terminal) where developers can inspect messages, output values using `console.log()`, and view error reports.
- **Mental Model (Taglish):** Ang "inspection window" o diagnostic logbook ng programmer. Dito nakikipag-usap ang code mo sa'yo habang nagde-develop ka para makita mo kung ano ang nangyayari sa loob.

