const course = {
    coursename:'JS', 
    price:'999', 
    courseInstructor:'Hitesh'
} 

//const {courseInstructor}=course; 
//console.log(courseInstructor); 

const {courseInstructor:instructor} = course; 
console.log(instructor); 

let arr=[1,2]; 
 console.log(arr); 
  let one; 
  let two; 

 [one,two] = arr;  
 console.log(one) 
 console.log(two) 
/*
 {
    "name":"Harshit",
    "coursename":"JS in Hindi", 
    "price": "free :)"
} 
*/
