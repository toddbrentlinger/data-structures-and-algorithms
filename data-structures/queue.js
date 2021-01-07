"use strict";

export class QueueWithLinkedList {
    constructor() {

    }
}

export class QueueWithArray {
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
     * If the queue is empty, then it is said to be an Underflow conidition. */
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
    front() {
        if (this.isEmpty()) {
            console.log("Queue is Empty");
            return;
        }

        return this.itemArr[this.front];
    }

    /** Get the last item from the queue. */
    rear() {
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