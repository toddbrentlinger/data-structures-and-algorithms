"use strict";

export class QueueNode {
    /**
     * @constructor
     * @param {any} data
     */
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

export class QueueWithLinkedList {
    /**
     * @constructor
     * @param {QueueNode} firstNode
     */
    constructor(firstNode = null) {
        this.front = this.rear = firstNode;
    }

    /**
     * Adds an item to the queue.
     * @param {any} item
     */
    enqueue(item) {
        // Create node
        const tempNode = new QueueNode(item);

        // If queue is empty, assign node to front and rear
        if (this.isEmpty()) {
            this.front = this.rear = tempNode;
            return;
        }

        // Assign node to end of queue and change rear
        this.rear.next = tempNode;
        this.rear = this.rear.next;
    }

    /** Removes an item from the queue. The items are popped in the same order they are pushed.
     * If the queue is empty, then it is said to be an Underflow condition. */
    dequeue() {
        if (this.isEmpty()) {
            console.log("Queue is Empty");
            return;
        }

        // Get temp front node
        const frontNode = this.front;

        // Change front
        this.front = this.front.next;

        // If front becomes null, change rear to null
        if (this.front === null)
            this.rear = null;

        // Return temp front node data
        return frontNode.data;
    }

    /** Get the front item from the queue without removing from queue. */
    peekFront() {
        if (this.isEmpty()) {
            console.log("Queue is Empty");
            return;
        }

        return this.front.data;
    }

    /** Get the last item from the queue without removing from queue. */
    peekRear() {
        if (this.isEmpty()) {
            console.log("Queue is Empty");
            return;
        }

        return this.rear.data;
    }

    /** Return number of nodes in queue instance. */
    count() {
        let count = 0;
        let currNode = this.front;
        while (currNode !== null) {
            count++;
            currNode = currNode.next;
        }
        return count;
    }

    /** Returns if queue is empty. */
    isEmpty() {
        return (this.rear === null);
    }

    /** Print queue. */
    print() {
        if (this.isEmpty()) {
            console.log("Queue is Empty");
            return;
        }

        let tempNode = this.front;
        while (tempNode !== null) {
            console.log(`${tempNode.data} enqueued to queue`);
            tempNode = tempNode.next;
        }
    }
}

export class QueueWithArray {
    /**
     * @constructor
     * @param {Number} capacity
     */
    constructor(capacity) {
        this.itemArr = new Array(capacity);
        this.front = 0; // Index of front item
        this.rear = -1; // Index of rear item
        this.capacity = capacity; // Max number of items in queue
        this.size = 0; // Current size of queue, limited by capacity
    }

    /**
     * Adds an item to the queue. If the queue is full, then it is said to be an Overflow condition.
     * @param {any} item
     */
    enqueue(item) {
        if (this.isFull()) {
            console.log("Queue overflow");
            return;
        }

        this.rear = (this.rear + 1) % this.capacity;
        this.itemArr[this.rear] = item;
        this.size++;
        console.log(`${item} is enqueued`);
    }

    /** Removes an item from the queue. The items are popped in the same order they are pushed.
     * If the queue is empty, then it is said to be an Underflow condition. */
    dequeue() {
        if (this.isEmpty()) {
            console.log("Queue is Empty");
            return;
        }

        const frontItem = this.itemArr[this.front];
        this.front = (this.front + 1) % this.capacity;
        this.size--;
        return frontItem;
    }

    /** Get the front item from the queue. */
    peekFront() {
        if (this.isEmpty()) {
            console.log("Queue is Empty");
            return;
        }

        return this.itemArr[this.front];
    }

    /** Get the last item from the queue. */
    peekRear() {
        if (this.isEmpty()) {
            console.log("Queue is Empty");
            return;
        }

        return this.itemArr[this.rear];
    }

    /** Returns if queue is empty. */
    isEmpty() {
        return (this.size === 0);
    }

    /** Returns if queue is at capacity. */
    isFull() {
        return (this.size === this.capacity);
    }

    /** Print queue. */
    print() {
        if (this.isEmpty()) {
            console.log("Queue is Empty");
            return;
        } 

        for (let i = this.front, k = 1;
            k <= this.size;
            i = (i + 1) % this.capacity, k++) {
            console.log(`${this.itemArr[i]} enqueued to queue`);
        }
    }
}