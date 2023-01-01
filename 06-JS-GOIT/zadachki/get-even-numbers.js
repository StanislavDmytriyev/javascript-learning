function getEvenNumbers(start, end) {
  // Change code below this line
  const evenNumbersArray = [];
  for (let i = start; i <= end; i += 1) {
    if (i % 2 === 0) {
      evenNumbersArray.push(i);
    }
  }
  console.log(evenNumbersArray);
  return evenNumbersArray;
  // Change code above this line
}

// getEvenNumbers(5, 50);

function includes(array, value) {
  // Change code below this line

  let result;

  for (let i of array) {
    if (i === value) {
      result = true;
    } else {
      result = false;
    }

    return result;

    // Change code above this line
  }
}
