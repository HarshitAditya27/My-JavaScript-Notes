/*
Data 1: Bill= 275. 
Data 2: Bill= 40. 
Data 3: Bill= 430.
*/

const bill = 430;
const tip = (bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.2;
const totalbill = bill + tip;
console.log(`The bill was ${bill}, the tip is ${tip}, and the total is ${totalbill}`);

/* 
Data 1: The bill was 275, the tip is 41.25, and the total is 316.25. 
Data 2: The bill was 40, the tip is 8, and the total is 48. 
Data 3: The bill was 430, the tip is 86, and the total is 516.
*/