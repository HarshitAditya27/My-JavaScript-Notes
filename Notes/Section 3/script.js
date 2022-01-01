'use strict';
//Testing Strict Mode
/* 
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('You are allowed to drive'); 


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


function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
    const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges`;
    return juice;
}

console.log(fruitProcessor(2, 3));


const calcAge = function (birthYear) {
    return 2021 - birthYear;
}

const yearsUntilRetirement = function (birthYear, name) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;
    if (retirement > 0) {
        console.log(`${name} will retire in ${retirement} years`);
        return retirement;

    } else {
        console.log(`${name} is already retired`);
        return -1;
    }
}
console.log(yearsUntilRetirement(2003, 'Harshit'));


//Arrays 
const friend1 = 'Michelle';
const friend2 = 'Ned';
const friend3 = 'Eddie';

const friends = ['Michelle', 'Ned', 'Eddie'];
console.log(friends);

const years = new Array(2003, 2000, 2001);
console.log(friends[0]);
console.log(friends[2]);
console.log(friends.length);
console.log(friends[friends.length - 2]);
friends[2] = 'Peter Parker';
console.log(friends);

const firstnName = 'Harshit';
const harshit = [firstnName, 'Aditya', 2022 - 2003, 'student devloper', friends];
console.log(harshit);
console.log(harshit.length);

const calcAge = birthYear => 2021 - birthYear;
const birthYears = [2003, 2000, 2001, 1999, 2002];
const age1 = calcAge(birthYears[0]);
const age2 = calcAge(birthYears[1]);
const age3 = calcAge(birthYears[birthYears.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(birthYears[0]), calcAge(birthYears[1]), calcAge(birthYears[birthYears.length - 1])];
console.log(ages);


//Array Methods 
const friends = ['Michelle', 'Ned', 'Eddie'];
friends.push('Peter Parker'); //adds to the end of the array 
console.log(friends);

friends.unshift('Harshit'); //adds to the beginning of the array 
console.log(friends);

//Remove elements 
const popped = friends.pop(); //removes the last element 
friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); //removes the first element 
console.log(friends);
console.log(friends.indexOf('Ned')); //returns the index of the element 
console.log(friends.includes('Ned'));
console.log(friends.includes('Eddie'));

if (friends.includes('Peter Parker')) {
    console.log('Peter Parker is your friend');
} else {
    console.log('The real name of Spider Man is .... The real name of Spider Man is Peter Parker !');
}


const harshitArray = [
    'Harshit',
    'Aditya',
    2022 - 2003,
    'student',
    ['Michelle', 'Ned', 'Eddie']
];
//Objects
const harshit = {
    firstNmae: 'Harshit',
    secondName: 'Aditya',
    age: 2022 - 2003,
    job: 'studnet',
    friends: ['Michelle', 'Ned', 'Eddie']
}; 

//Dot Vs Bracket Notation
const harshit = {
    firstName: 'Harshit',
    secondName: 'Aditya',
    age: 2022 - 2003,
    job: 'studnet',
    friends: ['Michelle', 'Ned', 'Eddie']
};
console.log(harshit);
console.log(harshit.secondName);
console.log(harshit['secondName']);

const nameKey = 'Name';
console.log(harshit['first' + nameKey]);
console.log(harshit['second' + nameKey]);

//const intrestedIn = prompt('What do you want to know about me? Choose between firstName, lastName, age, job, friends');
//console.log(harshit[intrestedIn]);

harshit.location = 'Ranchi'
harshit['Twitter'] = '@harshitaditya1';
console.log(harshit);

console.log(`${harshit.firstName} has ${harshit.friends.length} friends, and his best friend is ${harshit.friends[2]}`); 


//Objects Methods 
const harshit = {
    firstName: 'Harshit',
    secondName: 'Aditya',
    birthYear: 2003,
    job: 'studnet',
    friends: ['Michelle', 'Ned', 'Eddie'],
    hasDriversLicense: true,
    //calcAge: function (birthYear) {
    //  return 2022 - birthYear;
    // } 
    //calcAge: function () {
    //  console.log(this);
    // return 2022 - this.birthYear;
    //} 
    calcAge: function () {
        this.age = 2022 - this.birthYear;
        return this.age;
    },
    getSummary: function () {
        return `${harshit.firstName} is a ${harshit.age} year old ${harshit.job} and he has ${(this.hasDriversLicense) ? 'a' : 'no'} drivers license`;
    }
};

//console.log(harshit.calcAge(2003)); 
//console.log(harshit['calcAge'](2003)); 

console.log(harshit.calcAge());
console.log(harshit.age);

console.log(harshit.getSummary());
*/

