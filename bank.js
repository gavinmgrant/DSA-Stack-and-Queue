'use strict';

// 10. The Ophidian Bank

class _Customer {
    constructor(value, paperwork) {
        this.value = value;
        this.next = null;
        this.paperwork = paperwork;
    }
};

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    enqueue(data) {
        const randomTF = Math.random() < 0.75;
        const node = new _Customer(data, randomTF);
        if (this.first === null) {
            this.first = node;
        }
        if (this.last) {
            this.last.next = node;
        }
        this.last = node;
        this.length++;
    }

    dequeue() {
        if (this.first === null) {
            return;
        }
        const node = this.first;
        this.first = this.first.next;
        if (node === this.last) {
            this.last = null;
        }
        this.length--;
        return node.value;
    }
};

const display = queue => {
    let currNode = queue.first;
    let result = [];

    while (currNode) {
        let pair = [];
        pair.push(currNode.value);
        pair.push(currNode.paperwork);
        result.push(pair);
        currNode = currNode.next;
    }

    return result;
};

const line = new Queue;

const createLine = () => {
    line.enqueue('Todd');
    line.enqueue('David');
    line.enqueue('Chris');
    line.enqueue('Kim');
    line.enqueue('Jen');
    line.enqueue('Mike');
    line.enqueue('Tina');
    line.enqueue('Buster');

    return line;
};

createLine();

console.log(display(line));

const bankLine = queue => {
    if (!queue.first) {
        return null;
    }
    while(queue.length > 0){
        if (queue.first.paperwork) {
            queue.dequeue();
            console.log('Current line: ' + display(queue));
        } else if (!queue.first.paperwork) {
            let name = queue.first.value
            queue.dequeue();
            queue.enqueue(name);
            console.log('Current line: ' + display(queue));
        }
    }
    console.log('All customers served!')
    return queue;
};

bankLine(line);