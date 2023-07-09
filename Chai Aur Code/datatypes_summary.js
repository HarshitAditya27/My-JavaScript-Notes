//Primitive

// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

//Reference (Non Primitive)

//Array, Objects, Functions

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol("123");
const anotherId = Symbol("123");

console.log(typeof id);
console.log(id === anotherId);

//bigint
const bignumber = 23745667812345897123578124n;
console.log(typeof bignumber);

const heroes = ["Gojo Sataru", "Yorichi", "Saitama"];
let myObj = {
  name: "Harshit",
  age: 20,
};

const myFunction = function () {
  console.log("Hello World");
};
myFunction();
