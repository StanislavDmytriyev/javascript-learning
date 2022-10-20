// function needs a return, otherwise it gets undefined
function greeting() {
  return "hello";
}

console.log("");
// if you return a value of a funciton, store it in a variable, or you'll loose it
let message = greeting();
console.log(message);

console.log("");
function sum(num1, num2) {
  return num1 + num2;
}
let result = sum(2, 3);
console.log(result);

console.log("");
// simply outputs any arguments to the console
function printAll() {
  for (let i = 0; i < arguments.length; i++) {
    console.log(arguments[i]);
  }
}
printAll(1, 2, 3, 4, 5);

console.log("");
// getting block scope variables outside the block
function setupCounter(val) {
  return function counter() {
    return val++;
  };
}
let counter1 = setupCounter(0);
console.log(counter1());
let counter2 = setupCounter(10);
console.log(counter2());
console.log(counter2());

// ARROW FUNCTIONS
console.log("");
console.log("Arrow functions");
let greetingArrow = () => {
  return "Hello arrow functions";
};
let messageArrowFunction = greetingArrow();
console.log(messageArrowFunction);

let greetingArrowSimplified = () => "Arrow Function Simplified";
let messageArrowFunctionSimplified = greetingArrowSimplified;
console.log(messageArrowFunctionSimplified);

let greetingArrowOneParameter = function greetingArrowOneParameterFunction(
  name
) {
  return "Greeting Arrow Function with one parameter " + name;
};
let messageArrowOneParameter = greetingArrowOneParameter("John");
console.log(messageArrowOneParameter);

let greetingArrowOneParameterSimplified = (name) =>
  "Greeting Arrow Function with one parameter Simplified " + name;
let messageArrowOneParameterSimplified =
  greetingArrowOneParameterSimplified("Vasek");
console.log(messageArrowOneParameterSimplified);

let sumArrow = (num1, num2) => num1 + num2;
let sumArrowOutput = sumArrow(10, 7);
console.log("Arrow function 2 parameters result: " + sumArrowOutput);
