//CASE STATEMENT
function simpleSwitch() {
  let productID = 2;
  switch (productID) {
    case 1:
      console.log("Product 1");
      break;
    case 2:
      console.log("Product 2");
      break;
    default:
      console.log("Unknown Product");
      break;
  }
}

//MULTIPLE CASE STATEMENTS
function multipleCase() {
  let color = "Red";

  switch (color) {
    case "Red":
    //Can add curly braces to make the case - a block
    case "Pink": {
      console.log("This color is red");
      break;
    }
    case "Blue":
    case "Light Blue":
    case "Dark Blue":
      console.log("This color is blue");
      break;
    case "Gray":
    case "Grey":
      console.log("This color is grey");
      break;
    default:
      console.log("This is unknown color");
      break;
  }
}

//FOR IN STATEMENT (FOR IN LOOP)
function forInSample() {
  let product = {
    productID: 680,
    name: "HL Road Frame - Black, 58",
    productNumber: "FR-R92B-58",
    color: "Black",
    standardCost: 1059.31,
    listPrice: 1431.5,
    calculateGrossProfit: function () {
      return this.listPrice - this.standardCost;
    },
  };
  for (const key in product) {
    console.log("'" + key + "' = " + product[key]);
  }
}

//FOR OF
let ForOfProducts = [
  {
    productID: 680,
    name: "HL Road Frame - Black, 58",
    productNumber: "FR-R92B-58",
    color: "Black",
    standardCost: 1059.31,
    listPrice: 1431.5,
  },
  {
    productID: 707,
    name: "Sport-100 Helmet, Red",
    productNumber: "HL-U509-R",
    color: "Red",
    standardCost: 13.08,
    listPrice: 34.99,
  },
  {
    productID: 709,
    name: "Mountain Bike Socks, M",
    productNumber: "SO-B909-M",
    color: "White",
    standardCost: 3.3963,
    listPrice: 9.5,
  },
];

let ForOfProducts2 = [
  {
    productID: 888,
    name: "888 -HL Road Frame - Black, 58",
    productNumber: "888 - FR-R92B-58",
    color: "888 - Black",
    standardCost: 888.88,
    listPrice: 888.77,
  },
  {
    productID: 999,
    name: "999 - Mountain Bike Socks, M",
    productNumber: "999 - SO-B909-M",
    color: "999 - White",
    standardCost: 999.99,
    listPrice: 999.88,
  },
];

function forOfSample() {
  for (const item of ForOfProducts) {
    console.log(JSON.stringify(item));
  }
}

//LOOP STRING
function loopStringSample() {
  let productName = "HL Road Frame - Black, 58";
  let letters = "";
  for (const char of productName) {
    letters += char;
  }
  console.log(letters);
}

//BREAK LOOP
function breakSample() {
  for (const item of ForOfProducts) {
    if (item.standardCost < 20) {
      break;
    }
    console.log(JSON.stringify(item));
  }
}

//CONTINUE LOOP
function continueSample() {
  for (const item of ForOfProducts) {
    if (item.standardCost > 1000) {
      continue;
    }
    console.log(JSON.stringify(item));
  }
}

//LABEL STATEMENT (GOTO) - DONT USE IT
function labelSample() {
  even: for (let index = 1; index <= 10; index++) {
    if (index % 2 == 1) {
      continue even;
    }
    console.log(index);
  }
}

//==========================================================MATH==================================================//
function mathSample() {
  let price = 200;
  let result = 0;
  console.log("price " + price.toString());

  result = price + 100;
  console.log("ADDITION: price + 100 = " + result.toString());

  result = price - 10;
  console.log("SUBTRACTION: price - 10 = " + result.toString());

  result = price * 2;
  console.log("MULTIPLICATION: price * 2 = " + result.toString());

  result = price / 2;
  console.log("DIVISION: price / 2 = " + result.toString());

  result = price ** 4;
  console.log("EXPONENTIATION: price ** 4 = " + result.toString());

  result = price % 3;
  console.log("MODULUS: price % 3 = " + result.toString());

  result = price++;
  console.log("result = price++ = " + result.toString());
  console.log("price = " + price.toString());
  result = ++price;
  console.log("result = ++price = " + result.toString());

  result = price--;
  console.log("result = price-- = " + result.toString());
  console.log("price = " + price.toString());
  result = --price;
  console.log("result = --price = " + result.toString());
}

// PLUS SIGN
function plusSignSample() {
  let price = 200;
  let stringValue = "100";
  let result = 0;
  console.log("price = " + price.toString());
  result = price + stringValue;
  console.log("result (number + stringValue) = " + result.toString());

  result = price + +stringValue;
  console.log("result (number + (+stringValue)) = " + result.toString());
}

// ASSIGNMENT
function assignmentSample() {
  let price = 200;
  console.log("price = " + price.toString());

  price += 100;
  console.log("ADDITION: price += 100 = " + price.toString());

  price -= 100;
  console.log("SUBTRACTION: price -= 100 = " + price.toString());

  price *= 2;
  console.log("MULTIPLICATION: price *= 2 = " + price.toString());

  price /= 2;
  console.log("DIVISION: price /= 2 = " + price.toString());

  price **= 3;
  console.log("EXPONENTIATION: price **= 3 = " + price.toString());

  price %= 3;
  console.log("MODULUS: price %= 3 = " + price.toString());
}

// COMPARISON
function comparisonSample() {
  let price = 200;
  let result = 0;
  console.log("price = " + price.toString());
  console.log("");

  console.log("price == price = " + (price == price).toString());

  result = price.toString();
  console.log(
    "price(number) == result(string) = " + (price == result).toString()
  );

  result = price;
  console.log(
    "price(number) === result(number) = " + (price === result).toString()
  );

  result = price.toString();
  console.log(
    "price(number) =+= result(string) = " + (price === result).toString()
  );

  result = 100;
  console.log("result = " + result.toString());
  console.log(
    "price(number) != result(number) = " + (price != result).toString()
  );

  result = price.toString();
  console.log(
    "price(number) !== result(string) = " + (price !== result).toString()
  );
  console.log("");

  console.log("GREATER THAN: price > 10 = " + (price > 10).toString());

  console.log(
    "GREATER THAN or EQUAL TO: price >= price = " + (price >= price).toString()
  );

  console.log("LESS THAN: price < 1500 = " + (price < 1500).toString());

  console.log(
    "LESS THAN or EQUAL TO: price <= price = " + (price <= price).toString()
  );

  result = price < 1500 ? "'less than 1500'" : "'Greater than 1500'";
  console.log("TERNARY = " + result);
}

// USE STRICT
function useStrict() {
  // "use strict"; //Comment this out to see the difference

  // cant use a variable without declaring it first
  result = 10;
  console.log(result);

  // cant use reserved words as variables
  let eval = 10;
  let arguments = "some args";

  // cant delete a variable
  delete result;

  // cant delete a function
  delete useStrict;
}

//==========================================================LOGICAL OPERATORS, SHORT CIRCUIT==================================================//
function trueFalseSample() {
  let price = 200;
  let color = "red";
  let result;

  console.log("Check for 'TRUE' values ");
  result = price > 10;
  console.log(result);

  if (price > 10) {
    console.log("Price is greater than 10");
  }

  if (price) {
    console.log("Price is not 0");
  }

  if (color) {
    console.log("color has some value");
  }

  console.log("");
  console.log("check for 'false' values");

  color = null;
  console.log("color == null = " + Boolean(color));

  color = "";
  console.log("color == '' = " + Boolean(color));

  color = undefined;
  console.log("color == undefined = " + Boolean(color));

  let value;
  console.log("let value = " + Boolean(value));

  value = 100 / "test";
  console.log("100 / 'test string' = " + Boolean(value));
}

function logicalSample() {
  let price = 200;

  if (price > 10 && price < 1600) {
    console.log("price is > 10 && < 1600 -> is true");
  }

  if (price > 10 && price < 200) {
    console.log("price is > 10 && < 200 -> is true");
  } else {
    console.log("price is > 10 && < 200 -> is false");
  }

  if (price > 10 || price < 1600) {
    console.log("price is > 10 || < 1600 -> is true");
  }

  if (price > 10 || price > 1600) {
    console.log("price is > 10 || > 1600 -> is true");
  }

  if (!(price < 10)) {
    console.log("!(price < 10) is true");
  }
}

function shortCircuitingAndSample() {
  let result;

  result = isColorRed("Black") && isGreaterThan1400(1400);

  function isColorRed(value) {
    console.log("In the isColorRed() function");
    return value === "Red";
  }

  function isGreaterThan1400(value) {
    console.log("In the isGreaterThan1400() function");
    return value > 1400;
  }
}

function shortCircuitingOrSample() {
  let result;

  console.log("");
  console.log("Calling isColorRed() first");

  result = isColorRed("Red") || isGreaterThan1400(200);

  console.log("");
  console.log("Calling isGreaterThan1400() first");
  result = isGreaterThan1400(200) || isColorRed("Black");

  function isColorRed(value) {
    console.log("In the isColorRed() function");
    return value === "Red";
  }

  function isGreaterThan1400(value) {
    console.log("In the isGreaterThan1400() function");
    return value > 1400;
  }
}

//==========================================================EXCEPTION HANDLING TRY CATCH FINALLY==================================================//
function simpleTryCatch() {
  let result;
  try {
    result = x / 10;
  } catch (error) {
    console.log(error.message);
  }
}

function finallyCatchSample() {
  let result;
  try {
    console.log("An error will occur...");
    result = x / 10;
    console.log("This line will never run.");
  } catch (error) {
    console.log("In the catch block: " + error.message);
  } finally {
    console.log("In the finally block");
  }
}

function finallySuccessSample() {
  let result;
  let x = 100;
  try {
    console.log("An error won't occur...");
    result = x / 10;
  } catch (error) {
    console.log("In the catch block: " + error.message);
  } finally {
    console.log("In the finally block");
  }
}

function throwACustomError() {
  try {
    attemptDivision();
  } catch (error) {
    console.log(error.message + " - Error Type: " + error.name);
  }

  function attemptDivision() {
    let result;
    try {
      result = x / 10;
    } catch (error) {
      throw {
        message:
          "In the attemptDivision() method the following error occured: " +
          error.message,
        name: "CustomError",
      };
    }
  }
}

// NOT WORKING :()
function handleError(error) {
  switch (error.name) {
    case "ReferenceError":
      console.log("Reference error " + error.message);
      break;

    case "RangeError":
      console.log("Range error " + error.message);
      break;

    case "TypeError":
      console.log("Type error " + error.message);
      break;

    case "URIError":
      console.log("URI error " + error.message);
      break;

    case "SyntaxError":
      console.log("Syntax error " + error.message);
      break;

    case "EvalError":
      console.log("Eval error " + error.message);
      break;

    default:
      console.log("Error Type: " + error.name + " - Message: " + error.message);
      break;
  }
}

// TYPE OF
function typeOfSample() {
  let product = ForOfProducts[0];
  let introDate = new Date();
  let strValue = new String();
  let isActive = false;
  let result;
  let value = null;

  console.log("ForOfProducts = " + typeof ForOfProducts);
  console.log("product = " + typeof product);
  console.log("product ID = " + typeof ForOfProducts.productID);
  console.log("product number = " + typeof ForOfProducts.productNumber);
  console.log("string value = " + typeof strValue);
  console.log("intro date = " + typeof introDate);
  console.log("is active = " + typeof isActive);
  console.log("value = " + typeof value);
  console.log("typeOfSample() = " + typeof typeOfSample);
}

function constructorSample() {
  let product = ForOfProducts[0];
  let introDate = new Date();
  let strValue = new String();
  let isActive = false;

  console.log("ForOfProducts = " + ForOfProducts.constructor.toString());
  console.log("product = " + product.constructor.toString());
  console.log(
    "product ID = " + ForOfProducts[0].productID.constructor.toString()
  );
  console.log(
    "product.productNumber = " +
      ForOfProducts[0].productNumber.constructor.toString()
  );
  console.log("intro date = " + introDate.constructor.toString());
  console.log("string value = " + strValue.constructor.toString());
  console.log("is active = " + isActive.constructor.toString());
  console.log(
    "constructorSample() = " + constructorSample.constructor.toString()
  );
}

function helperFunctionsSample() {
  let introDate = new Date();
  let result;
  let value = null;

  console.log("ForOfProducts is Array? = " + isArray(ForOfProducts));
  console.log("introDate is a Date? = " + isDate(introDate));

  console.log(
    "result = " + isNullorUndefined(result)
      ? "null/undefined"
      : "not null/undefined"
  );
  console.log(
    "value = " + isNullorUndefined(value)
      ? "null/undefined"
      : "not null/undefined"
  );

  function isArray(value) {
    return value.constructor.toString().indexOf("Array") > -1;
  }

  function isDate(value) {
    return value.constructor.toString().indexOf("Date") > -1;
  }

  function isNullorUndefined(value) {
    return value === null || value === undefined;
  }
}

function instanceOfSample() {
  let prod = new Product(680, "HL Road Frame - Black, 58", "FR-R92B-58");
  let dt = new Date();
  let name = new String("Product Name");
  let value = "A simple string";

  console.log(
    "prod instanceof Product = " + (prod instanceof Product).toString()
  );
  console.log(
    "prod instanceof Object = " + (prod instanceof Object).toString()
  );
  console.log("dt instanceof Date = " + (dt instanceof Date).toString());
  console.log("dt instanceof Object = " + (dt instanceof Object).toString());
  console.log(
    "name instanceof String = " + (name instanceof String).toString()
  );
  console.log(
    "value instanceof String = " + (value instanceof String).toString()
  );
  console.log(
    "value instanceof Object = " + (value instanceof Object).toString()
  );

  function Product(id, name, number) {
    this.productID = id;
    this.name = name;
    this.productNumber = number;
    this.color = "Black";
    this.standardCost = 10;
    this.listPrice = 30;
  }
}

// THIS GLOBAL SCOPE
("use strict"); // <---- THIS PERFORMANCE WILL DIFFER

console.log("Begin: global scope sample");
console.log(this.toString());
console.log("this === window = " + (this === window).toString());
console.log("End: global scope sample");
console.log("");

function functionScope() {
  console.log(this.toString());
  console.log("this === window = " + (this === window).toString());
  console.log("");
}

function eventHandler(ctl) {
  console.log(ctl.toString());
}

function objectLiteral() {
  let product = {
    productID: 600,
    name: "HL Road Frame - Black, 58",
    standardCost: 1059.31,
    listPrice: 1431.5,
    grossProfit: function () {
      return (this.listPrice - this.standardCost).toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
      });
    },
  };
  console.log(product.grossProfit());
}

function callAndApply() {
  let product = {
    productID: 600,
    name: "HL Road Frame - Black, 58",
    standardCost: 1059.31,
    listPrice: 1431.5,
    grossProfit: function () {
      return (this.listPrice - this.standardCost).toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
      });
    },
  };

  let prod2 = {
    standardCost: 500,
    listPrice: 850,
  };

  console.log(product.grossProfit.call(product));
  console.log(product.grossProfit.call(prod2));
  console.log("");
  console.log(product.grossProfit.apply(product));
  console.log(product.grossProfit.appply(prod2));
}

function Product(id, name, cost, price) {
  this.productID = id;
  this.name = name;
  this.standardCost = cost;
  this.listPrice = price;

  this.grossProfit = function () {
    return (this.listPrice - this.standardCost).toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };
}

function constructorFunctions() {
  let prod1 = new Product(680, "HL Road Frame - Black, 58", 1059.31, 1431.5);
  let prod2 = new Product(707, "Sport-100 Helmet, Red", 13.08, 34.99);

  console.log(prod1.grossProfit());
  console.log(prod2.grossProfit());
}

//SPREAD

function stringToArray() {
  let productNumber = "FR-R92B-58";
  let values = [...productNumber];
  console.log(values);
}

function copyArray() {
  let arr = [1, 2, 3];
  let arr2 = [...arr];

  arr2.push(4);
  arr2[0] = 99;

  console.log(arr);
  console.log(arr2);
}

function copyObjectArrays() {
  let diff = [...ForOfProducts];
  diff[0].productID = 999;
  console.log(ForOfProducts[0].productID);
  console.log(diff[0].productID);
}

function concatenateArray() {
  let allProducts = ForOfProducts.concat(ForOfProducts2);
  console.log(allProducts.length);

  let spProducts = [...ForOfProducts, ...ForOfProducts2];
  console.log(spProducts.length);
}

function spreadInConstructors() {
  let dt = new Date(2019, 10, 15);
  console.log(dt);

  let dateFields = [2019, 11, 15];
  dt = new Date(...dateFields);
  console.log(dt);
}

function multipleParams(arg1, arg2, arg3) {
  console.log(arg1);
  console.log(arg2);
  console.log(arg3);
  console.log("");
}

function spreadForFunctionArgs() {
  multipleParams(1, 2, 3);
  let args = [1, 2, 3];
  multipleParams(...args);
}

function objectLiterals() {
  let product = {
    productID: 680,
    name: "HL Road Frame - Black, 58",
    standardCost: 1059.31,
    listPrice: 1431.5,
  };

  let prod2 = { ...product };

  prod2.productID = 999;

  console.log(product);
  console.log(prod2);

  console.log("");
  console.log(product.productID);
  console.log(prod2.productID);
}
