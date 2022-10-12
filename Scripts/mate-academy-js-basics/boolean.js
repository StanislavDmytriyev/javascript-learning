let age = 35;
let myCash = 100;
let myBankBalance = 300;

const hasAccess = age >= 18;
console.log(hasAccess);
console.log(!hasAccess); // ! - дает значение наоборот

const ageLimit = 18;
const isAdult = age >= 18;

const alcoPrice = 40;
const enoughCashMoney = myCash >= alcoPrice;

const canBuy = enoughCashMoney && isAdult;
console.log("can buy with cash", canBuy);

const enoughBankMoney = myBankBalance >= alcoPrice;
const canBuyWithCashOrCard = isAdult && (enoughCashMoney || enoughBankMoney);
console.log("can buy with cash or with card", canBuyWithCashOrCard);
