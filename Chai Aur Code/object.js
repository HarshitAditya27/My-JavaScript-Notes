const mySym = Symbol("key1");

const JsUser = {
    name: 'Harshit', 
    age:20,  
    [mySym]: "mySymkey",
    email:"harshitaditya27@gmail.com", 
    isLoggedIn:false, 
    lastLoginDays:['Monday',"Saturday"]
} 
 
//console.log(mySym); 
//console.log(JsUser[mySym]);
//console.log(JsUser.name); 
//console.log(JsUser["name"]); 

JsUser.email = "ahrshitasditya64@gmail.com" 

//console.log(JsUser.email); 
//Object.freeze(JsUser)
//JsUser.email = "ahrshitasditya64@email.com" 
//console.log(JsUser) 

JsUser.greeting = function(){
    console.log(`Hello JS User, ${JsUser.name}`);
}  


console.log(JsUser); 
console.log(JsUser.greeting) 
console.log(JsUser.greeting());