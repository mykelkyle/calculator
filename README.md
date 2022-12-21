# calculator

The Odin Project Foundations (Calculator)

This calculator program allows for basic arithmetic without the use of eval().

---

Some challenges I faced

- Allowing decimal points
- "Stringing together" multiple operations (e.g. 12 + 7 - 5 x 3 = 42)
- Juggling a previous and current display and figuring out a way to store operators/operands flexibly

---

What I learned

I initially thought to store the data within an array and pop()/push() whenever new numbers or operators were accessed. This (somewhat) worked up until the point where I needed to "string together" multiple operations - which is when I realized this method was unsustainable. Things may have worked, but it required the gross overuse of extra code.

Then I decided to start over and refactor since things were becoming extremely messy anyways. The solution I came up with next was utilizing global variables for the operands/operator and adding more functions to keep things from becoming too involved.

e.g. separating a single clear function into three -

allClear: clear global variables as well as both displays

backSpace: deletes 1 character from currentDisplay

eraseScreen: a simple reset of the currentDisplay without clearing global variables

or separating a single array of 3 values into three different global values -

{num1, operator, num2}
-->
let firstOperand = "";
let secondOperand = "";
let currentOperation = null;

Much simpler and cleaner to maintain.

Overall, I learned that stricter demarcation of function roles and variables helps greatly in terms of scalability.
