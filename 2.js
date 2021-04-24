/*
function longer() {
    console.log('My name is Harshit');
}
longer();
function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}
const applejuice = fruitProcessor(5, 0);
console.log(applejuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

function calcAge1(birthyear) {
    return 2037 - birthyear;
}
const by1 = calcAge1(2003);
console.log(by1);
//Arrow function
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(2003);
console.log(age3);

//Function calling another function
function cutFruitPieces(fruit) {
    return fruit * 4;
}


function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
    return juice;
}

// Arrays

const friend1 = 'Vedant';
const friend2 = 'Suyash';
const friend3 = 'Rounak';

const friends = ['Vedant', 'Suyash', 'Rounak'];
console.log(friends);

//Another Way of writing Arrays
const years = new Array(1991, 1984, 2008, 2020);
console.log(friends[0]);
console.log(friends.length);
console.log(friends[friends.length - 2]);
friends[2] = 'Ritesh';
console.log(friends);
const firstName = 'Harshit';
const harshit = [firstName, 'Aditya', 2037 - 1991, 'Student', friends];
console.log(harshit);
console.log(harshit.length);

//Exercise
const calcAge = function (birthyear) {
    return 2037 - birthyear;
}
const years4 = [1990, 1967, 2002, 2010, 2018];
calcAge(years4);
console.log(calcAge(years));

const age1 = calcAge(years4[0]);
const age2 = calcAge(years[1]);
const age33 = calcAge(years4[years4.length - 1]);
console.log(age1, age2, age3);
console ages = [calcAge(years4[0]), calcAge(years4[1]), calcAge(years4[years4.length - 1])];
console.log(ages);
*/
/*
//Basic array operations
const newfriends = ['Ritesh', 'Aditya', 'Sanket'];
const newlength = newfriends.push('Aniket');
console.log(newfriends);
console.log(newlength);
newfriends.unshift('John');
console.log(newfriends);
newfriends.pop();
const popped = newfriends.pop();
console.log(popped);
console.log(newfriends);

newfriends.shift();
console.log(newfriends);

console.log(newfriends.indexOf('Steven'));
console.log(newfriends.indexOf('Bob'));


console.log(newfriends.includes('Aditya'));
console.log(newfriends.includes('Bob'));

if (newfriends.includes('Ritesh')) {
    console.log('You have a friend called Steve');
}
*/
//Object 
/*
const harshitArray = [
    'Harshit',
    'Aditya',
    2021 - 2003,
    'Student',
    ['Ritesh', 'Aditya', 'Aniket']
];
*/
/*
const harshit = {
    firstName: 'Harshit',
    lastName: 'Aditya',
    age: 2021 - 2003,
    job: 'Student Developer',
    friends: ['Ritesh', 'Aditya', 'Aniket']
};
console.log(harshit);
console.log(harshit.lastName);
console.log(harshit['lastName']);
const interstedIn = prompt('What do you want to kn ow about Harshit? Choose between age,job and friends');
console.log(harshit[interstedIn]);
if (harshit[interstedIn]) {
    console.log(harshit[interstedIn]);
} else {
    console.log('Wrong request! choose between age,job and friends.')
}
harshit.location = 'Ranchi';
harshit['twitter'] = '@HarshitAditya1';
console.log(harshit);
*/
/*
const harshit = {
    firstName: 'Harshit',
    lastName: 'Aditya',
    birthYear: 2003,
    job: 'Student Developer',
    friends: ['Ritesh', 'Aditya', 'Aniket'],
    hasDriversLicense: true,
    calcAge: function (birthYear) {
        return 2037 - birthYear;
    }
};
console.log(harshit.calcAge(2003));
console.log(harshit['calcAge'](2003));
console.log(harshit.calcAge());
*/
/*
console.log('Lifting weights repetiton 1');
console.log('Lifting weights repetiton 1');
console.log('Lifting weights repetiton 1');
console.log('Lifting weights repetiton 1');
console.log('Lifting weights repetiton 1');
console.log('Lifting weights repetiton 1');
console.log('Lifting weights repetiton 1');
console.log('Lifting weights repetiton 1');
console.log('Lifting weights repetiton 1');
console.log('Lifting weights repetiton 1');
console.log('Lifting weights repetiton 1');
// For Loop
for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repetiton ${rep}`);
}
*/
/*
const harshit = [
    'Harshit',
    'Aditya',
    2021 - 2003,
    'Student Developer',
    ['Ritesh', 'Aniket', 'Aditya'],
    true
];
const types = [];
for (let i = 0; i < harshit.length; i++) {
    //Reading from harshit array
    console.log(harshit[i], typeof harshit[i]);
    //Filling types array
    //types[i] = typeof jonas[i];
    types.push(typeof harshit[i]);
}
console.log(types);
const years = [1991, 2007, 1969, 2020];
const ages = [];
for (let i = 0; i < years.length; i++) {
    ages.push(2037 - years[i]);
}
console.log(ages);
//continue and break
console.log('---ONLY STRING ---')
for (let i = 0; i < harshit.length; i++) {
    if (typeof harshit[i] !== 'string') continue;
    console.log(harshit[i], typeof harshit[i]);
}
console.log('---BREAK WITH NUMBER ---')
for (let i = 0; i < harshit.length; i++) {
    if (typeof harshit[i] !== 'string') break;
    console.log(harshit[i], typeof harshit[i]);
}
*/
/*
const harshit = [
    'Harshit',
    'Aditya',
    2021 - 2003,
    'Student Developer',
    ['Ritesh', 'Aniket', 'Aditya'],
    true
];
*/
/*
for (let i = harshit.length - 1; i >= 0; i--) {
    console.log(i, harshit[i])
}
for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`-----------Starting exercise ${exercise}`);
    for (let rep = 0; rep < 6; rep++) {
        console.log(`Exercise ${exercise}:Lfting weight repetition ${rep}`);
    }
}
*/
/*
//while loop
for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lfting weights repetition ${rep}`);
}
let rep = 1;
while (rep <= 10) {
    console.log(`While lifting weights repetition ${rep}`);
    rep++
}
let dice = Math.trunc(Math.random() * 6) + 1;
while (dice != 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log('Loop is about to end...');
}
*/
//Coding Challenge 1 
//Test 1 
const calcAverage = (a, b, c) => (a + b + c) / 3;
console.log(calcAverage(3, 4, 5));
const scoreDolphins = calcAverage(44, 23, 71);
const scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);
const checkWinner = function (avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    }
    else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win (${avgDolphins} vs. ${avgKoalas})`);
    }
    else {
        console.log('No team wins ....')
    }
}
checkWinner(scoreDolphins, scoreKoalas);
checkWinner(576, 111);
//Test 2 
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 54, 41);
console.log(scoreDolphins, scoreKoalas);
checkWinner(scoreDolphins, scoreDolphins);