const greaterNumber = function (a, b) {
  return a > b ? a : b;
};

function changeEven(numbers, value) {
  // Change code below this line
  const newArray = [];
  let valueToPush = 0;
  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] % 2 === 0) {
      console.log(numbers[i]);
      valueToPush = numbers[i] + value;
      newArray.push(valueToPush);
      continue;
    }
    newArray.push(numbers[i]);
  }
  console.log(newArray);
  return newArray;
  // Change code above this line
}

changeEven([1, 2, 3, 4, 5], 10);

//ПО ВОЗРАСТАНИЮ!
const scores = [61, 19, 74, 35, 92, 56];
const ascendingScores = [...scores].sort((a, b) => a - b);
console.log(ascendingScores);

//ПО УБЫВАНИЮ!
const descendingScores = [...scores].sort((a, b) => b - a);
console.log(descendingScores); // [92, 74, 61, 56, 35, 19]

const studentsNames = [
  "Jacob",
  "Artemis",
  "Solomon",
  "Adrian",
  "Kai",
  "Ganymede",
];

// СТРОКИ В АЛФАВИТНОМ ПОРЯДКЕ
const inAlphabetOrder = [...studentsNames].sort((a, b) => a.localeCompare(b));
console.log(inAlphabetOrder);

// СТРОКИ ЗАДОМ НАПЕРЕД
const inReversedOrder = [...studentsNames].sort((a, b) => b.localeCompare(a));
console.log(inReversedOrder);

// СОРТИРОВКА МАССИВА ОБЪЕКТА ПО ЗНАЧЕНИЮ СВОЙСТВА
const students = [
  { name: "Mango", score: 83 },
  { name: "Poly", score: 59 },
  { name: "Ajax", score: 37 },
  { name: "Kiwi", score: 94 },
];

const inAscendingScoreOrder = [...students].sort(
  (firstStudent, secondStudent) => firstStudent.score - secondStudent.score
);

const inDescendingScoreOrder = [...students].sort(
  (firstStudent, secondStudent) => secondStudent.score - firstStudent.score
);

const inAlphabeticalOrder = [...students].sort((firstStudent, secondStudent) =>
  firstStudent.name.localeCompare(secondStudent.name)
);

const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
  },
  {
    title: "The Dream of a Ridiculous Man",
    author: "Fyodor Dostoevsky",
    rating: 7.75,
  },
  { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
  { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
];
// Change code below this line

const sortedByAuthorName = [...books].sort((a, b) =>
  a.author.localeCompare(b.author)
);
console.log(sortedByAuthorName);

const sortedByReversedAuthorName = [...books].sort((a, b) =>
  b.author.localeCompare(a.author)
);
console.log();

const sortedByAscendingRating = [...books].sort((a, b) => a.rating - b.rating);
console.log();

const sortedByDescentingRating = [...books].sort((a, b) => b.rating - a.rating);
console.log();

const bookss = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
  },
  {
    title: "The Dream of a Ridiculous Man",
    author: "Fyodor Dostoevsky",
    rating: 7.75,
  },
  { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
  {
    title: "The Dreams in the Witch House",
    author: "Howard Lovecraft",
    rating: 8.67,
  },
];
const MIN_BOOK_RATING = 8;
// Change code below this line

const names = bookss
  .filter((book) => book.rating > MIN_BOOK_RATING)
  .sort((a, b) => a.author - b.author);

console.log(names);

const getNamesSortedByFriendCount = (users) => {
  return [...users]
    .sort((a, b) => a.friends - b.friends)
    .map((user) => user.name);
};

const users = [
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    gender: "male",
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    gender: "female",
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    gender: "male",
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    gender: "female",
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong", "Adrian Cross"],
    isActive: true,
    balance: 3951,
    gender: "male",
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: [
      "Jacklyn Lucas",
      "Linda Chapman",
      "Adrian Cross",
      "Solomon Fokes",
    ],
    isActive: false,
    balance: 1498,
    gender: "male",
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    gender: "female",
  },
];

const getNamesSortedByFriendCounts = (users) => {
  return [...users]
    .sort((a, b) => a.friends - b.friends)
    .map((user) => user.name);
};

console.log(getNamesSortedByFriendCounts(users));

const getSortedFriends = (users) => {
  let result = [...users].flatMap((user) => user.friends);
  let resultFiltered = result.filter(
    (friend, index, array) => array.indexOf(friend) === index
  );
  let resultFinal = resultFiltered.sort((a, b) => a.localeCompare(b));

  return resultFinal;
};

console.log(getSortedFriends(users));
