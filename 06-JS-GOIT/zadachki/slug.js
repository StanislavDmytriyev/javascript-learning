function slugify(title) {
  // Change code below this line
  // Change code above this line
  console.log(title);

  const titleToArray = title.toLowerCase().split(" ");
  console.log(titleToArray);
  const slug = titleToArray.join("-");
  console.log(slug);
  return slug;
}

slugify("Hello this Is my article");
