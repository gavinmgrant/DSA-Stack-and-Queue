const Stack = require('./stack');

const starTrek = new Stack();

const main = () => {
    starTrek.push('Kirk');
    starTrek.push('Spock');
    starTrek.push('McCoy');
    starTrek.push('Scotty');

    return starTrek;
}

console.log(main());