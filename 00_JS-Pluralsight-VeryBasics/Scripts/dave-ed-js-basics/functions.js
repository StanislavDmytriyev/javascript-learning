console.log("-=-=-=-=-=-START OF FUNCTIONS SCRIPT / LESSON-=-=-=-=-=-");

const myName = "Stani Dmitrssen";

// НАЗНАЧИЛИ ФУНКЦИЮ
function logger() {
  // myName мы задали внутри функции, и существует он ТОЛЬКО внутри этой функции
  const myName = "Stani Dmitrssen";
  console.log("Party time!");
}

// ВЫЗВАЛИ ФУНКЦИЮ FUNCTION INVOKATION
logger();
// функция addNumbers с двумя параметрами number1 & number2
function addNumbers(number1, number2) {
  console.log(number1 + number2);
}
// вызываю функцию и в скобках задаю параметры 1 и 2 для нее
addNumbers(20, 50);

// функция с параметром текст делает весь этот текст верхним регистром
// и выводит его в консоль
function upperCase(text) {
  const uppperCased = text.toUpperCase();
  console.log(uppperCased);
}
// вызываем эту функцию и в качестве параметра
// даем ей ранее заданную константу myName
upperCase(myName);

// ДРУГОЙ СПОСОБ СОЗДАНИЯ ФУНКЦИИ (КАК С ПЕРЕМЕННЫМИ)
const upperCaseMethod2 = function upperCase(text) {
  const uppperCased = text.toUpperCase();
  console.log(uppperCased);
};
upperCaseMethod2("upper case method 2 text");

// ТРЕТИЙ СПОСОБ СОЗДАНИЯ ФУНКЦИИ (САМЫЙ НОВЫЙ И КОРОТКИЙ)
const upperCaseMethod3 = (text) => {
  const uppperCased = text.toUpperCase();
  console.log(uppperCased);
};
upperCaseMethod3("upper case method 3 text");

console.log("-=-=-=-=-=-END OF FUNCTIONS SCRIPT / LESSON-=-=-=-=-=-");
