//for of

//["","",""]
//[{},{},{}]

/*
const arr = [1, 2, 3, 4, 5];

for (const num of arr) {
  console.log(num);
}
*/

/*
const greetings = "Hello World";
for (const greet of greetings) {
  console.log(`Each chai is ${greet}`);
}
*/
/*
const map = new Map();
map.set("IN", "India");
map.set("USA", "United States of America");
map.set("Fr", "France");
console.log(map);

for (const [key, value] of map) {
  console.log(key, ":", value);
}
*/
/*
const myObject = {
  game1: "NFS",
  game2: "Watch Dogs",
};


for (const [key, value] of myObject) {
  console.log(key, ":", value);
}
*/
/*
const myObject = {
  js: "JavaScript",
  cpp: "C++",
  rb: "Ruby",
  swift: "Swift by apple",
};

for (const key in myObject) {
  console.log(`${key} shortcut is for ${myObject[key]}`);
}
*/

/*
const programming = ["JS", "KO", "PY", "JAVA", "CPP"];

for (const key in programming) {
  console.log(programming[key]);
}

*/
/*
const map = new Map();
map.set("IN", "India");
map.set("USA", "United States of America");
map.set("Fr", "France");

for (const key in map) {
  console.log(key); //Output will not work as map is not iterable
}
*/

const coding = ["JS", "KO", "PY", "JAVA", "CPP"];

/*
coding.forEach(function (val) {
  console.log(val);
}); 
output: 
JS
KO
PY
JAVA
CPP
*/
/*
coding.forEach((item) => {
  console.log(item);
}); 
output: 
JS
KO
PY
JAVA
CPP
*/
/*
function printMe(item) {
  console.log(item);
} 
output: 
JS
KO
PY
JAVA
CPP
coding.forEach(printMe);

*/

/*
coding.forEach((item, index, arr) => {
  console.log(item, index, arr);
});
*/
/*
const myCoding = [
  {
    languageName: "JavaScript",
    languageFileName: "js",
  },
  {
    languageName: "TypeScript",
    languageFileName: "ts",
  },
  {
    languageName: "Java",
    languageFileName: "java",
  },
  {
    languageName: "Python",
    languageFileName: "py",
  },
];

myCoding.forEach((item) => {
  console.log(item.languageName);
});
output: 
{ languageName: 'javascript', languageFileName: 'js' }
{ languageName: 'Typescript', languageFileName: 'ts' }
{ languageName: 'Java', languageFileName: 'java' }
{ languageName: 'Python', languageFileName: 'py' }
*/
