// FUNCTION DECLARATION OR FUNCTION STATEMENT
function showMessage(message) {
  document.getElementById("message").textContent = message;
}

function changePercentOff(percentage) {
  document.getElementById("percentOff").textContent = percentage + "% OFF";
}

//FUNCTION EXPRESSION
let fn = function (message) {
  document.getElementById("message").textContent = message;
};
fn("hey hey hey");

//FUNCTION WITH RETURN
function getSecretCode(value) {
  let code = value * 43;
  return code;
}
console.log(getSecretCode(15));

changePercentOff(37);
