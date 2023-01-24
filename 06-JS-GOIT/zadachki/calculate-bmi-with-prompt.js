// const weight = prompt("Enter your weight in KG, devide with dot");
// const height = prompt("Enter your height in M, devide with dot");

const calculateBMI = function (weight, height) {
  const w = Number(weight.replace(",", "."));
  const h = Number(height.replace(",", "."));
  const heightPow = Math.pow(h, 2);

  return w / heightPow;
};

const bmi = calculateBMI("80.9", "1,80");
console.log("Your BMI is: ", bmi);

//  LEARNING 3-2, passing object as function argument
const stani = {
  height: "1,8",
  weight: "80,0",
};

function BMICalculateV2(object) {
  const { height, weight } = object;
  const numericWeight = Number(weight.replace(",", "."));
  const numericHeight = Number(height.replace(",", "."));
  return Number((numericWeight / numericHeight ** 2).toFixed(1));
}

console.log(BMICalculateV2(stani));
