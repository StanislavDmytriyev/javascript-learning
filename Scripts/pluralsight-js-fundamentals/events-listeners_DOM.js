const header = document.getElementById("message");
header.style.color = "red";
header.style.fontWeight = "300";

const button = document.getElementById("buttonTest");
button.addEventListener("click", function () {
  console.log("click");
  const review = document.getElementById("review");
  //we'll make it toggle now
  if (review.classList.contains("d__none")) {
    review.classList.remove("d__none");
    button.textContent = "CLOSE REVIEW";
  } else {
    review.classList.add("d__none");
    button.textContent = "SEE REVIEW";
  }
});

function showMessage(message) {
  document.getElementById("message").textContent = message;
}
