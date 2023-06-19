/*
function sayMyName(){
    console.log("Harshit");
} 
sayMyName(); // Reference: sayMyName, (): Execution
console.log(sayMyName); 
*/ 

function addTwonum(num1,num2){
    return (num1+num2);
} 

const r=addTwonum(2,3); 
console.log(r); 

function loginUserMessage(username){ 
    if(username === undefined){
        return ("Please enter a username")
    }
    return `${username} just logged in`;
} 

console.log(loginUserMessage());
