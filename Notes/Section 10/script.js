'use strict';
/*
//Default Parameters 
const bookings = [];

const createBooking = function (flightNum, numPassengers = 1, price = 199 * numPassengers) {

    //ES5
    //numPassengers = numPassengers || 1;
    //price = price || 199;

    const booking = {
        flightNum,
        numPassengers,
        price
    }
    console.log(booking);
    bookings.push(booking);
}

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 5);

createBooking('LH123', undefined, 8000); 

//How Passing Arguments Works: Value vs. Reference
const flight = 'LH123';
const harshit = {
    name: 'Harshit Aditya',
    passport: 65464645456,
}

const checkIn = function (flightNum, passenger) {
    flightNum = 'LH147';
    passenger.name = 'Mr ' + passenger.name;
    if (passenger.passport === 65464645456) {
        alert('Checked in');
    } else {
        alert('Security check failed');
    }
}

//checkIn(flight, harshit);
//console.log(flight);
//console.log(harshit);

//const flightNum = flight;
//const passenger = harshit;

const newPassport = function (person) {
    person.passport = Math.trunc(Math.random() * 100000000);
};

newPassport(harshit);
checkIn(flight, harshit); 


//Functions accepting callback Functions  

const oneWord = function (str) {
    return str.replace(/ /g, '').toLowerCase();
}

const upperFirstWord = function (str) {
    const [first, ...others] = str.split(' ');
    return [first.toUpperCase(), ...others].join(' ');
};

// Higher-order function
const transformer = function (str, fn) {
    console.log(`Original string: ${str}`);
    console.log(`Transformed string: ${fn(str)}`);
    console.log(`Transformed by: ${fn.name}`);
};

transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord);

//JavaScript uses callbacks all the time
const high5 = function () {
    console.log('👋')
};

document.body.addEventListener('click', high5); 



const greet = function (greeting) {
    return function (name) {
        console.log(`${greeting} ${name}`);
    };
};

const greeterHey = greet('Hey');
greeterHey('Harshit');
greeterHey('Steven');

greet('Hello')('Jonas');

const greetArr = (greeting) => (name) => console.log(`${greeting} ${name}`);
greetArr('Hey')('Harshit');


//The call and apply Methods 

const lufthansa = {
    airline: 'Lufthansa',
    iataCode: 'LH',
    bookings: [],
    //book: function () {} 
    book(flightNum, name) {
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode} ${flightNum}`);
        this.bookings.push({ flight: `${this.iataCode} ${flightNum}`, name });
    },
};

lufthansa.book(239, 'Harshit Aditya');
console.log(lufthansa);

const eurowings = {
    airline: 'Eurowings',
    iataCode: 'EW',
    bookings: [],
};

const book = lufthansa.book;

// Does NOT work
//book(23, 'Sarah Williams'); 

book.call(eurowings, 23, 'Sarah Williams');
console.log(eurowings);

book.call(lufthansa, 239, 'Lolo');
console.log(lufthansa);

const swiss = {
    airline: 'Swiss Air Lines',
    iataCode: 'LX',
    bookings: [],
}

book.call(swiss, 23, 'Lolo');

//Aplly method 
const flightData = [583, 'Geoge Rorgers'];
book.apply(swiss, flightData);
console.log(swiss);

book.call(swiss, ...flightData);

//Bind method 
const bookEW = book.bind(eurowings);
bookEW(23, 'Sarah Williams');
bookEW(24, 'MARTHA');

//With Event Listeners 
lufthansa.planes = 300;
lufthansa.buyPLane = function () {
    console.log(this);
    this.planes++;
    console.log(this.planes);
};
document.querySelector('.buy').addEventListener('click', lufthansa.buyPLane.bind(lufthansa));

//Partial Application 
const addTax = (rate, value) => value + (value * rate);
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
console.log(addVAT(100));
console.log(addVAT(23));

const addTaxRate = function (rate) {
    return function (value) {
        return value + (value * rate);
    };
}

const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));
console.log(addVAT2(23));  

//Coding Challenge 1
const poll = {
    question: 'What is your favorite programming language?',
    options: ['0: JavaScript', '1: Python', '2: Rust', '3:C++'],
    answer: new Array(4).fill(0),
    regidterNewAnswer() {
        const answer = prompt(`${this.question}\n${this.options.join('\n')} 
        \n(Write option numbers)`
        );
        console.log(answer);

        //Register Answer 
        typeof answer === 'number' && answer < this.answer.length && this.answer[answer]++;
        this.displayResults();
        this.displayResults('string');
    },
    displayResults(type = 'array') {
        if (type === 'array') {
            console.log(this.answer);
        } else if (type === 'string') {
            console.log(`Pool results are ${this.answer.join(', ')}`)
        }
    }
};

document.querySelector('.poll').addEventListener('click', poll.regidterNewAnswer.bind(poll));

poll.displayResults.call({ answer: [5, 2, 3] }, 'string');

poll.displayResults.call({ answer: [1, 9, 6, 5, 2, 3] }, 'string'); 


// Immediately Invoked Function Expressions (IIFE) 

const runOnce = function () {
    console.log('This will never run again');
};

runOnce();

(function () {
    console.log('This will never run again');
    const isPrivate = 23;
})();

//console.log(isPrivate);

(() => console.log('This will never run again'))();
{
    const isPrivate = 23;
    var notPrivate = 46;
}
console.log(notPrivate);  

//Closures
const secureBooking = function () {
    let passengerCount = 0;
    return function () {
        passengerCount++;
        console.log(`${passengerCount} passengers `);
    }
}

const booker = secureBooking();

booker();
booker();
booker();

console.dir(booker); 


//More Clousers exaples
let f;

const g = function () {
    const a = 23;
    f = function () {
        console.log(a * 2);
    }
}

const h = function () {
    const b = 777;
    f = function () {
        console.log(b * 2);
    }
}

g();
f();
console.log(f);
//Re-assigning f function 
h();
f();
console.log(f);

//Example 2 
const boardPassengers = function (n, wait) {
    const perGroup = n / 3;
    setTimeout(function () {
        console.log(`We are now boarding all ${n} passengers`);
        console.log(`There are 3 groups, each with ${perGroup} passengers per group`);
    }, wait * 1000);
    console.log(`Will start boarding in ${wait} seconds`);
};

const perGroup = 1000;
boardPassengers(180, 3); 
*/

//Coding Challenge 2 
(function () {
    const header = document.querySelector('h1');
    header.style.color = 'red';

    document.querySelector('body').addEventListener('click', function () {
        header.style.color = 'blue';
    })
})();