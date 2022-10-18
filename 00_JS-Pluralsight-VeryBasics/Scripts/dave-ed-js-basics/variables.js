console.log("-=-=-=-=-=-START OF VARIABLES SCRIPT / LESSON-=-=-=-=-=-");

// ЗАДАЕМ ПЕРЕМЕННЫЕ - СТАРЫЙ СПОСОБ ЧЕРЕЗ VAR
var name = "Stani";
var life = 100;
// ПЕРЕЗАДАЛ ГРУБО НОВОЕ ЗНАЧЕНИЕ РАНЕЕ СОЗДАННОЙ ПЕРЕМЕННОЙ
life = 90;
// ДИНАМИЧЕСКИ ПЕРЕЗАДАЛ ЗНАЧЕНИЕ ПЕРЕМЕННОЙ
life = life - 20;

console.log("Stani's first line of JS");
console.log(life);

// ЗАДАЕМ ПЕРЕМЕННЫЕ НОВЫЙ СПОСОБ - ЧЕРЕЗ LET И ЧЕРЕЗ CONST
const HP = 500;
// ПЕРЕНАЗНАЧИТЬ ТЕПЕРЬ КОНСТАНТУ НР НЕЛЬЗЯ - БУДЕТ ДАВАТЬ ОЩИБКУ ИЛИ
// ПРОСТО НЕ БУДЕТ МЕНЯТЬ ЗНАЧЕНИЕ

// РАБОТАЕТ НОРМАЛЬНО, НОВЫЙ СПОСОБ ЗАДАНИЯ ПЕРЕМЕННОЙ
let hitPoints = 300;
hitPoints = hitPoints - 100;
console.log(hitPoints);

console.log("-=-=-=-=-=-END OF VARIABLES SCRIPT / LESSON-=-=-=-=-=-");
