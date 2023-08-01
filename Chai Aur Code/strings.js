const name = "Harshit";
const repoCount = 50;

console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const userName = new String("Harshit");

console.log(userName[0]);
console.log(userName.__proto__);

console.log(userName.length);
console.log(userName.toUpperCase());
console.log(userName.charAt(2));
console.log(userName.indexOf("H"));

const newString = userName.substring(1, 4); //(Starting position, position-1)
console.log(newString);

const anotherString = userName.slice(0, 4);
console.log(anotherString);

const newStringOne = "     Harshit     "; //Removes free space
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://HA27.com/hha875&&123";
console.log(url);
console.log(url.replace("875&&1", "+"));
console.log(url.includes("HA"));
const gameName = "Harshit-Aditya-27";
console.log(gameName.split("-"));
