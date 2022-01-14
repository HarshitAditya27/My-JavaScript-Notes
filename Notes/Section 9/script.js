'use strict';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function (starterIndex = 1, mainIndex = 0, time = '20:00', address) {
    console.log(`order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
  },
  orderPasta: function (ing1, ing2, img3) {
    console.log(`Here are your delicious pasta with ${ing1} and ${ing2} and ${img3}`);
  },
  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient)
    console.log(otherIngredients)
  },
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

////////////////////////////////// 
// Destructuring Arrays 
/*
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr; // Destructuring
console.log(x, y, z);
console.log(arr);

console.log(restaurant.categories);

let [first, , third] = restaurant.categories;
console.log(first, third);

//const temp = first;
//first = third;
//third = temp;
//console.log(first, third);

//Trick
[first, third] = [third, first];
console.log(first, third);

const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

//Nested Destructuring
const nested = [2, 4, [5, 6]];
//const [i, , j] = nested;
//console.log(i, j);

const [i, , [j, k]] = nested;
console.log(i, j, k);

//Default Values
const [x1 = 1, y1 = 1, z1 = 1] = [8, 9];
console.log(x1, y1, z1);
*/
/////////////////////////////// 
//Destructuring Objects 
/*
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const { name: restaurantName, categories: tags,
  openingHours: hours, } = restaurant;
console.log(restaurantName, tags, hours);

//Default Values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

//Mutating Variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };

({ a, b } = obj);
console.log(a, b);

//Nested objects
const { fri: { open, close } } = openingHours;
//console.log(fri);
console.log(open, close);

restaurant.orderDelivery({
  time: '22:30',
  address: "Via del Sole, 21",
  mainIndex: 1,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: 'Via del Sole, 21',
  starterIndex: 1,
});
*/

//The Spread Operator ()... 
/*
const arr = [7, 8, 9]
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [1, 2, ...arr];
console.log(newArr);
console.log(...newArr)

const newMenu = [...restaurant.mainMenu, 'Panner'];
console.log(newMenu);

//Copy Array
const mainMenuCopy = [...restaurant.mainMenu];

//Join 2 array
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

//Iterable: arrays, strings, maps, sets. NOT Obke
const str = 'Harshit';
const letters = [...str, '', 'A.'];
console.log(letters);
console.log(...str);
//console.log(`${...str} Aditya`); this wont work

const ingredients = [
  prompt('Lets\'s make pasta ingrediant 1?'),
  prompt('Lets\'s make pasta ingrediant 2?'),
  prompt('Lets\'s make pasta ingrediant 3?'),
];
console.log(ingredients);

//restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
//restaurant.orderPasta(...ingredients);

//Objects
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' }
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'RRR';
console.log(restaurantCopy);
console.log(restaurant.name);
*/

/*
//SPREAD
const arr = [1, 2, ...[3, 4]];

//REST, because on LEFT side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , risotto, ...others1] = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(pizza, risotto, others1);

//Objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

// 2) Fuctions
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
    console.log(sum);
  }
}
add(2, 3)
add(5, 3, 7, 2)
add(8, 2, 5, 3, 2, 1, 4)

const x = [23, 5, 7]
add(...x)

restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
restaurant.orderPizza('mushrooms');
*/

//Short Circuiting 
/*
//Use ANY data type, return ANY data type, short circuiting
console.log(3 || 'Jonas');
console.log('' || 'Jonas');
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || 'Hello' || 23 || null);

restaurant.numGuest = 0;
const guests1 = restaurant.numGuest ? restaurant.numGuest : 0;
console.log(guests1);
const guests2 = restaurant.numGuest || 10;
console.log(guests2);

console.log('-------AND-------')
console.log(0 && 'Jonas');
console.log(7 && 'Jonas');
console.log('Hello' && 23 && null && 'Jonas');

//Practical Example
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'onion');
}
restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'onion');
*/
/*
restaurant.numGuest = 0;
const guests = restaurant.numGuest || 10;
console.log(guests);

//Nullish: null and undefined (NOT 0 or '' )
const guestCorrect = restaurant.numGuest ?? 10;
console.log(guestCorrect);
*/
/*
const rest1 = {
  name: 'Capri',
  numGuest: 0,
};

const rest2 = {
  name: 'La Piazza',
  owner: "Lassan",
};

//OR assignment operator
//rest1.numGuest = rest1.numGuest || 10;
//rest2.numGuest = rest2.numGuest || 10;
//rest1.numGuest ||= 10
//rest2.numGuest ||= 10

//Nullish assignment operator (null or undefined)
rest1.numGuest ??= 10;
rest2.numGuest ??= 10;

//AND assignment operator
//rest1.owner = rest1.owner && '<LOLO>';
//rest2.owner = rest2.owner && '<LOLO>';

rest1.owner ??= '<LOLO>';
rest2.owner ??= '<LOLO>';
console.log(rest1);
console.log(rest2);
*/
//Coding Challenge 1 
/*
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Harzard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const [players1, players2] = game.players;
console.log(players1, players2);

const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

const allplayers = [...players1, ...players2];

const players1Final = [...players1, 'Thiago', 'Coutinho', 'Peristic'];
console.log(players1Final);

const { odds: { team1, x: draw, team2 } } = game;
console.log(team1, draw, team2);

const printGoals = function (...players) {
  console.log(players);
  console.log(`${players.length} goals were scored`);
}

//printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
//printGoals('Davies', 'Muller');
printGoals(...game.scored);


team1 < team2 && console.log('Team 1 is more likely to win');
team2 < team1 && console.log('Team 2 is more likely to win');
*/

//Looping Arrays: The for-of Loop 
/*
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item);

for (const item of menu.entries()) {
  console.log(`${item[0] + 1}: ${item[1]}`);
}
//console.log(menu.entries());
*/

/*
if (restaurant.openingHours && restaurant.openingHours.mon) {
  console.log(restaurant.openingHours.mon.open);
}

//  WITH optional chaining
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open)

//Example
const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

for (const day of days) {
  console.log(day);
  const open = restaurant.openingHours?.[day]?.open ?? 'closed';
  console.log(`On ${day}, we are open at ${open}`);
}

//Methods
console.log(restaurant.order?.(0, 1) ?? 'Method does not exiist');
console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exiist');

//Arrays
//const users = [{ name: 'Jonas', email: 'hello@harshit.io' }];
const users = [];
console.log(users[0].name ?? 'Users array empty');

if (users.length > 0)
  console.log(users[0].name);
else
  console.log('user array empty');
*/

/*
const properties = Object.keys(openingHours)
console.log(properties)

for (const day of Object.keys(openingHours)) {
  console.log(day);
}

let openStr = `We are open on ${properties.length}
days: `;
for (const day of properties) {
  openStr += `${day} `;
}
console.log(openStr);

//Property VALUES
const values = Object.values(openingHours);
console.log(values);

//Entire objects
const entries = Object.entries(openingHours);
console.log(entries);

for (const [key, { open, close }] of entries) {
  console.log(` On ${key} we open at ${open} and close at ${close}`);
}
*/

//Coding Challenge 2
/*
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Harzard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

//1
for (const [i, player] of game.scored.entries())
  console.log(`Goal ${i + 1}: ${player}`);

//2
const odds = Object.values(game.odds);
let average = 0;
for (const odd of odds) {
  average += odd;
  average /= odds.length;
  console.log(average);
}

//3
for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(teamStr, odd);
}
*/

//Sets 
/*
const orderSet = new Set([
  'Pizza',
  'Pasta',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
])

console.log(orderSet);

console.log(new Set('Harshit'));
console.log(orderSet.size);
console.log(orderSet.has('Pizza'));
console.log(orderSet.has('Bread'));
orderSet.add('Garlic Bread');
orderSet.add('Garlic Bread');
console.log(orderSet);
orderSet.delete('Risotto');
console.log(orderSet);
//orderSet.clear();
//console.log(orderSet);

//Example
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Witer'];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);

console.log(new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Witer']).size);

console.log(new Set('harshitaditya').size);
*/

//Maps: Fundamental
/*
const rest = new Map();
rest.set('name', 'DPizza'); //add key value pair
rest.set(1, 'Main Road Ranchi');
console.log(rest.set(2, 'Harmu Ranchi'));
rest.set(3, 'Lalpur Ranchi');
rest
  .set('open', 11)
  .set('close', 23)
  .set(true, 'Yes, We are open')
  .set(false, 'No, We are closed');

console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 3;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

console.log(rest.has('name'));

rest.delete(1);
console.log(rest);
//rest.clear();
console.log(rest.size)
const arr = [1, 2];
console.log(rest.get(arr));
*/

//Maps: Iteration 
/*
const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  [4, 'Python'],
  ['correct', 3],
  [true, 'Correct'],
  [false, 'Wrong'],
]);

console.log(question);

//Convert object to map
console.log(Object.entries(openingHours));
const hours = new Map(Object.entries(openingHours));
console.log(hours);
console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number')
    console.log(`Answer ${key}: ${value}`);
}
const answer = Number(prompt('Your Answer'));
console.log(question.get(answer === question.get('correct')));

//Convert map to array
console.log([...question]);
console.log(question.entries());
console.log([...question.keys()]);
console.log([...question.values()]);
*/

//Coding Challenge 3 
/*
const gameEvents = new Map([
  [17, 'GOAL'],
  [36, 'Substitution'],
  [47, 'GOAL'],
  [61, 'Substitution'],
  [64, 'Yellow Card'],
  [69, 'Red Card'],
  [70, 'Substitution'],
  [72, 'Substitution'],
  [76, 'GOAL'],
  [80, 'GOAL'],
  [92, 'Yellow Card'],
]);

//1.
const events = [...new Set(gameEvents.values())];
console.log(events);

//2.
gameEvents.delete(64);

//3.
console.log(
  `An event happened, on average, every ${90 / gameEvents.size} minutes`
);
const time = [...gameEvents.keys()].pop();
console.log(time);
console.log(
  `An event happened, on average, every ${time / gameEvents.size} minutes`
);

//4
for (const [min, event] of gameEvents) {
  const half = min <= 45 ? 'first' : 'second';
  console.log(`[${half} HALF] ${min}: ${event}`);
}
*/

//Working with Strings - Part 1 
/*
const airplane = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log(plane[3]);
console.log('B737'[1]);

console.log(airplane.length);
console.log('B737'.length);

console.log(airplane.indexOf('r'));
console.log(airplane.lastIndexOf('r'));
console.log(airplane.indexOf('portugal'));

console.log(airplane.slice(4));
console.log(airplane.slice(4, 7));

console.log(airplane.slice(0, airplane.indexOf(' ')));
console.log(airplane.slice(airplane.lastIndexOf('') + 1));

console.log(airplane.slice(-2));
console.log(airplane.slice(1, -1));

const checkMiddleSeat = function (seat) {
  const s = seat.slice();
  if (s === 'B' || s === 'E')
    console.log('You got the middle seat');
  else
    console.log('You got lucky');
};

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

console.log(new String('Harshit'));
console.log(typeof new String('Harshit'));
console.log(typeof new String('Harshit').slice(1));
*/

//Working with Strings - Part 2  
/*
const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(airline.toUpperCase());
console.log(airline.toLowerCase());

//Fix capitalization in name
const passenger = 'StArlOrD';
const passengerLower = passenger.toLowerCase();
const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

//Comparing Emails
const email = 'hello@jonas.io';
const loginEmail = 'Hello@Starlord.io \n';
const lowerEmail = loginEmail.toLowerCase();
//const trimmedEmail = lowerEmail.trim();
//console.log(trimmedEmail);
//console.log(email === trimmedEmail);
const normalizedEmail = lowerEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(email === normalizedEmail);

//replacing
const priceGB = '288,97$';
const price = priceGB.replace('$', 'Rs').replace(',', '.');
console.log(price);

const announcement = 'All passengers come to boarding door 23. Boarding door 23!';
console.log(announcement.replace('door', 'darwaja'));
console.log(announcement.replaceAll('door', 'gate'));
console.log(announcement.replace(/door/g, 'darwaja'));

//Booleans
const planeno = 'Airbus A320nco';
console.log(planeno.includes('nco'));
console.log(planeno.includes('Boeing'));
console.log(planeno.startsWith('Air'));
console.log(planeno.endsWith('nco'));

if (planeno.startsWith('Airbus') && planeno.endsWith('nco')) {
  console.log('This is an Airbus A320nco');
}

const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are NOT allowed to carry knives or guns');
  } else {
    console.log('You are allowed to carry this item');
  }
}

checkBaggage('I have a laptop, some Food and a pocket Knife');
checkBaggage('Kukure and Pizza');
checkBaggage('I have a gun and knife for protection :) ');
*/

//Working with Strings - Part 3 
/*
console.log('a+very+ncie+string'.split('+'));
console.log('Harshit Aditya'.split(' '));

const [firstName, lastName] = 'Harshit Aditya'.split(' ');

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

const capitalName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];

  for (const n of names) {
    //namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(' '));
}

capitalName('harshit aditya');

//Padding
const message = 'Go to gate 23!';
console.log(message.padStart(25, '+'));
console.log(message.padEnd(25, '+'));
console.log('Harshit'.padStart(25, '+'));

const markCreditCard = function (number) {
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');

}
console.log(markCreditCard(456546546646));
console.log(markCreditCard(456546546646534654654));
console.log(markCreditCard('65654654654654677884'));

//Repeat
const message2 = 'Bad weather... All Departures delayed...';
console.log(message2.repeat(3));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${'✈️'.repeat(n)}`);
}

planesInLine(5);
planesInLine(10);
planesInLine(15);
*/

//Coding Challenge 4 
/* 
document.body.append(document.createElement('textarea'));

document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  const rows = text.split('\n');
  console.log(rows);

  for (const [i, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split('_');
    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(`${output.padEnd(20, ' ')}${'😃'.repeat(i + 1)}`);
  }
}); 
*/

// Data needed for a later exercise
//String Methods Exercise 
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const getCode = str => str.slice(0, 3).toUpperCase();

for (const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');
  const output = `${type.startsWith('_Delayed') ? '🔴' : ''} ${type.replaceAll('_', ' ')} ${getCode(from)} ${getCode(to)} (${time.replace(
    ':',
    'h'
  )})`.padStart(36);
  console.log(output);
}