/*
Data 1 
const dscoreAvg = calcAverage(44, 23, 71);
const kscoreAvg = calcAverage(65,54, 49);
*/

const calcAverage = (num1, num2, num3) => {
    const avg = (num1 + num2 + num3) / 3;
    return avg;
}

function checkWinner(dscoreAvg, kscoreAvg) {
    if (dscoreAvg >= 2 * kscoreAvg) {
        console.log(`Dolphins win (${dscoreAvg} vs ${kscoreAvg})`);
    }
    else if (kscoreAvg >= 2 * dscoreAvg) {
        console.log(`Koals win (${kscoreAvg} vs ${dscoreAvg})`);
    }
    else {
        console.log(`No Team wins`);
    }
}

const dscoreAvg = calcAverage(85, 54, 41);
const kscoreAvg = calcAverage(23, 34, 27);
console.log(dscoreAvg, kscoreAvg);
checkWinner(dscoreAvg, kscoreAvg);

/* 
Result 
Data 1: No Team wins
Data 2: Dolphins win (60 vs 28) 
*/