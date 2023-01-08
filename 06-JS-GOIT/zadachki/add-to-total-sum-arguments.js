const totalSumFunction = function (someInputNumbers) {
  let totalSum = 0;
  for (let someNumber of arguments) {
    totalSum += someNumber;
  }

  return totalSum;
};

console.log(totalSumFunction(20, 11, 33, 55, 6, 123, 231, 55));
console.log(totalSumFunction[(10, 20)]);
