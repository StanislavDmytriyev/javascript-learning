// symbol is hidden for those who don't have access to symbol... source?
let mySymbol = Symbol();

let person = {
  name: "Stani",
  age: 35,
  partTime: false,
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
