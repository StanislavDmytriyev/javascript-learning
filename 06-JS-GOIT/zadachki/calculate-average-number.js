const myArray = [1,2,44,88,123,44,15,1,0,98,9,8];

function calculateAverage (someArray) {
    let sum = 0;
    for (let number of someArray) {
    sum += number;
    }
    const result = sum / someArray.length;
    return result;
}

console.log(calculateAverage(myArray));
console.log(calculateAverage([1,2,3,4]));

// We have a pseudoarray of function's arguments, let's use it

function calculateAverageArgument () {
    let sum = 0;
    for (let arg of arguments) {
        sum += arg;
    }
    console.log(sum)
    console.log(arguments.length)
    return sum / arguments.length;
}

console.log(calculateAverageArgument(1,3,5,8,4,6,9,3,2,11))