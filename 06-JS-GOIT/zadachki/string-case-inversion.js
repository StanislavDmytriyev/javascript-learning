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
