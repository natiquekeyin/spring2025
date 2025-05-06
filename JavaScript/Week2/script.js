// Functions in JavaScript!

// console.log("hello"); //log is a predefined functions...Math.random()...predefined

// Function Declarations

// foo() is a function that neither accepts a parameter NOR it returns anything
// function foo() {}

// // square() is afunction that accepts one parameter and returns one value
// function square(a) {
//   return a * a;
// }

// // add() accepts two parameters and returns their sum
// function add(a, b) {
//   return a + b;
// }
// // if a function explicity does not return any thing... I ALWAYS return "undefined"

// console.log(foo()); //calling foo function
// console.log(square(5)); //calling square function
// console.log(add(5, 4)); //calling add function

// function add(a, b) {
//   console.log(a + b);
//   //   return a - b;
// }

// console.log(add(5, 4));

// let x = y+10;

// 2. Function Expressions

// let foo = function () {}; // Anonymous function! function () ... ??? no name here...
// let square = function (a) {
//   return a * a;
// };

// let add = function (a, b) {
//   return a + b;
// };

// console.log(square(4));
// console.log(typeof square);

// 3. Arrow Functions (ES5 ES6)

// let foo = () => {}; // Arrow function..of same foo expression function
// let square = (a) => a * a;

// // let square = a => a * a; //if you something like this.. YOU ARE GOOD...
// // In C#, square functions are called "Lambda Functions" N.B:
// // let add1 = (a, b) => {
// //   let c = a + b;
// //   return c;
// // };

// let add = (a, b) => a + b;

// Parameters and Arguments!

// function myLog(a) {
//   console.log(a);
// }

// myLog("Correct");
// myLog("Something", "Also", "Correct");
// myLog();

// arguments .. default object in every function.. that can be used to track the passed arguments...

// function myLog(a) {
//   console.log(arguments.length, a, arguments[1]);
// }

// // myLog("Correct");
// myLog("Also", "Correct");

// function sum() {
//   let count = arguments.length;
//   let total = 0;
//   for (let i = 0; i < count; i++) {
//     total += arguments[i];
//   }
//   return total;
// }

// console.log(sum(1));
// console.log(sum(1, 2));
// console.log(sum(1, 2, 3, 4, 5));

// Parameters and ...
// ... "rest" parameter, it allows us to specify all final argument to a function..by naming ourselves..

function sum(a, b, c, ...numbers) {
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }
  return total;
}
console.log(sum(1, 2, 3, 4, 5));
