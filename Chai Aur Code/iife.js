//Immediately Invoked Function Expression (IIFE)

(function chai() {
  //named IIFE
  console.log(`DB CONNECTED`);
})();

(() => {
  console.log(`DB CONNECTED TWO`);
})();

/*
//The below code wont work
(() => (
    console.log(`DB CONNECTED TWO`);
))();
*/

((name) => {
  console.log(`DB successfully connected, ${name} !`);
})("Harshit");

//chai();

//IMPORTANT: To reduce global scope pollution IIFE is used
