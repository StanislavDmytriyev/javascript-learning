const myAge = 35;

// то есть если myAge > 18, то выполняется console.log("You are good to go!")
if (myAge >= 18) {
  console.log("You are good to go!");
  // не выполнилось первое условие (меньше 18), проверяем на второе условие
} else if (myAge > 14) {
  console.log("Consider learning C++ or Python");
  // если оба условия не выполняются (if) и сколько угодно (elseif), то ...
} else {
  console.log("Hey child, what are you even doing here?");
}

// проверяем на строгое соответствие (число === число), а также двойное условие &&
const dice1 = 2;
const dice2 = 3;

if (dice1 === 6 && dice2 === 6) {
  console.log("You've rolled a double 6!");
  // проверяем выполнение хотя бы одного из условий (||)
} else if (dice1 === 6 || dice2 === 6) {
  console.log("You've rolled at least one 6!");
} else {
  console.log("You didn't roll a single 6");
}
