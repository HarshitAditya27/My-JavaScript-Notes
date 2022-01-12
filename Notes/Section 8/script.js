'use strict';
/* 
function calcAge(birthYear) {
    const age = 2022 - birthYear;

    function printAge() {
        let output = `You are ${age}, birth year ${birthYear}`;
        console.log(output);
        if (birthYear >= 2000 && birthYear <= 2005) {
            var millenial = true;
            // Creating NEW variable with same name as other scope's variable.
            const firstName = 'Aditya';
            //Reassigning outer scope's variable
            const str = `Oh, and you are a millenial, ${firstName}`;
            console.log(str);

            function add(a, b) {
                return a + b;
            }
            output = 'NEW OUTPUT'
        }
        console.log(millenial);
        console.log(output);
    }
    printAge();
    return age;
}

const firstName = 'Harshit';
calcAge(2003); 

//Hoisting 

//Variables
console.log(me);
//console.log(job);
//console.log(year);
var me = 'Harshit';
var job = 'Software Engineer';
var year = 2003;

// Functions 
console.log(addDeclaration(1, 2));
//console.log(addArrow(1, 2));
//console.log(addExpression(1, 2));


function addDeclaration(a, b) {
    return a + b;
}

const addExpression = function (a, b) {
    return a + b;
}

var addArrow = (a, b) => a + b;

// Example 
if (!numProducts) deleteShoppingCart();
var numProducts = 10;

function deleteShoppingCart() {
    console.log('Shopping cart is empty');
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z); 

//This
console.log(this);

const calcAge = function (birthYear) {
    console.log(2022 - birthYear);
    console.log(this);
}

calcAge(2003);

const calcAgeArr = (birthYear) => {
    console.log(2022 - birthYear);
    console.log(this);
}

calcAgeArr(2003);

const harshit = {
    year: 2003,
    calcAge: function () {
        console.log(this);
        console.log(2022 - this.year);
    },
};
harshit.calcAge();

const matilda = {
    year: 2017,
};

matilda.calcAge = harshit.calcAge;
matilda.calcAge();

const f = harshit.calcAge; 
f(); 


//Regular Function Vs Arrow Function 

var firstName = 'Aditya';
const harshit = {
    firstName: 'Harshit',
    year: 2003,
    calcAge: function () {
        //console.log(this);
        console.log(2022 - this.year);

        //Solution 1

        //const self = this;
        //const isMillenial = function () {
        // console.log(self);
        //  console.log(self.year >= 2000 && self.year <= 2005);
        //console.log(this.year >= 2000 && this.year <= 2005);
        //}; 

        //Solution 2
        const isMillenial = () => {
            console.log(this);
            console.log(this.year >= 2000 && this.year <= 2005);
            //console.log(this.year >= 2000 && this.year <= 2005);
        };
        isMillenial();
    },
    greet: () => {
        console.log(this);
        console.log(`Hello, ${this.firstName}`);
    },
};
harshit.greet();
harshit.calcAge();

//Arguments Keyword 

const addExpr = function (a, b) {
    console.log(arguments);
    return a + b;
}

addExpr(1, 2);
addExpr(2, 5, 8, 12);

var addArrow = (a, b) => {
    console.log(arguments);
    return a + b;
};

addArrow(2, 5, 8);  


//Primitive Vs Objects 

let age = 18;
let oldAge = age;
age = 19;
console.log(age);
console.log(oldAge);

const me = {
    name: 'Harshit',
    age: 19,
};

const friend = me;
friend.age = 20;
console.log('Friend', friend);
console.log('Me', me); 
*/

let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);

const jessica = {
    name: 'Jessica',
    lastName: 'Williams',
    age: 27,
}

const marrriedJessica = jessica;
marrriedJessica.lastName = 'Davis';
console.log('Before marriage:', jessica);
console.log('After marriage:', marrriedJessica);

const jessica2 = {
    name: 'Jessica',
    lastName: 'Williams',
    age: 27,
    family: ['Alice', 'Bib']
};

const jessicaCopy = Object.assign({}, jessica2)
jessicaCopy.lastName = 'Davis';

jessicaCopy.family.push('Hulu');
jessicaCopy.family.push('Roku');

console.log('Before marriage:', jessica2);
console.log('After marriage:', jessicaCopy);

