'use strict';

class _Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class QueueDouble {
    constructor() {
        this.first = null;
        this.last = null;
    }
    
    enqueue(data) {
        const node = new _Node(data);
        if (this.first === null) {
            this.first = node;
        } else {
            this.last.next = node;
            node.prev = this.last;
        }
        this.last = node;
    }

    dequeue() {
        if (this.first === null) {
            return null;
        }
        const node = this.first;
        this.first = this.first.next;
        if (node === this.last) {
            this.last = null;
        }
        return node.value;
    }
}

module.exports = QueueDouble;