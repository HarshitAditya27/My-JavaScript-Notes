'use strict';
function calcAge(birthYear) {
    const age = 2022 - birthYear;

    function printAge() {
        let output = `You are ${age}, birth year ${birthYear}`;
        console.log(output);
        if (birthYear >= 2000 && birthYear <= 2005) {
            var millenial = true;
            // Creating NEW variable with same name as other scope's variable.
            const firstName = 'Aditya';
            //Reassigning outer scope's variable
            const str = `Oh, and you are a millenial, ${firstName}`;
            console.log(str);

            function add(a, b) {
                return a + b;
            }
            output = 'NEW OUTPUT'
        }
        console.log(millenial);
        console.log(output);
    }
    printAge();
    return age;
}

const firstName = 'Harshit';
calcAge(2003);