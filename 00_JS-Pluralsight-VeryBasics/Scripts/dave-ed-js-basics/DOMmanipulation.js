// создали константу text, а внутри нее запихнули h1 из нашей html страницы, обратились по тегу
const text = document.querySelector("h1");
console.log(text);

// создали константу header, а внутри нее запихнули h1.page__header из нашей html страницы, обратились по классу
const header = document.querySelector(".page__header");
console.log(header);

// обратились к нашей константе text --> style (это как бы обращение ко всему, что есть в css) --> color (свойство колор) --> назначили значение
// цвет нашего h1 изменился на красный при помощи этого джаваскрипта
text.style.fontSize = "50px";
// если надо обратиться к background-color в джаваскрипте, то обращаемся так: backgroundColor ---> т.е. все как бы переводится в camelCase

//создали в подключенном css файле стиль .change
//теперь при помощи JS добавляем созданный класс к константе text (которая равно h1)
text.classList.add("change");

//А так мы убираем класс с элемента
text.classList.remove("change");

// создали константу changeColor, обратившись к нашей кнопке по классу
const changeColor = document.querySelector(".change__color__button");
// на нашу кнопку накинули eventListener, задали ему параметр click и прописали функцию.
// то есть ИМЕННО эта функция будет выполняться при CLICK по этой кнопке
changeColor.addEventListener("click", function () {
  //можно просто накинуть этот класс по кнопке - при помощи команды ADD
  // ----------------->>>> text.classList.add("change");
  // но еще можно при помощи команды TOGGLE -> и тогда при повторном нажатии кнопки класс будет выключаться
  text.classList.toggle("change");
});

// задали константу userList, а значением ей ВСЕ LI-шки класса .NAMES__LIST, тут можно обращаться и без >, как в CSS обращение родители-потомки
let userrList = document.querySelectorAll(".names__list > li");
// переназначил userList через
const userList = document.querySelector(".names__list");

console.log(userList);

// сделали цикл ... for (user - это мы назначили переменную) of userList (из массива userList)
for (user of userrList) {
  //при клике на user (который задали выше) ---> выполняем следующую какую-то функцию
  user.addEventListener("click", function () {
    // волшебное слово THIS THIS THIS ---> переназначаем стиль - цвет - красный
    this.style.color = "red";
  });
}

// задали константу listInput и дали ей значение по классу из нашего хтмл
const listInput = document.querySelector(".list__input");
console.log(listInput.value);
//сделали константу с кнопкой add__list__button
const addListButton = document.querySelector(".add__list__button");
//магия будет происходить при клике на кнокпку
addListButton.addEventListener("click", function () {
  //create an LI out of thin air
  const newLi = document.createElement("LI");
  //add INPUT value to that new LI
  const liContent = document.createTextNode(listInput.value);
  newLi.appendChild(liContent);
  //attach that LI to the USER LIST
  userList.appendChild(newLi);
});
