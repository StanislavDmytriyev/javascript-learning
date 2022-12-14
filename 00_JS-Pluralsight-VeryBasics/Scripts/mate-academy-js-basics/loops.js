//   выполнится 7 раз для age от 3 до 9
//     let age = 3 — стартовая команда, которая выполняется только один раз перед началом цикла;
// age < 10 — условие, которое будет проверяться перед каждой итерацией (выполнением тела) цикла. Если оно истинно (true), то выполнится следующая итерация;
// age = age + 1 — команда, которая будет выполняться после каждой итерации цикла.
for (let age = 3; age < 10; age = age + 1) {
  console.log(`My age is ${age}`);
}

// Перебор цикла в прямом порядке
for (let i = 0; i < 3; i++) {
  console.log(i);
}

// Перебор цикла в обратном порядке
for (let i = 3; i > 0; i--) {
  console.log(i);
}

// Сумма чисел от 1 до n
const n = 5;
let sum = 0;
for (let value = 1; value <= n; value++) {
  sum += value; // 1 + 2 + 3 + 4 + 5
}
console.log(sum); // 15

// myAge = 0 это стартовое условие, проходит проверку на myAge <= 10 ---> тогда выполняется то, что написано в { консоль лог... }, по окончании...
// по окончании этой итерации цикла возвращаемся в начало и выполняется myAge++. Потом снова выполняется проверка на новый myAge <= 10
//и круг цикла повторяется до того момента, как мой myAge станет 11, и проверка на <= 10 не будет пройдена
for (let myAge = 0; myAge <= 10; myAge++) {
  console.log(`Happy birthday, you've turned ${myAge}`);
}
// он же в обратном порядке
for (let myAge = 10; myAge > 0; myAge--) {
  console.log(`Your age has been reversed by 1 year and is now ${myAge}`);
}

// СОКРАЩЕННЫЕ ПРИСВАИВАНИЯ
// age += 2; // age = age + 2;
// age += 10; // age = age + 10;
// age -= 5; // age = age - 5;
// age *= 5; // age = age * 5;
// age /= 5; // age = age / 5;
// age %= 5; // age = age % 5;
// age -= 5; // age = age - 5;
// age *= 5; // age = age * 5;
// age /= 5; // age = age / 5;
// age %= 5; // age = age % 5;
