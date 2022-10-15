/*
    1)  YOU CAN NOT START A VARIABLE WITH A NUMBER
    2)  VARIABLE HAS TO START WITH _ $ a-z A-Z
    3)  CHECKING TYPE VARIABLE TYPE console.log(typeof VARIABLE NAME); 
    4)  ++price and price++ HAVE A DIFFERENCE: price++ WILL BE EXECUTED ON THE NEXT LINE, WHILE ++price WORKS AS EXPECTED
    5)  --price and price-- SAME STORY
    6)  \      <--- THIS IS AN ESCAPE CHARACTER, TO IGNORE " or ' IN THE STRING
    7)  IF WE WRITE A STRING IN THE BACKTICKS ` ` , THE FORMATTING WILL BE AS IS (SPACES, NEW LINES, ETC...)
    8)  THE `` BACKTICK STRING WILL BE DISPLAYED FORMATTED INTO HTML, BUT IN THE CONSOLE LOG IT WILL BE AS DECLARED
    9) message = message.toLowerCase() or message = message.toUpperCase()
    10) message = message.substring(1) <--- [1] is STRING'S INDEX
    11) message = message.length <--- FIND OUT HOW MANY SYMBOLS IN THE STRING, BUT RESULT WILL BE A NUMBER AND NO LONGER A STRING
    12) IF ADDING (CONCATENATING) NUMBER TO A STRING, IT WILL TURN INTO STRING AS WELL
    13) amount = amount.toString() <--- CONVERTS A NUMBER INTO A STRING
    14) amount = Number.parseFloat(amount) <--- CONVERST A STRING INTO A NUMBER
    15) parseFloat() <--- works it way until it meets first non-number symbol, it then stops parsing (if a 1st symbol is a letter => NaN will be parsed)
    16) let OBJECT = {name: "xxx", surname: "xxx", age: 33,}; <--- THIS IS HOW AN OBJECT IS DECLARED, SEE SYNTAX
    17) TRUTHY conditions: EVERYTHING THAT IS NOT FALSY. a) boolean TRUE, b) any number except 0, c) any string except empty one
    18) FALSY conditions: a) boolean FALSE b) number 0, c) "" '' `` empty strings, d) null, e) undefined, f) NaN
    19) JS is using floating numbers, so 1.1 + 1.3 will not be equal to 2.4 ... 
    20) To fix this, have to +(1.1 + 1.3).toFixed(2) take the numbers in brackets and .toFixed(2), where 2 is a number of decimal places
    21) This (1.1 + 1.3).toFixed(2) will be returned as string. To convert it to number, we are adding a + next to opening bracket.
    22) TERNARY OPERATOR - is a shortcut for if/else statements
    23) If the value is declared inside the function or if/else {} brackets, it can be accessed only inside that function
    24) If in-function value is declared via VAR, it can be accessed outside that function
 */

function showMessage(message) {
  document.getElementById("message").textContent = message;
}

if (+(1.1 + 1.3).toFixed(2) !== 2.4) {
  console.log("eto o4en slogno");
}

//TERNARY STATEMENT
let ternaryPrice = 20;
let ternaryPrice2 = 30;
let ternaryTest = ternaryPrice > 10 ? "expensive" : "cheap";
let ternaryTest2 =
  ternaryPrice2 > 10 ? console.log("expensive") : console.log("cheap");

console.log(ternaryTest);

//if statement
if (true) {
  showMessage("truth");
}

// object
let person = {
  firstName: "Stani",
  lastName: "Dmitrssen",
  age: 35,
};
console.log(person);
console.log(person.lastName);
console.log(typeof person);

//задаем сразу несколько переменных
let variable01 = 12345,
  variable02 = "some text",
  variable03 = false;

let price = 20.99;
showMessage(typeof price);

// превратили string -> number
let amount = "123.15";
amount = Number.parseFloat(amount);
console.log(amount);
console.log(typeof amount);

let saved = true;
// Exclamation mark -> does whatever follows reverse
saved = !saved;
console.log(saved);
