function checkStorage(available, ordered) {
  let message;
  message =
    ordered > available
      ? "Not enough goods in stock!"
      : "The order is accepted, our manager will contact you";
  return message;
}

function getSubscriptionPrice(type) {
  let price;
  switch (type) {
    case "starter":
      price = 0;
      break;
    case "professional":
      price = 20;
      break;
    case "organization":
      price = 50;
      break;
  }
}

function checkPassword(password) {
  const ADMIN_PASSWORD = "jqueryismyjam";
  let message;
  switch (password) {
    case null:
      message = "Canceled by user!";
      break;
    case "jqueryismyjam":
      message = "Welcome!";
      break;
    default:
      message = "Access denied, wrong password!";
  }
  return message;
}

function getShippingCost(country) {
  let message;
  switch (country) {
    case "China":
      message = `Shipping to ${country} will cost 100 credits`;
      break;
    case "Chile":
      message = `Shipping to ${country} will cost 250 credits`;
      break;
    case "Australia":
      message = `Shipping to ${country} will cost 170 credits`;
      break;
    case "Jamaica":
      message = `Shipping to ${country} will cost 120 credits`;
      break;
    default:
      message = "Sorry, there is no delivery to your country";
  }
  return message;
}

function formatMessage(message, maxLength) {
  let result;
  if (message.length <= maxLength) {
    result = message;
  } else {
    result = message.slice(0, maxLength);
  }
  return result;
}

function formatMessage(message, maxLength) {
  let result;
  if (message.length <= maxLength) {
    result = message;
  } else {
    result = message.slice(0, maxLength) + "...";
  }
  return result;
}

function normalizeInput(input) {
  const normalizedInput = input.toLowerCase();
  return normalizedInput;
}

let number = 50.2;

let INT = Number.parseInt(number);
console.log(INT, typeof INT);

let FLOAT = Number.parseFloat(number);
console.log(FLOAT, typeof FLOAT);

console.log("возводим в 0.5", Math.pow(10, 0.5));
