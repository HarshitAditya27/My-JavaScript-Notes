const wp = 7900000000;
const percentageOfWorld = (country, population) =>
    console.log(`${country} has a population of ${population} and its percentage of world population is ${(population / wp) * 100}%`);

percentageOfWorld('India', 1350000000);