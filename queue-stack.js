'use strict';

// 8. Queue implementation using a stack

const Stack = require('./stack');

class queueStack {
    constructor() {
        this.stack1 = new Stack();
        this.stack2 = new Stack();
    }

    enqueue(item) {
        this.stack1.push(item);
    }

    dequeue() {
        if (!this.stack2.top) {
            if (!this.stack1.top) {
                return 'Nothing to dequeue.'
            }
            while (this.stack1.top) {
                let p = this.stack1.pop();
                this.stack2.push(p);
            }
        }
        return this.stack2.pop();
    }
}

const queue = new queueStack();

queue.enqueue('Kirk');
queue.enqueue('Spock');
queue.enqueue('Uhura');
queue.enqueue('Sulu');
queue.enqueue('Checkov');
console.log(queue);
queue.dequeue();
console.log(queue);