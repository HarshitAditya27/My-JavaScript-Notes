//if
/*
const isUserLoggedIn = true;

if (isUserLoggedIn) {
}
console.log(typeof (2 == "2"));
//<, >, <=, >=, ==, !=, ===, !==

const score = 200;
if (score > 100) {
  let power = "fly";
  console.log(`User power: ${power}`);
}

console.log(`User power: ${power}`);
*/
/*
const balance = 1000;
//if (balance > 500) console.log("test");
//if (balance > 500) console.log("test"), console.log("test2"); Bad Practice
if (balance < 500) {
  console.log("Less than 500");
} else if (balance < 750) {
  console.log("less than 750");
} else if (balance < 900) {
  console.log("less then 900");
} else {
  console.log("less than 1200");
}
*/

const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if (userLoggedIn && debitCard && 2 == 2) {
  console.log("Allow to buy courses");
}

if (loggedInFromGoogle || loggedInFromEmail) {
  console.log("User logged in");
}

/*
switch (key) {
  case value:
    break;
  default:
    break;
}

*/
/*
const month = 3;

switch (month) {
  case 1:
    console.log("January");
    break;
  case 2:
    console.log("February");
    break;
  case 3:
    console.log("March");
  //break;
  case 4:
    console.log("April");
    break;
  default:
    console.log("Default case match");
    break;
}
*/

//Falsy values: false, 0, -0, BigInt On, "", null, undefined, NaN
//Truthy values: "0", 'false', " ", [], {}, function(){}
/* 
const userEmail = [];
if (userEmail.length === 0) {
  console.log("Array is empty");
}
*/
const emptyObj = {};
if (Object.keys(emptyObj).length === 0) {
  console.log("Object is empty");
}

//Nullish Coalescing Operator (??): null, undefined

let val1;
//val1 = 5 ?? 10;
//val1 = null ?? 10; //10
//val1 = undefined ?? 15; //15
val1 = null ?? 10 ?? 20; //10
console.log(val1);

//Terniary Operator
//condition ? true : false;

const iceTeaPrice = 100;
iceTeaPrice <= 80 ? console.log("Less than 80") : console.log("More than 80");
