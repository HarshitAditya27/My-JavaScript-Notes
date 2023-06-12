const user = {
  username: "Harshit",
  price: 999,
  welcomeMessage: function () {
    console.log(`${this.username}, welcome to website.`);
    console.log(this);
  },
};

//user.welcomeMessage();
//user.username = "Sam";
//user.welcomeMessage();

//console.log(this);
/*
function chai() {
  let username = "Harshit";
  console.log(this.username);
}
*/
/*
const chai = () => {
  let username = "Harshit";
  console.log(this.username);
};

chai();
*/
/*
const addTwo = (num1, num2) => {
  return num1 + num2;
};
*/

//const addTwo = (num1, num2) => num1 + num2;

//const addTwo = (num1, num2) => num1 + num2;

const addTwo = (num1, num2) => ({
  username: "harshit",
});

console.log(addTwo(3, 4));
