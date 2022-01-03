const myCountry = {
    name: "India",
    capital: "New Delhi",
    language: ['Hindi', 'Telugu', 'Tamil', 'English', 'Kannada', 'Malayalam', 'Bengali'],
    population: 1350000000,
    neighbours: ['China', 'Pakistan', 'USA', 'Singapore'],
    describe: function () {
        console.log(`${myCountry.name} has ${myCountry.population} ${myCountry.language[0]} speaking people ${myCountry.neighbours.length} neighbours, and a capital called ${myCountry.capital}`);
    },
    checkIsland: function (this) {
        this.isIsland = this.neighbours.length === 0 ? true : false;
    }
};
myCountry.describe();
myCountry.checkIsland();
console.log(myCountry);