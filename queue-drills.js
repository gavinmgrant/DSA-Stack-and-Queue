const Queue = require('./queue');
const QueueDouble = require('./queue-double');
const Stack = require('./stack');

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

/*
main();
console.log(main());
console.log(peek(starTrekQ));
console.log(isEmpty(starTrekQ));
console.log(display(starTrekQ));
starTrekQ.dequeue();
starTrekQ.dequeue();
console.log(display(starTrekQ));
*/

// 7. Create a queue class using doubly linked list

const starTrekQD = new QueueDouble;

const mainDouble = () => {
    starTrekQD.enqueue('Kirk');
    starTrekQD.enqueue('Spock');
    starTrekQD.enqueue('Uhura');
    starTrekQD.enqueue('Sulu');
    starTrekQD.enqueue('Checkov');

    return starTrekQD;
}

console.log(mainDouble());
console.log(starTrekQD.first);