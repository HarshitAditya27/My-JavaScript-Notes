const wp = 7900000000;
function percentageOfWorld(population) {
    return `(population / wp) * 100}%`;
}
function percentageOfWorld1(country, population) {
    console.log(`${country} has a population of ${population} and its percentage of world population is ${percentageOfWorld1(population)}`);
}
percentageOfWorld1('India', 1350000000);