function findLongestWord(string) {
  // Change code below this line

  let stringToArray = string.split(" ");

  let currentMaxLength = 0;

  let longestWord;

  for (let i = 0; i < stringToArray.length; i += 1) {
    if (stringToArray[i].length > currentMaxLength) {
      currentMaxLength = stringToArray[i].length;
      longestWord = stringToArray[i];
    }
  }
  return longestWord;

  // Change code above this line
}
