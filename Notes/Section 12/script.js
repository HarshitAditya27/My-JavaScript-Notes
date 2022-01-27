'use strict';
/////////////////////////////////////////////////
/////////////////////////////////////////////////

// LECTURES
/*
//Converting and Checking Numeber
console.log(23 === 23.0);
console.log(0.1 + 0.2 === 0.3);

//Conversion
console.log(Number('23'));
console.log(+'23');

//Parsing 
console.log(Number.parseInt('30px'));
console.log(Number.parseInt('e23'));

console.log(Number.parseInt('2.5rem'))
console.log(Number.parseFloat('   2.5rem'))

//console.log(Number.parseFloat('   2.5rem   '))

console.log(Number.isNaN(20))
console.log(Number.isNaN('20'))
console.log(Number.isNaN(+'20X'))
console.log(Number.isNaN(20 / 0));

//Checking if a value is a number 
console.log(Number.isFinite(20));
console.log(Number.isFinite('20'));
console.log(Number.isFinite(+'20X'));
console.log(Number.isFinite(23 / 0));

console.log(Number.isInteger(23));
console.log(Number.isInteger(23.0)); 


//Math and Rounding
console.log(Math.sqrt(25))
console.log(25 ** (1 / 2));
console.log(8 ** (1 / 3));

console.log(Math.max(5, 18, 23, 11, 2));
console.log(Math.max(5, 18, '23', 11, 2));
console.log(Math.max(5, 18, '23px', 11, 2))

console.log(Math.min(5, 18, 23, 11, 2));
console.log(Math.PI * Number.parseFloat('10px') ** 2);

console.log(Math.trunc(Math.random() * 6) + 1);

const randomInt = (min, max) => Math.floor(Math.random() * (max - min) + 1);
// 0...1->0...(max-min) -> min...max 
//console.log(randomInt(10, 20)); 

//Rounding integers 
console.log(Math.trunc(23.3));

console.log(Math.round(23.3));
console.log(Math.round(23.9));

console.log(Math.ceil(23.3));
console.log(Math.ceil(23.9));

console.log(Math.floor(23.3));
console.log(Math.floor(23.9));

console.log(Math.trunc(-23.3));
console.log(Math.floor(-23.9));

// Rounding decimals 
console.log((2.7).toFixed(0));
console.log((2.7).toFixed(3));
console.log((2.345).toFixed(2));
console.log(+(2.345).toFixed(2)); 
 

//The Remainder Operator 
console.log(5 % 2);
console.log(5 / 2);

console.log(6 % 2);
console.log(6 / 2);

console.log(8 % 3);
console.log(8 / 3);

console.log(7 % 2);
console.log(7 / 2);

const isEven = num => num % 2 === 0;
console.log(isEven(5));
console.log(isEven(6));
console.log(isEven(7124));
labelBalance.addEventListener('click', function () {
  [...document.querySelectorAll('.movements_row')].forEach(function (row, i) {
    if (i % 2 === 0) row.style.backgroundColor = 'orangered';
    //0,3,6,9 
    if (i % 3 === 0) row.style.backgroundColor = 'blue';
  });
}); 


// Numeric Seperator
const diameter = 287_460_000_000;
console.log(diameter);

const price = 345_99;
console.log(price);

const tran

const PI = 3.14;
console.log(PI);

console.log(Number('230_000')); 


//Working with blight
console.log(2 ** 53 - 1);
console.log(Number.MAX_SAFE_INTEGER);
console.log(2 ** 53 + 1);
console.log(2 ** 53 + 2);
console.log(2 ** 53 + 3);
console.log(2 ** 53 + 4);

console.log(65464678979654657465465465465465656n);
console.log(BigInt(456321));

//Operations 
console.log(10000n + 10000n);
console.log(10000n * 10000n);

const huge = 203242345632462436n;
const num = 23;
console.log(huge * BigInt(num));

//Exceptions
console.log(20n > 15);
console.log(20n === 20);
console.log(typeof 20n);
console.log(20n == 20);

console.log(huge + ' is Really BIG')

//Divisions 
console.log(11n / 3n);
console.log(10 / 3); 


//Creating Dates 

//Create a date  

const now = new Date();
console.log(now);

console.log(new Date('Aug 01 2020 18:05:41'));
console.log(new Date('December 17, 2021'));
console.log(new Date(account1.movementsDates[0]));

console.log(new Date(2037, 10, 19, 15, 23, 5));
console.log(new Date(2037, 10, 31));

console.log(new Date(0));
console.log(new Date(3 * 23 * 60 * 60 * 1000));
 
//Working with dates 
const future = new Date(2037, 10, 19, 15, 23);
console.log(future);
console.log(future.getFullYear());
console.log(future.getMonth());
console.log(future.getDate());
console.log(future.getDay());
console.log(future.getHours());
console.log(future.getMinutes());
console.log(future.getSeconds());

console.log(new Date(202256980000))

console.log(Date.now());

future.setFullYear(2040);
console.log(future); 


//Operations with dates
const future = new Date(2037, 10, 19, 15, 23);
console.log(+future);

const calcDaysPassed = (date1, date2) => (date2 - date1) / (1000 * 60 * 60 * 24);

const days1 = calcDaysPassed(
  new Date(2037, 3, 4),
  new Date(2037, 3, 14, 10, 8)
);
console.log(days1);  


//Intenationalizing Dates

const num = 3884764.23;

const options = {
  style: 'unit',
  unit: 'celsius',
}

console.log('US: ', new Intl.NumberFormat('en-US', options).format(num));
console.log('Germany: ', new Intl.NumberFormat('de-DE', options).format(num));
console.log('France: ', new Intl.NumberFormat('fr-FR', options).format(num));
console.log('Spain: ', new Intl.NumberFormat('es-ES', options).format(num));
console.log('Syria: ', new Intl.NumberFormat('ar-SY', options).format(num));
console.log(
  navigator.language,
  new Intl.NumberFormat(navigator.language).format(num)
); 
*/

//setTimeout
const ingredients = ['olives', 'spinach']
const pizzaTimer = setTimeout(
  (ing1, ing2) => console.log(`Here is your pizza with ${ing1} anf ${ing2}`), 3000,
  ...ingredients
);
console.log('Waiting...');
if (ingredients.includes('spinach')) clearTimeout(pizzaTimer);

//setInterval
setInterval(function () {
  const now = new Date();
  console.log(now);
}, 1000);