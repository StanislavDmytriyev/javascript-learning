// OLD SYNTAX
const testArrayOne = [4, 5, 6];
const testArrayTwo = [7, 8, 9];
const oldSyntaxArray = [1, 2, 3].concat(testArrayOne, testArrayTwo);

console.log(oldSyntaxArray);

// NEW SYNTAX
const newSyntaxArray = [
  ...[1, 2, 3],
  ...testArrayOne,
  ...testArrayTwo,
  -22,
  11,
];
console.log(newSyntaxArray);

console.log("Math Minimum number", Math.min(...newSyntaxArray));

// OLD SYNTAX
const objectOne = { a: 1, b: 2 };
const objectTwo = { c: 1, d: 4 };

const oldSyntaxObject = Object.assign({}, objectOne, objectTwo);
console.log(oldSyntaxObject);

const objectAssign = {};
// Object assign is destructive, changes the original object
Object.assign(objectAssign, objectOne, objectTwo);
console.log(objectAssign);

// NEW SYNTAX

const newSyntaxObject = {
  ...objectOne,
  ...objectTwo,
  say: "manually added",
};

console.log(newSyntaxObject);
