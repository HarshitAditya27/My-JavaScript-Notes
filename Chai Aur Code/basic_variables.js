console.log("Harshit");

const accountId = 144553;
let accountEmail = "harshitaditya27@gmail.com";
var accountPassword = "1234";
accountCity = "Ranchi";
let accountState;
// accountId = 2;

accountPassword = "21212121";
accountEmail = "harshitaditya64@gmail.com";
accountCity = "Majitar";
console.log(accountId); //144553

/*Prefer not to use var because of issue in block scope and functional scope*/

console.table([accountId, accountEmail, accountCity, accountState]);
/*
Output: 
┌─────────┬─────────────────────────────┐
│ (index) │           Values            │
├─────────┼─────────────────────────────┤
│    0    │           144553            │
│    1    │ 'harshitaditya64@gmail.com' │
│    2    │          'Majitar'          │
│    3    │          undefined          │
└─────────┴─────────────────────────────┘

*/
