const wp = 7900000000;
function percentageOfWorld1(population) {
    console.log(`${(population / wp) * 100}%`);
}
const populations = [43000000, 75000000, 130000000, 123000000];
const percentages = [];
for (let i = 0; i < populations.length; i++) {
    const popu = percentageOfWorld1(populations[i]);
    percentages.push(popu);
}
console.log(percentages);