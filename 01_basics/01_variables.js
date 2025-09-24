const accountId = 14453
let accountEmail = "arya1234@gmail.com"
var accountPassword ="12345"
accountCity = "Jaipur"
// accountId =2 // not allowed 
accountEmail ="abcd@abcd.com"
accountPassword="1223442"
accountCity="Berhampore"// Variable can also declaered by not using let or va..... But it's not a good method
let accountState;
console.log(accountId)
/* Prefer not to use var because of issue in the block scope and
functional scope*/
/*{}-->This is known as Scope,often used in if statement or in for loop etc.
In modern JavaScript, it’s generally recommended to avoid using var and use let or const instead.
This is because var has problematic behaviors that can lead to bugs and confusion.
1. Function Scope (Not Block Scope)

var is function-scoped, not block-scoped.

This means variables declared with var are accessible outside of the block (if, for, etc.) where they are defined.

if (true) {
  var x = 10;
}
console.log(x); // ✅ 10 (unexpectedly accessible)


✅ With let or const:

if (true) {
  let y = 10;
}
console.log(y); // ❌ ReferenceError (better, safer)

2. Hoisting Issues

var declarations are hoisted to the top of their scope and initialized with undefined.

You can use a var variable before it is declared, which can cause unexpected bugs.

console.log(a); // ✅ undefined (not an error!)
var a = 5;


✅ With let or const:

console.log(b); // ❌ ReferenceError (correct behavior)
let b = 5;

3. Can Be Redeclared

var allows redeclaration of the same variable within the same scope, which may accidentally overwrite values.

var name = "Arya";
var name = "Das"; // ✅ No error (but dangerous)
console.log(name); // "Das"


✅ With let or const:

let name = "Arya";
let name = "Das"; // ❌ SyntaxError
4. No Block Scope in Loops

When using var in loops, the variable is shared across all iterations.

for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100);
}
// ❌ Prints: 3, 3, 3


✅ With let:

for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100);
}
// ✅ Prints: 0, 1, 2*/
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])