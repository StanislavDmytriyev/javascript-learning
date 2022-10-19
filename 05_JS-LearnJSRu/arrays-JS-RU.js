console.log("https://learn.javascript.ru/array - ARRAY BASICS");
console.log("");

// 2 ways to create a new array
let simple = new Array("apple", "plum", "orange");
let work = [
  function () {
    let x = 1 + 5;
    return x;
  },
  222,
  333,
];

// call an array content
console.log("calling the whole array: " + work);
console.log("calling a separate array element: " + work[1]);

// change one of the array's elements
work[2] = "Vasek";
console.log("");
console.log(work);

// add new element to an array
work[3] = { name: "Stani", age: 35 };
console.log("");
console.log(work);

// calling an object content inside the array
console.log("");
console.log("calling an object only inside the array: work[3]: " + work[3]);
console.log(
  "calling an object content inside the array: work[3].name: " + work[3].name
);

// check array length <<<array>>>.length
console.log("");
console.log("this array has a length of: " + work.length);

// calling a function inside the array
console.log("");
console.log(
  "this is a function inside the array, calling it with work[0]() : " +
    work[0]()
);

// check the last element of an array
console.log("");
console.log(
  "checking last element of an array with work[work.length - 1] : " +
    work[work.length - 1]
);
// negative array.at( -xx) checks index from an end of array, where -1 is for the last
console.log(
  "more comfortable way to check the last element of an array with work.at (-1) : " +
    work.at(-1)
);

// PUSH POP SHIFT UNSHIFT
console.log("");
work.push("PUSH", "PUSH2");
console.log("Array after PUSH" + work);
work.pop();
console.log("Array after POP" + work);
work.unshift("UNSHIFT", "UNSHIFT2", "UNSHIFT3");
console.log("Array after UNSHIFT" + work);
work.shift();
console.log("Array after SHIFT" + work);
console.log(work);
console.log("");

// loop through array elements

console.log(simple);
console.log("loop through array elements with FOR:");
for (let i = 0; i < simple.length; i++) console.log(simple[i]);
console.log("loop through array elements with FOR --- OF:");
for (let element of simple) {
  console.log(element);
}
console.log(
  "there's a FOR --- IN method, but that's a bad idea, cause very slow"
);
for (let key in simple) {
  console.log(simple[key]);
}
console.log("");

// Array length
console.log("array length = biggest element index + 1");
console.log("we can manually redeclare length of an array");
console.log(
  "so the easiest way to clear an array is to declare its length as 0"
);

// Another way to create a new array, better not to use
console.log("");
console.log("let array = new Array ('john', 'bob', 'vasek')");
let badArray = new Array("john", "bob", "ed");
console.log(badArray);
console.log("");

// MATRIX
console.log("MATRIX - Arrays in arrays");

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(matrix[1][1]);
console.log("");
