'use strict';
//Testing Strict Mode
/* 
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('You are allowed to drive'); 
*/

//Functions 
function logger() {
    console.log('Hello JavaScript');
}

// Calling / running / invoking function 
logger();
logger();
logger();

function foodProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges`;
    return juice;
}

const orangeJuice = foodProcessor(2, 3);
console.log(orangeJuice);

const appleJuice = foodProcessor(4, 5);
console.log(appleJuice);

const num = Number('27');
console.log(num);

//Functions declerations vs expressions 

//Function decleration
function calcAge1(birthYear) {
    return 2021 - birthYear;
}

const age = calcAge1(2003);
console.log(`My age is ${age}`);

//Function expression
const calcAge2 = function (birthYear) {
    return 2021 - birthYear;
}

const age1 = calcAge2(2003);

console.log(age, age1);

//Arrow functions
const calcAge3 = birthYear => 2021 - birthYear;
const age2 = calcAge3(2003);
console.log(age2);

const yearsUntilRetirement = birthYear => {
    const age4 = 2021 - birthYear;
    const retirement = 65 - age4;
    return retirement;
}

const retire = yearsUntilRetirement(2003);
console.log(retire);




















