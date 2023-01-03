const myArray = [1, 3, -7, 19, 12, 44, 33, 0, 12, -5];
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
