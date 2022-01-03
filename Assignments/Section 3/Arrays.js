const wp = 7900000000;
function percentageOfWorld1(population) {
    console.log(`${(population / wp) * 100}%`);
}
const populations = [43000000, 75000000, 130000000, 123000000]
console.log(populations.length === 4);
percentageOfWorld1(populations[0]);
percentageOfWorld1(populations[1]);
percentageOfWorld1(populations[2]);
percentageOfWorld1(populations[3]);
