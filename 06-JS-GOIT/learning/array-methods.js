const name = "Stani";
let stringToArray = name.split("");
console.log(".split method: ", stringToArray);

const testArray = ["Stani", "loves", "JS", "...", "NOT"];
let arrayToString = testArray.join("-=-=-");
console.log(".join method: ", arrayToString);

let searchThroughArray = testArray.indexOf("JS");
console.log(".indexOf : ", searchThroughArray);

let checkArrayIncludes = testArray.includes("Stanislavivich");
console.log(".includes : ", checkArrayIncludes);
