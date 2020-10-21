const Stack = require('./stack');

const starTrek = new Stack();

const main = () => {
    starTrek.push('Kirk');
    starTrek.push('Spock');
    starTrek.push('McCoy');
    starTrek.push('Scotty');

    return starTrek;
}

main();

// 2. Useful methods for a stack

const peek = stack => {
    return stack.top.data;
}

const isEmpty = stack => {
    if (!stack.top) {
        return true;
    } else {
        return false;
    }
};

const display = stack => {
    let currNode = stack.top;
    let result = [];

    while (currNode) {
        result.push(currNode.data);
        currNode = currNode.next;
    }

    return result;
};

console.log(peek(starTrek));
const testStack = new Stack();
console.log(isEmpty(testStack));
console.log(display(starTrek));