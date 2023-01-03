const clients = ["John", "Vasek", "Bob"];
const lastElementIndex = clients.length - 1;

console.log(clients);

for (let i = 0; i < clients.length; i += 1) {
  console.log(clients[i]);
}

console.log(typeof clients[1]);

clients[0] = "Stani";
console.log(clients);

clients[clients.length - 1] = "Dodik";
console.log(clients);

clients[lastElementIndex] = "Still Dodik";
console.log(clients);

for (const somebody of clients) {
  console.log(somebody);
}

const testStringForOfLoopTesting = "Test string";
for (let letter of testStringForOfLoopTesting) {
  console.log(letter);
}

let message;

const clientNameToFind = "Stani";
for (let somebody of clients) {
  if (clientNameToFind === somebody) {
    message = "Клиент с таким именем уже существует";
    break;
  }
  message = "Клиента с такими именем нет в базе данных";
}

console.log("Simple soulution:", message);

console.log("===============================");
let messagePreDefined = "Такого клиента нет";

for (const client of clients) {
  if (client === clientNameToFind) {
    messagePreDefined = "Такой клиент есть";
    break;
  }
}

console.log("Pre-defined solution:", messagePreDefined);

const numbers = [1, 3, 5, 10, 22, 33, 13, 12, 7, 11];
const threshold = 7;
for (const number of numbers) {
  if (number >= threshold) {
    console.log("This number is >= 7 : ", number);
  }
}

for (let i = 0; i < numbers.length; i += 1) {
  if (numbers[i] < threshold) {
    continue;
  }

  console.log(`Число больше чем ${threshold} : ${numbers[i]}`);
}

console.log("Client before unshift:", clients);
let deleteFirst = clients.shift();
console.log("clients unshifted element: ", deleteFirst);
console.log("clients after unshift: ", clients);
