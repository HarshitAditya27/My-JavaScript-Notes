const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]
const tips = [];
const totals = [];
function calcTip(bill) {
    if (bill >= 50 && bill <= 300) {
        return bill * 0.15;
    } else {
        return bill * 0.2;
    }
}

for (let i = 0; i < bills.length; i++) {
    tips.push(calcTip(bills[i]));
    totals.push(tips[i] + bills[i]);
}

const calcAverage = function (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        // sum = sum + arr[i];
        sum += arr[i];
    }
    return sum / arr.length;
}
console.log(tips);
console.log(totals);
console.log(calcAverage([2, 3, 7]));
console.log(calcAverage(totals));
console.log(calcAverage(tips));

/* 
Output:
[4.4, 44.25, 26.4, 88, 7.4, 15.75, 2, 220, 12.9, 7.8]
[26.4, 339.25, 202.4, 528, 44.4, 120.75, 12, 1320, 98.9, 59.8] 
4
275.19
42.89
*/