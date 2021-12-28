/*
let js = 'amazing';
if (js === 'amazing')
    alert('JavaScript is amazing!');
console.log(4 + 8 + 22 - 10);
let firstName = 'Harshit';
let lastName = 'Aditya';
console.log(firstName);
console.log(firstName);
console.log(firstName);

//variable name convensions
let harshit = "React lover";
let $function = 27;

console.log(harshit);
console.log($function);

let country = 'India';
let continent = 'Asia';
let population = '1.4 Billion';
console.log(country);
console.log(continent);
console.log(population);

let javaScript = true;
console.log(javaScript);
console.log(typeof true);
console.log(typeof javaScript);
console.log(typeof 'Harshit');
console.log(typeof 27);
let aditya;
console.log(aditya);
console.log(typeof aditya);
aditya = 2021
console.log(aditya);
console.log(typeof aditya);
console.log(typeof null);


const age = 2027;
const ageHA = age - 2003;
const ageAD = age - 2001;
console.log(ageHA, ageAD);
console.log(ageHA * 2, ageAD / 10, 2 ** 4);

//2**4 means 2 to the power of 4 
const firstName = 'Harshit';
const lastName = 'Aditya';
console.log(firstName + ' ' + lastName); //concatination 

//Assignment operators
let x = 10 + 5;// 15 
x += 10;// x = x + 10; 
x *= 4;// x = x * 4; 
x++;// x = x + 1;
x--;
x--;
console.log(x);

//Comparison operators
console.log(ageHA < ageAD); // >, <, >=, <= 
console.log(ageHA > 20);
console.log(age - 1991 > now - 2019); 

const age = 2027;
const ageHA = age - 2003;
const ageAD = age - 2001;

console.log(age - 1991 > age - 2019);

const averageAge = (ageHA + ageAD) / 2;
console.log(ageHA, ageAD, averageAge); 


//Strings 
const firstName = 'Harshit';
const job = "Developer";
const birthYear = 2003;
const year = 2021;

const harshit = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + "!";
console.log(harshit);

const harshitNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(harshitNew);

console.log(`Just a regular string... `);

console.log(`String with \n\ multiple \n\ lines`);

console.log(`String 
With 
Multilpe 
Lines`); 


//if/else statements 

const age = 10;
const isOldEnough = age >= 18;

if (isOldEnough) {
    console.log('You are elgiblie for a driving license');
}
else {
    console.log('You are not elgiblie for a driving license!');
    const yearleft = 18 - age;
    console.log(`You have ${yearleft} years left to get a driving license`);
}

const birthYear = 2003;
let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);


//Type Conversion 

const intputYear = '2021';
console.log(Number(intputYear), intputYear);
console.log(Number(intputYear) + 1);
console.log(typeof NaN);
console.log(String(22), 22);

//Type corection 
console.log('I am ' + 18 + ' years old');
console.log('23' - '10' - 3);
console.log('23' / '2');

let n = '1' + 1;
n = n - 1;
console.log(n);


//5  falsy values: 0, '', null, undefined, NaN 

console.log(Boolean(0));
console.log(Boolean(''));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean({}));
console.log(Boolean('Harshit'));

const money = 10;
if (money) {
    console.log('Dont spend it alll');
}
else {
    console.log('You should get a job.');
}

let height = 0;
if (height) {
    console.log('You are tall enough');
} else {
    console.log('You are not tall enough');
}

const age = 18;
if (age === 18) {
    console.log('I am now an adult');
}

const num = prompt("What's your num?");
if (num == 7) {
    console.log("Thats Awersome");
}
else if (num == 3) {
    console.log("Thats great");
}
else {
    console.log("Ok");
}
if (num !== 7) console.log("Call 007");


const hasDrivenLicense = true;
const hasGoodVision = false;
console.log(hasDrivenLicense && hasGoodVision);
console.log(hasDrivenLicense || hasGoodVision);
console.log(!hasDrivenLicense);

const shouldDrive = hasDrivenLicense && hasGoodVision

if (shouldDrive) {
    console.log('You can drive');
} else {
    console.log('You cannot drive');
}

const isTired = true;
console.log(hasDrivenLicense && hasGoodVision && isTired);
if (hasDrivenLicense && hasGoodVision && isTired) {
    console.log('You can drive');
} else {
    console.log('You cannot drive');
}

//Switch Statements
const day = 'thursday';

switch (day) {
    case 'monday':
        console.log('Padhai Time');
        break;
    case 'tuesday':
        console.log('Study UX');
        break;
    case 'wednesday':
        console.log('Study JavaScript');
        break;
    case 'thursday':
    case 'friday':
        console.log('Study React');
        break;
    case 'satuday':
    case 'sunday':
        console.log('Learn about APIs')
        break;
    default:
        console.log('I dont know what to do');

}

const me = 'Harshit';
console.log(`I'm ${me}, a ${2021 - 2003} old Web Developer`);


const age = 19;
const play = age >= 18 ? 'I will play Spider Man in PS5' : 'I will play hide and seak ';
console.log(play);

let anotherplay;
if (age >= 18) {
    anotherplay = 'I will play Spider Man in PS5';
}
else {
    anotherplay = 'I will play hide and seak';
}
console.log(anotherplay);
*/


const bill = 430;
const tip = (bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.2;
const totalbill = bill + tip;
console.log(`The bill was ${bill}, the tip is ${tip}, and the total is ${totalbill}`);

/* 
Data 1: The bill was 275, the tip is 41.25, and the total is 316.25. 
Data 2: The bill was 40, the tip is 8, and the total is 48. 
Data 3: The bill was 430, the tip is 86, and the total is 516.
*/









































