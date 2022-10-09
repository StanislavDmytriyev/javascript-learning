console.log("-=-=-=-START OF STRING CONCATENATION SCRIPT / LESSON-=-=-=-");
// СЛЕПИЛИ 2 СТРИНГА, ВСЕ ОК
console.log("Hello, my name is " + "Stanislav");
// ЗАХОТЕЛИ ТЕКСТ С апострофом - и оно приняло ее за закрывающую кавычку
// чтобы js не принял простой апостроф за закрывающую - перед ним ставим слэш
// вот так вот получается \'
// Кстати, PRETTIER заменяет одинарные кавычки на двойные
// С двойными, в принципе, не бывает никаких вообще проблем
// Это более новый и современный метод (раньше писали одинарными)
console.log("Hello it's me Stanislav");

// А теперь актуальный и крутой метод с BACKTICKS
const nameee = "Stani Dmitrssen";
const age = 35;
// то есть никаких плюс и прочего - сразу текст и переменная
console.log(`Hello it's me ${nameee}`);
console.log(`Hello it's me ${123125435464536}`);
// пример неудобного синтаксиса (старого)
console.log(
  "hello it's me " + nameee + " and my age is " + age + " years old."
);
// пример крутого синтаксиса (нового), тут AGE превратится в стринг
console.log(`hello it's me ${nameee} and my age is ${age} years old.`);
// проверим, как число превращается в стринг при конкатинации
const combined = nameee + age;
console.log(combined);
console.log(typeof combined);
console.log("-=-=-=-END OF STRING CONCATENATION SCRIPT / LESSON-=-=-=-");
