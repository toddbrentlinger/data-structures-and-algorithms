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
        const newNode = new StackNode(data);

        if (this.isEmpty()) {
            this.head = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        console.log(`${data} pushed to stack`);
    }

    pop() {
        if (this.isEmpty()) {
            console.log("Stack is Empty");
        } else {
            const poppedData = this.head.data;
            this.head = this.head.next;
            console.log(`${poppedData} popped from stack`);
            return poppedData;
        }
    }

    peek() {
        if (this.isEmpty()) {
            console.log("Stack is Empty");
        } else {
            console.log(`${this.head.data} on top of stack`);
            return this.head.data;
        }
    }

    print() {
        if (this.isEmpty()) {
            console.log("Stack is Empty");
        } else {
            let currNode = this.head;
            while (currNode !== null) {
                console.log(currNode.data);
                currNode = currNode.next;
            }
        }
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

    /** Print each element of stack (top-to-bottom) to console. */
    print() {
        if (this.top === -1) {
            console.log("Stack is Empty");
            return;
        } else {
            for (let i = this.top; i >= 0; i--) {
                console.log(this.elementArr[i]);
            }
        }
    }
}