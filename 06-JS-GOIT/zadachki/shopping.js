//1. declare variables

let balance = 10000;
const payment = 2000;

//2. log a message "checking"
console.log(
  `Общая стоимость заказа ${payment} кредитов. Проверяем количество доступных средств на счету`
);

//3. Check if purchase is withing balance allowance
//4. If wihin deduct purchase from the balance and post a message
if (payment <= balance) {
  balance -= payment;
  console.log(`На счету осталось ${balance} кредитов`);
  //5. If less than inform user that not enough cash
} else {
  console.log("На счету недостаточно средства для проведения операции!");
}

//6. log message ops completed anyway
console.log("Операция завершена ");
