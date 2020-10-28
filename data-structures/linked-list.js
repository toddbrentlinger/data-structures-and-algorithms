"use strict";

// ---------- Singly Linked List ----------

/* TODO:
 */

export class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

export class SinglyLinkedList {
    /**
     * @constructor
     * @param {Node} firstNode
     */
    constructor(firstNode = null) {
        this.head = firstNode;
    }

    /** Returns number of nodes in SinglyLinkedList instance. */
    size() {
        let count = 0;
        let node = this.head;
        while (node) {
            count++;
            node = node.next;
        }
        return count;
    }

    /** Clears SinglyLinkedList instance. */
    clear() {
        this.head = null;
    }

    /** Prints each node in SinglyLinkedList instance to console. */
    print() {
        let node = this.head;
        while (node) {
            console.log(`${node.data}\n`);
            node = node.next;
        }
    }                  

    /** Returns last node in SinglyLinkedList instance. */
    getLast() {
        let lastNode = this.head;
        if (lastNode) {
            while (lastNode.next) {
                lastNode = lastNode.next;
            }
        }
        return lastNode;
    }

    /**
     * Creates new node with data parameter and adds to beginning to SinglyLinkedList.
     * @param {Object} data
     */
    push(data) {
        let newNode = new Node(data);

        // Assign newNode next property to current head node
        newNode.next = this.head;

        // Assign newNode to head
        this.head = newNode;
    }

    /**
     * Creates new node with data parameter and adds to end of SinglyLinkedList.
     * @param {Object} data
     */
    append(data) {
        const newNode = new Node(data);
        let lastNode = this.getLast();

        // If SinglyLinkedList is empty, add newNode to beginning
        if (!lastNode) {
            this.head = newNode;
        } else { // Else add to last node next property
            lastNode.next = newNode;
        }
    }

    /**
     * Creates new node with data parameter and inserts after prevNode parameter.
     * @param {Node} prevNode
     * @param {Object} data
     */
    insertAfter(prevNode, data) {
        // Check if prevNode is null
        if (!prevNode) {
            console.error("The previous node must NOT be null");
            return;
        }

        let newNode = new Node(data);

        // Assign next property of prevNode to newNode
        newNode.next = prevNode.next;

        // Assign newNode to prevNode next property
        prevNode.next = newNode;
    }

    /**
     * Given a 'key', delete the first occurrence of this key in the SinglyLinkedList.
     * @param {Object} key
     */
    deleteNodeWithMatchingKey(key) {
        // Check if head node is null
        if (this.head === null) {
            console.error("SinglyLinkedList instance is empty");
            return;
        }

        // Check if head node matches key
        if (this.head.data === key) {
            this.head = this.head.next;
            return;
        }

        let prevNode = this.head;
        let currNode = this.head.next;

        while (currNode !== null && currNode.data !== key) {
            prevNode = currNode;
            currNode = currNode.next;
        }

        // If currNode is null, reached end of SinglyLinkedList without finding match
        if (currNode !== null) {
            prevNode.next = currNode.next;
        }
    }

    /**
     * Deletes node in SinglyLinkedList instance.
     * @param {Node} node
     */
    deleteNodeAtPosition(node) {

    }
}

// ---------- Circular Linked List ----------

export class CircularLinkedList {

}

// ---------- Doubly Linked List ----------

export class DoublyLinkedNode extends Node {
    constructor(data) {
        super(data);
        this.prevNode = null;
    }
}

export class DoublyLinkedList {

}