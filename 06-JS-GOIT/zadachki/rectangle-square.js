function calculateRectangleSquare (dimensionsString) {
    const dimensionsArray = dimensionsString.split(" ")
    console.log(dimensionsArray);
    const square = dimensionsArray[0] * dimensionsArray[1];
    console.log(square);
    return square;
}

calculateRectangleSquare("20 30");

