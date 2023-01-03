let message = "Hello this is my freaking task";

// Using SPLIT - REVERSE - JOIN METHOD
let messageToArray = message.split("").reverse();
console.log(messageToArray);
let reverseMessage = messageToArray.join("");
console.log(reverseMessage);

// USING FOR LOOP
let resultSringForMethod = "";
for (let i = message.length - 1; i >= 0; i -= 1) {
  console.log(message[i]);
  resultSringForMethod += message[i];
}

console.log(resultSringForMethod);
