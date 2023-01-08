const string = "JavaScriptLovesCamelCase";
const letters = string.split("");
let invertedString = "";

for (let letter of letters) {
  // ЧЕРЕЗ FOR OF LOOP
  //   if (letter === letter.toLowerCase()) {
  //     invertedString += letter.toUpperCase();
  //   } else {
  //     invertedString += letter.toLowerCase();
  //   }

  // ЧЕРЕЗ ТЕРНАРНИК
  invertedString +=
    letter === letter.toLowerCase()
      ? letter.toUpperCase()
      : letter.toLowerCase();
}

console.log("Inverted string: ", invertedString);

const invertStringFunction = function (inputString) {
  let inverted = "";

  for (let letter of inputString.split("")) {
    inverted +=
      letter === letter.toLowerCase()
        ? letter.toUpperCase()
        : letter.toLowerCase();
  }

  return inverted;
};

console.log(invertStringFunction("aaAAAAAAAAAss"));
