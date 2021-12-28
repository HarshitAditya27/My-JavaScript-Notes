const numNeigbours = prompt('How many neighbours countries do we have?');
if (numNeigbours === 1) {
    console.log('We have 1 border');
}
else if (numNeigbours > 1) {
    console.log(`We have ${numNeigbours * 2} borders`);
}
else {
    console.log('We have no borders');
}





