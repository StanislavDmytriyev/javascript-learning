function calculateEngravingPrice(message, pricePerWord) {
  // Change code below this line
  let words = message.split(" ");
  console.log(words.length);
  console.log(typeof words.length);

  let engravingPrice = words.length * pricePerWord;

  console.log("engraving price: ", engravingPrice);

  // Change code above this line
}

calculateEngravingPrice("hello world", 10);
