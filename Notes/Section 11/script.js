'use strict';
// LECTURES


const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
/*
//SLICE
let arr = ['a', 'b', 'c', 'd', 'e'];
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));
console.log(arr.slice());
console.log([...arr]);
 
//SPLICE 
//console.log(arr.splice(2));
arr.splice(-1);
console.log(arr);
arr.splice(1, 2);
console.log(arr);
//REVERSE
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());
console.log(arr2);
 
//CONCAT 
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]);
 
//JOIN 
console.log(letters.join('-')); 
 
 
const arr = [23, 11, 64];
console.log(arr[0]);
console.log(arr.at(0));
 
//getting the last element 
console.log(arr[arr.length - 1]);
console.log(arr.slice(-1)[0]);
console.log(arr.at(-1));
 
console.log('harshit'.at(0));
console.log('harshit'.at(-1)); 
 
 
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
 
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}:You withdrew ${Math.abs(movement)}`);
  }
}
 
console.log('--------FOREAACH--------');
movements.forEach(function (mov, i, arr) {
  if (mov > 0) {
    console.log(`Movement ${i + 1}: You deposited ${mov}`);
  } else {
    console.log(`Movement ${i + 1}:You withdrew ${Math.abs(mov)}`);
  }
}); 
 
 
//Set 
const currenciesUnique = new Set(['USD', 'EUR', 'GBP', 'CAD', 'AUD']);
console.log(currenciesUnique);
currenciesUnique.forEach(function (value, _, map) {
  console.log(`${value}:${value}`);
})
 
//Map
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);
 
//currencies.forEach(function (value, key, map) {
  //console.log(`${key} is ${value}`);
//})
//Coding Challenge 1 
const juliaData = [3, 5, 2, 12, 7];
const kateData = [4, 1, 15, 8, 3];
const juliaData2 = [9, 16, 6, 8, 3];
const kateData2 = [10, 15, 6, 1, 4];
const checkDogs = function (dogsJulia, dogsKate) {
  const dogsJuliaCorrected = dogsJulia.slice();
  dogsJuliaCorrected.splice(0, 1);
  dogsJuliaCorrected.splice(-2);
  //dogsJulia.slice(1,3); 
  const dogs = dogsJuliaCorrected.concat(dogsKate);
  console.log(dogs);
 
  dogs.forEach(function (dog, i) {
    if (dog >= 3) {
      console.log(`Dog number ${i + 1} is an adult, and is ${dog} years old`);
    } else {
      console.log(`Dog number ${i + 1} is still a puppy`);
    }
  })
};
checkDogs(juliaData, kateData);
checkDogs(juliaData2, kateData2); 
 
const eurToUsd = 1.1;
 
//const movementsUSD = movements.map(function (mov) {
//return mov * eurToUsd;
//});  
 
const movementsUSD = movements.map(mov => mov * eurToUsd);
 
console.log(movements);
console.log(movementsUSD);
 
const movementsUSDfor = [];
for (const mov of movements) movementsUSDfor.push(mov * eurToUsd);
console.log(movementsUSDfor);
 
movements.map((mov, i, arr) => {
  if (mov > 0) {
    console.log(`Movement ${i + 1}: You deposited ${mov}`);
  }
  console.log(`Movement ${i + 1}: You withdraw ${mov}`)
})
 
 
const movementsDescriptions = movements.map(
  (mov, i) =>
    `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(mov)}`
);
console.log(movementsDescriptions);
console.log(movements.filter(mov => mov > 0));  
 
//Filter
const deposits = movements.filter(function (mov) {
  return mov > 0;
});
console.log(movements);
console.log(deposits);
 
const depositeFor = [];
for (const mov of movements) {
  if (mov > 0) depositeFor.push(mov);
  console.log(depositeFor);
}
 
const withdrawals = movements.filter(mov => mov < 0);
console.log(withdrawals);
 
 
//const balance = movements.reduce(function (acc, cur, i, arr) {
//console.log(`Iteration ${i}: ${acc}`);
//return acc + cur;
//}, 0);
 
const balance = movements.reduce((acc, cur) => acc + cur, 0);
console.log(balance);
 
let balance2 = 0;
for (const mov of movements) {
  balance2 += mov;
}
console.log(balance2);
 
//Maximum value 
const max = movements.reduce((acc, mov) => {
  if (acc > mov)
    return acc;
  else
    return mov;
}, movements[0]);
console.log(max);
 
//Coding Challenge 2 
const calcAverageHumanAge = function (ages) {
  const humanAges = ages.map(age => age <= 2 ? 2 * age : 16 + age * 4);
  const adults = humanAges.filter(age => age >= 18);
  console.log(humanAges);
  console.log(adults);
 
  //const average = adults.reduce((acc, cur) => acc + cur, 0) / adults.length;
  const average = adults.reduce(
    (acc, cur) => acc + cur) / adults.length;
  return average;
}
 
const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
 
console.log(avg1, avg2);  
 
//
const eurToUsd = 1.1;
console.log(movements);
//PIPELINE
const totalDepositsUSD = movements
  .filter(mov => mov > 0)
  .map((mov, i, arr) => {
    //console.log(arr);
    return mov * eurToUsd;
  })
  //.map(mov => mov * eurToUsd)
  .reduce((acc, mov) => acc + mov, 0);
console.log(totalDepositsUSD); 
 
//Coding Challenge 3
const calcAverageHumanAge2 = function (ages) {
  const humanAges = ages.map(age => age <= 2 ? 2 * age : 16 + age * 4);
  const adults = humanAges.filter(age => age >= 18);
 
  //const average = adults.reduce((acc, cur) => acc + cur, 0) / adults.length;
  const average = adults.reduce(
    (acc, age, i, arr) => acc + age / arr.length, 0);
  return average;
}
 
const avg1 = calcAverageHumanAge2([5, 2, 4, 1, 15, 8, 3]);
const avg2 = calcAverageHumanAge2([16, 6, 10, 5, 6, 1, 4]);
 
console.log(avg1, avg2);
 
const calcAverageHumanAge = ages =>
  ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4)).
    filter(age => age >= 18)
    .reduce((acc, age, i, arr) => acc + age / arr.length, 0)
 
 
 
const avg3 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
const avg4 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
 
console.log(avg1, avg2);  
 
//FIND 
const firstWithdrawal = movements.find(mov => mov < 0);
console.log(movements);
console.log(firstWithdrawal);
console.log(accounts);

const account = accounts.find(acc => acc.owner === 'Jessica Devis');
console.log(account);


console.log(movements);
//EQUATION
console.log(movements.includes(-130));

//CONDITION 
console.log(movements.some(mov => mov === -130));

const anyDeposits = movements.some(mov => mov > 0);
console.log(anyDeposits);


//Every 
console.log(movements.every(mov => mov > 0));
console.log(account4.movements.every(mov => mov > 0));

//Seperate callback 
const deposit = mov => mov > 0;
console.log(movements.some(deposit));
console.log(movements.every(deposit));
console.log(movements.filter(deposit)); 

//Flat and FlatMap
const arr = [[1, 2, 3], [4, [5, , 6]], 7, 8];
console.log(arr.flat());

const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arrDeep.flat(2));

const accountMovements = accounts.map(acc => acc.movements);
console.log(accountMovements);
const allMovements = accountMovements.flat();
console.log(allMovements);

const overalBalance = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce((acc, mov) => acc + mov, 0);
console.log(overalBalance);

//flatMap
const overalBalance2 = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, mov) => acc + mov, 0);
console.log(overalBalance); 


const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
console.log(owners.sort());
console.log(owners);

//Numbers 
console.log(movements);
console.log(movements.sort());

//return < 0, A,B (keep order) 
//return > 0, B,A (switch order) 

//Increment
//movements.sort((a, b) => {
//if (a > b) return 1;
//if (a < b) return -1;
//return 0;
//}); 

movements.sort((a, b) => a - b);
console.log(movements);

//Decrements
//movements.sort((a, b) => {
//if (a > b) return -1;
//if (a < b) return 1;
//return 0;
//})
movements.sort((a, b) => b - a);
console.log(movements); 


console.log([1, 2, 3, 4, 5, 6, 7]);
console.log(new Array(1, 2, 3, 4, 5, 6, 7));

const x = new Array(7);
console.log(x);

x.fill(1, 3, 5);
x.fill(1);
console.log(x);

arr.fill(23, 2, 6);
console.log(arr);

//Array.from 
//Array.from({ length: 7 }, () => 1);
//console.log(y);

const y = Array.from({ length: 7 }, () => 1);
console.log(y);
const z = Array.from({ length: 7 }, (_, i) => i + 1);
console.log(z);

labelBalance.addEventListener('click', function () {
  const movemntUI = Array.form(
    document.querySelectorAll('.movement__value'),
    el => Number(el.textContent.replace(',', '.'))
  );
  console.log(movemntUI);

  const movementsUI2 = [...document.querySelectorAll('.movement__value')];
}) 

//Array Methods Practice 
//1 . 

const backDepositSum = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov > 0)
  .reduce((sum, cur) => sum + cur, 0);

console.log(backDepositSum);

//2. 
//const numDeposits1000 = accounts.flatMap(acc => acc.movements)
//.filter(mov => mov > 1000).length;

const numDeposits1000 = accounts
  .flatMap(acc => acc.movements)
  .reduce((count, cur) => (cur >= 1000 ? ++count : count), 0);
console.log(numDeposits1000);

//Prefixed ++ operator 
let a = 10;
console.log(++a);
console.log(a);

// 3. 
const { deposits, withdrawals } = accounts
  .flatMap(acc => acc.movements).reduce((sums, cur) => {
    //cur > 0 ? sums.deposits += cur : sums.withdrawals += cur;
    sums[cur > 0 ? 'deposits' : 'withdrawals'] += cur;
    return sums;
  }, { deposits: 0, withdrawals: 0 });
console.log(deposits, withdrawals)

//4, 
//this is a nice title -> This Is a Nice Title 
const convertTitleCase = function (title) {
  const capitzalize = str => str[0].toUpperCase() + str.slice(1).toLowerCase();
  const expections = ['a', 'an', 'the', 'but', 'or', 'on', 'in', 'with'];
  const titleCase = title
    .toLowerCase()
    .split(' ')
    .map(
      word => expections.includes(word) ? word : capitzalize(word)).join(' ');
  return capitzalize(titleCase);
};
console.log(convertTitleCase('this is a nice title'));
console.log(convertTitleCase('this is a LONG title but not too long'));
console.log(convertTitleCase('and here is another title with an example'));
*/

//Coding Challenges 4  

const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
]

// 1. 
dogs.forEach(dogr => (dogs.recFood = Math.trunc(dogs.weight ** 0.5 * 28)));

// 2. 
const dogSarah = dogs.find(dog => dog.owners.includes('Sarah'));
console.log(dogSarah);
console.log(
  `Sarah's dog is eating too ${dogSarah.curFood > dogSarah.recFood ? 'much' : 'little'
  }
`
);

// 3. 
const ownersEatTooMuch = dogs
  .filter(dog => dog.curFood > dog.recFood)
  .filterMap(dog => dog.owners)
//.flat();
console.log(ownersEatTooMuch);


const ownersEatTooLittle = dogs
  .filter(dog => dog.curFood < dog.recFood)
  .filterMap(dog => dog.owners)
//.flat();
console.log(ownersEatTooLittle);


//4 
console.log(`${ownersEatTooMuch.join('and')}'s dogs eat too much`);
console.log(`${ownersEatTooMuch.join('and')}'s dogs eat too much`);

//5 
console.log(dogs.some(dog => dog.curFood === dog.recFood));

//6 
const checkEatingOkay = dog =>
  dog.curFood > dog.recFood * 0.9 && dog.curFood <
  dog.recFood * 1.1;

console.log(dogs.some(checkEatingOkay));

//7 
console.log(dogs.filter(checkEatingOkay));

//8 
//sort it by recommended food portion in an ascending order [1,2,3] 
const dogSorted = dogs.slice().sort((a, b) => a.recFood - b.recFood);
console.log(dogSorted);