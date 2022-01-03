const wp = 7900000000;
function percentageOfWorld1(country, population) {
    console.log(`${country} has a population of ${population} and its percentage of world population is ${(population / wp) * 100}%`);
}
percentageOfWorld1('India', 1350000000);

const percentageOfWorld2 = function (country, population) {
    console.log(`${country} has a population of ${population} and its percentage of world population is ${(population / wp) * 100}%`);
}
percentageOfWorld2('India', 1350000000);

