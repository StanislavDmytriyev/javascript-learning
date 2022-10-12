// Вычисление периметра, площади прямоугольника и занесениие ее в лог
const a = 5;
const b = 7;
const perimeter = a * 2 + b * 2;
const square = a * b;
console.log(`Rectangle ${a} x ${b}. It's square is ${square}; it's perimeter is ${perimeter}
-------------------------------------------------------------------`);

// А теперь делаем то же самое, но завернем это дело в функцию
function printRectangleInfo(c, d) {
  const perimeterFunction = c * 2 + d * 2;
  const squareFunction = c * d;
  console.log(`Rectangle ${c} x ${d}. It's square is ${squareFunction}; it's perimeter is ${perimeterFunction}
-------------------------------------------------------------------`);
}
// вызываем функцию придав ей аргументы 20 и 30
printRectangleInfo(20, 30);

// функция с RETURN
// в параметрах функции дали параметр color и сразу его аргумент "white", т.е. white будет по умолчанию
function buildHouse(numberOfFloors, color = "white") {
  const house = `${color} ${numberOfFloors}-floors house`;
  return house;
}

const smallHouse = buildHouse(2);
// тут перезаписываем параметр color с white (который по умолчанию) на red
const bigHouse = buildHouse(9, "red");

console.log(smallHouse);
console.log(bigHouse);

// ЕЩЕ ПРМИЕРЫ ФУНКЦИЙ, Тут сокращаем вычислительные можности, то есть если  возраст >= 18, то дальнейшие проверки уже выполняться не будут
// из-за первого return "Взрослый"
function getTitle(age) {
  if (age >= 18) {
    // при age >= 18 выходим из функции
    return "Взрослый";
  }
  // сюда программа дойдет, только если условие age >= 18 не выполнилось
  // значит в последующем коде мы точно знаем, что age < 18
  if (age >= 10) {
    // при age >= 10 (но < 18) выходим из функции
    return "Подросток";
  }
  // сюда мы попадаем, только если не вышли из функции раньше
  // значит age < 18 и age < 10
  return "Ребенок";
}

// ТЕРНАРНЫЙ ОПЕРАТОР
let age = 23;
//Если TRUE то значение после ?, а если FALSE, то значение после :
const result = age >= 18 ? "Взрослый" : "Не взрослый";
console.log(result); // 'Взрослый'

const agee = 25;
let title = agee < 18 ? "Child" : "Adult";
console.log(title);
