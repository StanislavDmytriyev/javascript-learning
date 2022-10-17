const name = "Stani";

// создаем массив (array), дали ему имя schedule и в квадратных скобках через запятую перечиляем элементы массива
const phoneNumbers = [667582364785, 758357043275893, 76358673049];

// не забываем, что индекс элементов массива начинается с 0
// то есть 0 = "wake up" , 1 = "brush teeth" и так далее
const schedule = [
  "wake up",
  "brush teeth",
  "breakfast",
  "have fun and enjoy th rest of the day",
];
console.log(schedule);
console.log(schedule[2]);

// Добавил новый элемент в массив. При PUSH он просто добавляется последним индексом
schedule.push("Element PUSH");
console.log(schedule);
// добавил новый элемент самым первым (то есть индекс 0) в массив
schedule.unshift("Element UNSHIFT");
console.log(schedule);

// Удалил последний элемент из массива. POP()
schedule.pop();
console.log(schedule);

// удалил первый элемент массива SHIFT()
schedule.shift();
console.log(schedule);

// узнать индекс элемента массива INDEXOF, в скобках пишем искомый элемент
console.log(schedule.indexOf("breakfast"));

// мы назначили индекс искомого элемента массива - константой и вывели в лог уже эту константу
const breakfast = schedule.indexOf("breakfast");
console.log(breakfast);

// то есть в нашем случае const breakfast = 2, то есть это число, и с ним можем обращаться как с числом обращаясь к этой константе
let testing = breakfast + 4;
console.log(testing);
