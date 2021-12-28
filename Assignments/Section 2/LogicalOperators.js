const country = 'India';
const population = 1380000000;
const language = 'Hindi';
const isIsland = false;
if (population < 50000000 && language === 'English' && isIsland === false) {
    console.log(`You should live in ${country}`);
}
else {
    console.log(`${country} does not meet yoor criteria`);
}
