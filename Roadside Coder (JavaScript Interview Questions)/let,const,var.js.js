//Variable Shadowing

/*
function test() {
  let a = "Hello";
  //console.log(a);
  if (true) {
    let a = "Hi";
    console.log(a);
  }
}
let a = "Harshit";
test();
console.log(a);
*/

//Illigal Shadowing
/*
function test() {
  var a = "Hello";
  let b = "Commander";
  //console.log(a);
  if (true) {
    let a = "Hi";
    var b = "Cammando";
    console.log(a);
    console.log(b);
  }
}
let a = "Harshit";
test();
console.log(a);
*/

//Interview Question
function abc() {
  console.log(a, b, c);
  const c = 30;
  let b = 20;
  var a = 10;
}
abc();
