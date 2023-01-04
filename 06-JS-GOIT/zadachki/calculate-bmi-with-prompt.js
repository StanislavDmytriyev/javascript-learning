// const weight = prompt("Enter your weight in KG, devide with dot");
// const height = prompt("Enter your height in M, devide with dot");

const calculateBMI = function (weight, height) {
    const w = Number(weight.replace(",","."));
    const h = Number(height.replace(",","."));
    const heightPow = Math.pow(h, 2);

return w / heightPow;

    }

    const bmi = calculateBMI ("80.9", "1,80");
    console.log("Your BMI is: " , bmi);

  
    