const loopThroughArrayFunction = function (someArray) {
    for (let i = 0; i < someArray.length; i += 1) {
        console.log(`${i + 1} - ${someArray[i]}`)
    }
}


const arrayOutput = loopThroughArrayFunction(["asdas", "12312312", "✌✌✌", "🐱‍👤😢😜👌"]);

const arrayOutputFromString = loopThroughArrayFunction("afghsajkgfkjhtk".split(""));