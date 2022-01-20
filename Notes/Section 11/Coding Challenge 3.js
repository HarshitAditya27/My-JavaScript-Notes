//Coding Challenge 3
const calcAverageHumanAge2 = function (ages) {
    const humanAges = ages.map(age => age <= 2 ? 2 * age : 16 + age * 4);
    const adults = humanAges.filter(age => age >= 18);

    //const average = adults.reduce((acc, cur) => acc + cur, 0) / adults.length;
    const average = adults.reduce(
        (acc, age, i, arr) => acc + age / arr.length, 0);
    return average;
}

const avg1 = calcAverageHumanAge2([5, 2, 4, 1, 15, 8, 3]);
const avg2 = calcAverageHumanAge2([16, 6, 10, 5, 6, 1, 4]);

console.log(avg1, avg2);

const calcAverageHumanAge = ages =>
    ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4)).
        filter(age => age >= 18)
        .reduce((acc, age, i, arr) => acc + age / arr.length, 0)



const avg3 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
const avg4 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);

console.log(avg1, avg2);
