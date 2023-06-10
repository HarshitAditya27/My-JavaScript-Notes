function calculateCartPrice(a,b,...num){
    return num
} 

console.log(calculateCartPrice(2,1,3,4)); 

const user = {
    username:"tanjiro", 
    price:199,
} 

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`); 
} 
handleObject(user) 
handleObject({
    username:"Harshit", 
    price:1000
}); 

function returnfirstindexofArray(arr){
    return arr[1];
} 

console.log(returnfirstindexofArray([1,2,3,4,5]));