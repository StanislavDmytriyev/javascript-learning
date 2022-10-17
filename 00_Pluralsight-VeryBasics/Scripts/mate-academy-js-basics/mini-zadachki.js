// simpliest function with return
function canBuyBeer(age) {
  if (age >= 18) {
    return "You can buy beer";
  } else {
    return "You can not buy beer";
  }
}

// simple else if zada4ka
function getTipsRating(amount) {
  if (amount === 0) {
    return "terrible";
  } else if (amount >= 1 && amount <= 10) {
    return "poor";
  } else if (amount >= 11 && amount <= 20) {
    return "good";
  } else if (amount >= 21 && amount <= 50) {
    return "great";
  } else {
    return "excellent";
  }
}

function calculateTaxes(income) {
  if (income <= 1000) {
    return income * 0.02;
  } else if (income >= 1001 && income <= 10000) {
    return income * 0.03;
  } else {
    return income * 0.05;
  }
}

// Функция должна выбрать большее из суммы - разницы - частного - умножения двух чисел, способ 1
function getLargestExpressionResult1(a, b) {
  let add = a + b;
  let deduct = a - b;
  let multiply = a * b;
  let divide = a / b;
  if (add > deduct && add > multiply && add > divide) {
    console.log(add);
    return add;
  } else if (deduct > add && deduct > multiply && deduct > divide) {
    console.log(deduct);
    return deduct;
  } else if (multiply > add && multiply > deduct && multiply && divide) {
    console.log(multiply);
    return multiply;
  } else if (divide > add && divide > deduct && divide > multiply) {
    console.log(divide);
    return divide;
  }
}

// Функция должна выбрать большее из суммы - разницы - частного - умножения двух чисел, способ 2
function getLargestExpressionResult2(a, b) {
  let result = a + b;
  if (result < a - b) {
    result = a - b;
  }
  if (result < a * b) {
    result = a * b;
  }
  if (result < a / b) {
    result = a / b;
  }
  console.log(result);
  return result;
}
getLargestExpressionResult2(0.1, -0.2);
getLargestExpressionResult1(0.1, -0.2);

// ЗАСУНУЛИ ЦИКЛ В ФУНКЦИЮ
function getDrinks(numberOfGuests) {
  let sum = 0;
  for (let i = 1; i <= numberOfGuests; i++) {
    sum += i;
  }
  console.log(sum);
  return sum;
}

// считает сложный процент3
function calculateProfit(amount, percent, period) {
  let sum = amount;
  for (let i = 1; i <= period; i++) {
    sum += sum * (percent / 100);
  }
  return sum - amount;
}
