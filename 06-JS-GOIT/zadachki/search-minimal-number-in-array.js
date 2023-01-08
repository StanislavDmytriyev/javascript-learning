const myArray = [1, 3, -7, 19, 12, 44, -99, 33, 0, 12, -5];
console.table(myArray);

let minimalNumber = myArray[0];
let maximumNumber = myArray[0];

for (let i of myArray) {
  if (i < minimalNumber) {
    minimalNumber = i;
  } else if (i > maximumNumber) {
    maximumNumber = i;
  }
}

console.log("Minimal number in the array is: ", minimalNumber);
console.log("Maximum number is: ", maximumNumber);

function searchMinimumNumber(someArray) {
  console.log(...someArray);
  const resultMax = Math.max(...someArray);
  const resultMin = Math.min(...someArray);
  console.log(`Maximum: ${resultMax} and Minimum: ${resultMin}`);
}
searchMinimumNumber(myArray);

const minimalNumberFunction = function (someValue) {
  let minNumber = someValue[0];
  for (let number of someValue) {
    number < minNumber ? (minNumber = number) : "it's not a minimum number";
  }
  return minNumber;
};

console.log(minimalNumberFunction(myArray));
console.log(
  minimalNumberFunction([10, 12, 14, 11, 1, 2, 5, 11, -1, -5, 10, 200, 300])
);
