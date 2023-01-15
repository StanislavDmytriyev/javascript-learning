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

const testObject = {
  title: "Dune",
  author: "Frank Gerbert",
  rating: 10,
  bestBook: true,
  reaction: {
    likes: 100,
    dislikes: 3,
    loves: 1000,
  },
};

// DESTRUCTURISATION OF OBJECT
const {
  title,
  bestBook,
  staniReadIt = true,
  author: genius,
  reaction: { likes, dislikes: durachkov, loves },
} = testObject;
console.log(durachkov);

// DESTRUCTURISATION OF ARRAY

const rgb = [200, 255, 100];

// SKIT ONE ELEMENT OF ARRAY , ,
const [red, , blue, alfa = 0.3] = rgb;
console.log(red, blue, alfa);

// USECASE
const authors = {
  stani: 10,
  kirill: 20,
  jenia: 11,
  babina: 14,
};

// <--- This method returns an array of arrays
const entries = Object.entries(authors);

for (const entry of entries) {
  console.log("entry of entries: ", entry);
  const [name, rating] = entry;
  console.log("After destructirisation, NAME + RATING: ", name, rating);
}

for (const [nameJSMagic, ratingJSMagic] of entries) {
  console.log("JS MAGIC name + rating", nameJSMagic, ratingJSMagic);
}

// REST
const { stani, ...others } = authors;
console.log(stani);
console.log(others);

// PARAMETERS-ARGUMENTS OBJECT PATTERN
const rgba = {
  red: 255,
  green: 123,
  blue: 144,
};
const testFunction = function (rgbObject) {
  const { red, green, blue, alpha = 0.3 } = rgbObject;
  console.log(red, green, blue, alpha);
};
testFunction(rgba);
