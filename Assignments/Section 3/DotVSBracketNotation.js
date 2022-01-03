const myCountry = {
    name: "India",
    capital: "New Delhi",
    language: ['Hindi', 'Telugu', 'Tamil', 'English', 'Kannada', 'Malayalam', 'Bengali'],
    population: 1350000000,
    neighbours: ['China', 'Pakistan', 'USA', 'Singapore']
};
console.log(`${myCountry.name} has ${myCountry.population} ${myCountry.language[0]} speaking people ${myCountry.neighbours.length} neighbours, and a capital called ${myCountry.capital}`);
myCountry.population += 2000000;
console.log(myCountry.population)
myCountry['population'] -= 2000000;
console.log(myCountry.population)