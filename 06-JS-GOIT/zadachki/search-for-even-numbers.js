// 1. declare variables
const minNunber = 3;
const maxNumber = 13;
let total = 0;

// 2. create FOR loop
// 3. loop throught numbers range
for (i = minNunber; i <= maxNumber; i += 1) {
  // 4. check if number is even
  // 5. add even numbers to totals variable
  if (i % 2 === 0) {
    total += i;
    console.log(`total on current itiration ${total}`);
  }
}

console.log(`final total is ${total}`);

console.log("===============================================");

// REVERSE METHOD (BETTER)
let totalReverstMethod = 0;

for (let i = minNunber; i <= maxNumber; i += 1) {
  if (i % 2 !== 0) {
    console.log(`нечетное число ${i}`);
    continue;
  }

  totalReverstMethod += i;
  console.log(`сумма четных на данной итерации = ${totalReverstMethod}`);
}
