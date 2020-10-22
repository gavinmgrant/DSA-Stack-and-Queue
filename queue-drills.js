const Queue = require('./queue');

const starTrekQ = new Queue();

// 6. Create a queue using singly linked list

const main = () => {
    starTrekQ.enqueue('Kirk');
    starTrekQ.enqueue('Spock');
    starTrekQ.enqueue('Uhura');
    starTrekQ.enqueue('Sulu');
    starTrekQ.enqueue('Checkov');

    return starTrekQ;
}

const peek = queue => {
    if (queue.first === null) {
        return null;
    }
    return queue.first.value;
}

const isEmpty = queue => {
    if (!queue) {
        return true;
    } else {
        return false;
    }
}

const display = queue => {
    let currNode = queue.first;
    let result = [];

    while (currNode) {
        result.push(currNode.value);
        currNode = currNode.next;
    }

    return result;
}

main();
console.log(peek(starTrekQ));
console.log(isEmpty(starTrekQ));
console.log(display(starTrekQ));