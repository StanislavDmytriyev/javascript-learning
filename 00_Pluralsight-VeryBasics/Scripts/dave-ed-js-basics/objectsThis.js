// добавили OBJECT, хотя создали его почти как переменную, но в фигурных скобках (CURLY BRACKETS { }   )
// а внутри фигурных скобках написали параметры этого нового объекта
const user1 = {
  // ❕❗❕❗❕❗ задаем параметры через двоеточие: и разделяем параметры запятой, а не ; точкой с запятой
  userName: "Stani Dmitrssen",
  userAge: 35,
  married: true,
  purchase: ["lego", "new pen", "new mouse"],
};

console.log(user1);
console.log(user1.userAge);

// выведет кучу всего : Window с выпадающим списком и миллионом всяких параметров
console.log(this);

// просто создали какую-то функцию для примера
function apples() {
  console.log("this is apples function");
}
// эта функция теперь видна в выпадающем списке this -> window -> apples
console.log(this);

//а функцию мы можем вызвать через window и без него, т.к. все что здесь есть - находится в window
window.apples();
apples();

// то есть по умолчанию this = обращается к WINDOW OBJECT

const user2 = {
  userName: "Stani",
  userAge: 35,
  married: true,
  purchase: ["lego", "new pen", "new mouse"],
  //🥰 Создали параметр sayName, а в него засунули FUNCTION. Функция делает console.log(THIS)
  // НО ЭТОТ THIS как бы выводит в лог своего ПРЯМОГО РОДИТЕЛЯ, то есть выведет OBJECT USER2
  sayName: function () {
    console.log(this);
  },
  // Эта параметр -> функция обратится к this (который покажет нам свой объект), и этого объекта параметр userName
  sayUserName: function () {
    console.log(this.userName);
  },
};
// Cобственно вызываем this для объекта user2
user2.sayName();
user2.sayUserName();
