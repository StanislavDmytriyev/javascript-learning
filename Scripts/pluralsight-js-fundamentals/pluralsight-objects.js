// FUNCTION INSIDE AN OBJECT IS CALLED A : METHOD

// symbol is hidden for those who don't have access to symbol... source?
let mySymbol = Symbol();

let person = {
  name: "Stani",
  age: 35,
  partTime: false,
  // METHOD (A function inside an object)
  showInfo: function (realAge) {
    // putting THIS is critical
    showMessage(this.name + " is " + realAge);
  },
  //only code will be able to access this, who has access to declaring mySymbol above
  [mySymbol]: "secret information",
};

//REASSIGN object property, two different sintaxes
person.name = "Stani Dmitrssen";
person["partTime"] = true;

console.log(person.partTime);

showMessage(person.name);

function showMessage(message) {
  document.getElementById("message").textContent = message;
}

person.showInfo(34);

let now = new Date();
console.log(now.toDateString());
console.log(Math.abs(-33));
