"use strict";
//created an object
let person = {
  firstName: "Stanislav",
  lastName: "Dmitrssen",
  isAdult: function () {
    return this.age >= 18;
  },
  age: 35,
};

//added a new property to an existing object
person.ageOuterAdd = 35;

//adding a function to an existing object
person.isAdultOuterAdd = function () {
  return this.age >= 18;
};

function registerUser(fName, lName) {
  let person = {
    firstName: fName,
    lastName: lName,
  };
  console.log(person);
  console.log("");
}
registerUser("first first", "last last");

function registerUserShorthand(firstName, lastName) {
  let person = {
    firstName,
    lastName,
    age: 6,
    isAdult() {
      return this.age >= 18;
    },
  };
  console.log(person);
  console.log("");
}
registerUserShorthand("Kirill", "Dmitrev");
//checking all available parameters of an object Object.keys(<<<object name>>>>)
console.log(Object.keys(person));
console.log("");

//loop through properties
for (let propertyName in person) {
  console.log(propertyName);
}

let person1 = {
  firstName: "Jenia",
  lastName: "Andriyevska",
  age: 37,
  isAdult: function () {
    return this.age > 18;
  },
};
let person2 = {};
// copied one object parameters to another
Object.assign(person2, person1);
console.log("");
console.log("copied parameters of person1 object to an empty person2");
console.log(person1);
console.log(person2);
console.log("");

let healthStats = {
  height: 180,
  weight: 78,
};

Object.assign(person1, healthStats);
console.log("merged two different objects: person1 and healthStats");
console.log(person1);
console.log("");

// another way to merge
function mergeHealthStats(person, healthStats) {
  // first parameter is {}, otherwise function will return mutated person1
  return Object.assign({}, person, healthStats);
}
let mergedPerson = mergeHealthStats(person1, healthStats);
console.log("Another way to merge objects (via function");
console.log(mergedPerson);
console.log("");

let stani = {
  firstName: "stani",
  lastName: "dmitreff",
  age: 35.5,
  isAdult: function () {
    return this.age > 18;
  },
};

let kirillius = {
  firstName: "kirillius",
  lastName: "dmitrsstein",
  age: 6.1,
  isAdult: function () {
    return this.age > 18;
  },
};

//constructor function to create a new person
function createPerson(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.isAdult = function () {
    return this.age > 21;
  };
}

let personGenerated1 = new createPerson("valdis", "xuyaldis", 46);
console.log("this is a constructor function generated person");
console.log(personGenerated1);
console.log("");
console.log(personGenerated1["isAdult"]);

let propertyName = "firstName";
console.log(personGenerated1[propertyName]);
console.log("");

//====
for (let propertyName in personGenerated1) {
  console.log(propertyName + ": " + personGenerated1[propertyName]);
}

console.log("");
console.log(Object.getOwnPropertyDescriptor(personGenerated1, "firstName"));
console.log("");

Object.defineProperty(personGenerated1, "firstName", { writable: false });
console.log(Object.getOwnPropertyDescriptor(personGenerated1, "firstName"));
console.log("");

delete personGenerated1.firstName;
console.log(personGenerated1);

let personn = {
  name: {
    first: "Jim",
    last: "Cooper",
  },
  age: 29,
};

Object.defineProperty(personn, "fullName", {
  get: function () {
    return this.name.first + " " + this.name.last;
  },
  set: function (value) {
    var nameParts = value.split("  ");
    this.name.first = nameParts[0];
    this.name.last = nameParts[1];
  },
});

console.log(personn.fullName);
console.log("");
personn.fullName = "Davy Jones";
console.log(personn.fullName);
console.log(personn.name.first);
console.log(personn.name.last);
console.log("");

console.log("PROTOTYPE");

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}
Person.prototype.age = 33;

console.log(Person.prototype);
console.log("");

var jim = new Person("Jambo", "Butler");
console.log(jim.__proto__);
var sofia = new Person("Sofia", "Bulgarska");
console.log(sofia.__proto__);

function PersonDemo(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  Object.defineProperty(this, "fullName", {
    get: function () {
      return this.firstName + "  " + this.lastName;
    },
    enumerable: true,
  });
}

function Student(firstName, lastName, age) {
  Person.call(this, firstName, lastName, age);
  this._enrolledCourses = [];

  this.enroll = function (courseId) {
    this._enrolledCourses.push(courseId);
  };

  this.getCourses = function () {};
}
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

console.log("Student Jim");
jim = new Student("Jim", "Cooper", 29);
console.log(jim);

//================JS CLASSES=================
console.log("---------------CLASSES---------------");

class PersonClass {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  get fullName() {
    return this.firstName + "  " + this.lastName;
  }
  set fullName(fullName) {
    var nameParts = fullName.split("  ");
    this.firstName = nameParts[0];
    this.lastName = nameParts[1];
  }
  isAdult() {
    return this.age >= 18;
  }
}
Object.defineProperty(PersonClass.prototype, "fullName", { enumerable: true });

let vasek = new PersonClass("Vasek", "Bebux", 15);
vasek.fullName = "Dodik  Paroxodik";
console.log(vasek);
console.log(vasek.fullName);
console.log(vasek.isAdult());

class StudentClass extends PersonClass {
  constructor(firstName, lastName, age) {
    super(firstName, lastName, age);
    this._enrolledCourses = [];
  }

  enroll(courseID) {
    this._enrolledCourses.push(courseID);
  }
  getCourses() {
    return (
      this.fullName +
      "'s enrolled courses are: " +
      this._enrolledCourses.join(", ")
    );
  }
}
let vasekkk = new Student("Jimmik", "Kubrik", 33);

//================JS MATH=================
console.log("");
console.log(Math.PI);
console.log(Math.max(2, 42, 29));
console.log(Math.round(39.876));
console.log("");

let Dates = new Date(0);
console.log(Dates);
let DatesISO = new Date("2022-03-12:02:33Z");
console.log(DatesISO);
let DateBestUse = new Date(2022, 5, 11, 14, 29, 39, 20);
let DateBestUse2 = new Date(2022, 5, 18, 10, 29, 39, 20);
console.log("2 dates subtraction, result in MS");
console.log(DateBestUse - DateBestUse2);
console.log(DateBestUse);

console.log(DateBestUse.getFullYear());
console.log(DateBestUse.getMonth());
console.log(DateBestUse.getDate());
console.log(DateBestUse.getHours());
console.log(DateBestUse.getMinutes());
console.log(DateBestUse.getSeconds());
console.log(DateBestUse.getMilliseconds());

// SAME can be done in UTC
console.log(DateBestUse.getUTCHours());

DateBestUse.setMonth(4); //ZERO-BASED

function checkPasswordComplexity(password) {
  let regex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).{8,}$");
  let regexShorthand = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

  return regex.test(password);
}
console.log("");
console.log("password complexity check function via regex");
console.log(checkPasswordComplexity("shitty password"));

function findAlerts(logData) {
  let regex = /ERROR(.*?):(.*?):/g;

  let resulttt = regex.exec(logData);
  while (resulttt !== null) {
    console.log(resulttt[1]);
    console.log(resulttt[2]);
    console.log("------------------------");
    resulttt = regex.exec(logData);
  }
}
let logData =
  "INFO:ok;ERROR (VERY HIGH):Something broke, ERROR (LOW): something minor going on";
findAlerts(logData);
