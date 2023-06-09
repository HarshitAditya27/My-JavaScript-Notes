//const tinderUser = new Object(); //singleton object 
const tinderUser = {} 

  tinderUser.id = '123abc'; 
  tinderUser.name="Tanjiro"; 
  tinderUser.isLoggedIn=false; 

  //console.log(tinderUser); 

 const githubUser = {
    email:"harshitaditay27@gmailo.com", 
    fullname:{
        userfullname:{
             firstname:"Harshit", 
             lastName:"Aditya"
        }
    }
 }  

 //console.log(githubUser) 
 //console.log(githubUser.fullname) 
 //console.log(githubUser.fullname.userfullname) 

const obj1 = {1:"a",2:'b'}; 
const obj2 = {3:"c",4:"d"}; 

//const obj3={obj1,obj2} 
//const obj3=Object.assign({},obj1,obj2); 
const obj3={...obj1,...obj2}
console.log(obj3); 

console.log ( Object.keys(tinderUser)); 
console.log ( Object.values(tinderUser));
console.log ( Object.entries(tinderUser)); 
console.log ( tinderUser.hasOwnProperty('isLoggedIn'));