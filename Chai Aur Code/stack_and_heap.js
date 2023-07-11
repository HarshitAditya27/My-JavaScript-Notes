//Stack (Primitive) (Uses Copy values), Heap(Non-Primitive) (Directly uses reference)

let myName = "Harshit";
let anotherName = myName;
anotherName = "Aditya";
console.log(myName);
console.log(anotherName);

let userOne = {
  email: "user@google.com",
  upi: "user@ybl",
};

let userTwo = userOne;

userTwo.email = "user@outlook.com";

console.log(userOne.email);
console.log(userTwo.email);
