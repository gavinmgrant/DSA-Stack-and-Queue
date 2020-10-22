'use strict';

const Queue = require('./queue');

// 9. Square dance pairing

const women = new Queue();
const men = new Queue();

const createQueues = () => {
    women.enqueue('Jane');
    men.enqueue('Frank');
    men.enqueue('John');
    men.enqueue('Sherlock');
    women.enqueue('Madonna');
    men.enqueue('David');
    men.enqueue('Christopher');
    women.enqueue('Beyonce');

    return women, men;
}

createQueues();

const display = queue => {
    let currNode = queue.first;
    let result = [];

    while (currNode) {
        result.push(currNode.value);
        currNode = currNode.next;
    }

    return result;
}

const pairDancers = () => {
    const pairs = new Queue;
    while (women.first !== null) {
        let woman = women.dequeue();
        let man = men.dequeue();
        let couple = [];
        couple.push(woman);
        couple.push(man);
        pairs.enqueue(couple);
    }

    return pairs;
}

console.log(display(pairDancers()));