function filterArray(numbers, value) {
  // Change code below this line

  const filtered = [];

  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] >= value) {
      filtered.push(numbers[i]);
    }
  }

  console.log(filtered);
  return filtered;

  // Change code above this line
}

filterArray([5, 10, 20, 30, 5, 7, 11], 10);
filterArray([5, 10, 20, 30, 5, 7, 11], 14);
