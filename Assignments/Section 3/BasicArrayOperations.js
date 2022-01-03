const neighbours = ['China', 'Pakistan', 'USA', 'Silicon Valley', 'Singapore'];
console.log(neighbours);
neighbours.push('Utopia');
console.log(neighbours);
neighbours.pop('Utopia');
console.log(neighbours);
if (neighbours.includes('Germany')) {
    console.log('Probably a central European country :D ');
}
else {
    console.log('Probably not a central European country :D');
}
neighbours[neighbours.indexOf('Silicon Valley')] = 'Republic of Computer Science Hub';
console.log(neighbours);