function slugify(title) {
  const titleToArray = title.toLowerCase().split(" ");
  console.log(titleToArray);
  const slug = titleToArray.join("-");
  console.log(slug);
  return slug;
}

slugify("Hello this Is my article");

function slugifyChaining(title) {
  const slug1 = title.toLowerCase().split(" ").join("-");
  console.log(slug1);
  return slug1;
}

slugifyChaining("Hello this is my chaining slugify method");

const slugFunction = function (someArray) {
  return someArray.toLowerCase().split(" ").join("-");
};

console.log(
  slugFunction("hello THIS wILL BE my test SLUG STRING VIA FUNCTION")
);
