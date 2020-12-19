"use strict";

// ---------- Stack ----------

// ---------- Stack With Linked List ----------

export class StackNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

export class StackWithLinkedList {
    /**
     * @constructor
     * @param {StackNode} firstNode
     */
    constructor(firstNode = null) {
        this.head = firstNode;
    }

    /** Returns true if stack is empty, else false. */
    isEmpty() {
        return (this.head === null);
    }

    push(data) {

    }

    pop() {

    }

    peek() {

    }
}

// ---------- Stack With Array ----------

export class StackWithArray {
    /**
     * @constructor
     * @param {Number} size
     */
    contructor(size) {
        this.elementArr = new Array(size);
        this.top = -1; // Index of top element
        this.max = size; // Maximum size of stack
    }

    /**
     * Adds an item in the stack. If the stack is full, then it is said to be an Overflow condition.
     * @param {Object} item
     */
    push(item) {
        if (this.top === this.max - 1) {
            console.log("Stack Overflow");
            return;
        } else {
            this.elementArr[++this.top] = item;
        }
    }

    /** Removes an item from the stack. The items are popped in the reversed order in which they are pushed. If the stack is empty, then it is said to be an Underflow condition. */
    pop() {
        if (this.top === -1) {
            console.log("Stack is empty");
            return -1;
        } else {
            console.log(`${this.elementArr[this.top]} popped from stack`);
            return this.elementArr[this.top--];
        }
    }

    /** Returns top element of stack. */
    peek() {
        if (this.top === -1) {
            console.log("Stack is Empty");
            return;
        } else {
            console.log(`${this.elementArr[this.top]} on top of stack`);
            return this.elementArr[this.top];
        }
    }

    /** Print each element of stack to console. */
    print() {
        if (this.top === -1) {
            console.log("Stack is Empty");
            return;
        } else {
            for (let i = 0; i <= this.top; i++) {
                console.log(this.elementArr[i]);
            }
        }
    }
}