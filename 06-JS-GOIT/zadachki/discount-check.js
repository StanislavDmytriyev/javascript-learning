//1.Declare variables
const totalSpent = 499;
let payment = 500;
let discound = 0;

//2. Check if payments history [100 1000) then discound 2%
if (totalSpent >= 100 && totalSpent < 1000) {
  discound = 0.02;
  //3. Check if payments history [1000 5000) then discound 5%
} else if (totalSpent >= 1000 && totalSpent < 5000) {
  discound = 0.05;
  //4. Check if payments history > 5000) then discound 10%
} else if (totalSpent >= 5000) {
  discound = 0.1;
  //5. If payment history < 100 , then no discount
}

//6. Resulting message with discount applied
console.log(
  `Оформляем заказ на сумму ${payment} со скидкой ${discound * 100} %`
);

//7. Additional task : let's apply the discound and generate a new console log message
let priceDifference = payment * discound;
let finalPrice = payment - priceDifference;

console.log(
  `Ваша покупка на ${payment} кредитов, со скидкой ${
    discound * 100
  } % . Итого к оплате ${finalPrice} кредитов. Скидка составила ${priceDifference} кредитов.`
);
