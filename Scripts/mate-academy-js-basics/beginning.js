// ЗАДАЧКА ПРО ПЕЧЕНЮШКИ
const myName = "Stani";
const myAge = 35;
let myCash = 10;
const isMarried = true;

const cookiesPrice = 7;
const candiesPrice = 8;

let totalPrice = cookiesPrice + candiesPrice;
// переназначили totalPrice
totalPrice = totalPrice * 0.95;
console.log(totalPrice);

if (myCash >= totalPrice) {
  console.log("you have enough money to buy candies and cookies");
} else {
  console.log("you don't have enough money to purchase both");
}

//ТИПЫ ДАННЫХ
// смотрим тип данных в переменной при помощи команды typeof
console.log(myName, typeof myName);
console.log(myCash, typeof myCash);
console.log(isMarried, typeof isMarried);
//смотрим тип данных какого-то выражения не из переменной
console.log(10, typeof 10);
console.log(typeof (10 + 20));
// undefined
let babaNina;
console.log(typeof babaNina);
// null
let balikWife = null;
const balikMarried = balikWife !== null;
console.log(balikWife, typeof balikMarried);

//STRING BASICS
//CONCATENATION
let message = "Stani is 35";
console.log(message);
message = myName + " is 35";
console.log(message);
message = myName + " is " + myAge;
console.log(message);
//при обратных кавычках сохраняется форматирование текста (в т.ч. пробелы и переносы строк)
let message2 = `${myName} 
is turning
        ${myAge + 1} 
                    next year`;
console.log(message2);

// && имеет более высокий приоритет, чем ||, а потому пользуемся скобками
const canBuy = isAdult && (hasEnoughCash || hasCreditLimit);
