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

    /** Returns number of nodes in SinglyLinkedList instance(recursively). */
    sizeRecursive(node = this.head) {
        if (node === null) return 0;

        return 1 + this.sizeRecursive(node.next);
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
        } else {
            console.error(`Key: {${key}} NOT in SinglyLinkedList instance.`);
        }
    }

    /**
     * Deletes node at zero-indexed position in SinglyLinkedList instance.
     * @param {Number} position 
     */
    deleteNodeAtPosition(position) {
        // Check if SinglyLinkedList instance is empty
        if (this.head === null) {
            console.error("SinglyLinkedList instance is empty");
            return;
        }
        
        // Check if delete first node
        if (position === 0) {
            this.head = this.head.next;
            return;
        }

        let tempNode = this.head;

        // Find previous node of the node to be deleted
        for (let i = 0; tempNode !== null && i < position - 1; i++) {
            tempNode = tempNode.next;
        }

        // If position is more than total number of nodes
        if (tempNode === null || tempNode.next === null) {
            console.error(`Position {${position}} NOT in SinglyLinkedList instance.`);
            return;
        }

        // Assign previous node 'next' property to node to be deleted's 'next' property
        tempNode.next = tempNode.next.next;

        /*
        let currPosition = 1;
        let currNode = this.head.next;
        let prevNode = this.head;

        while (currNode !== null && currPosition < position) {
            prevNode = currNode;
            currNode = currNode.next;
            currPosition++;
        }

        if (currPosition === position) {
            prevNode.next = currNode.next;
        } else {
            console.error(`Position {${position}} NOT in SinglyLinkedList instance.`);
        }
        */
    }

    /**
     * Checks whether the a node with matching key is present in SinglyLinkedList instance.
     * @param {Object} key
     */
    search(key) {
        let currNode = this.head;

        while (currNode !== null) {
            if (currNode.data === key) {
                return true;
            }
            currNode = currNode.next;
        }
        return false;
    }

    /**
     * Returns data of node at index 'n'.
     * @param {Number} index
     */
    getNth(index) {
        let currIndex = 0;
        let currNode = this.head;

        while (currNode !== null) {
            if (currIndex === index) {
                return currNode.data;
            }
            currIndex++;
            currNode = currNode.next;
        }
        // SinglyLinkedList instance does NOT contain 'index'
        console.error(`SinglyLinkedList instance does NOT contain index: ${index}`);
    }

    /**
     * Returns data of node at index 'n'(recursively).
     * @param {Node} node
     * @param {Number} index
     */
    getNthRecursive(node = this.head, index) {
        if (index === 0) {
            return node.data;
        } else {
            return this.getNthRecursive(node.next, index - 1);
        }

    }

    /** Reverse order of nodes in SinglyLinkedList instance. */
    reverse() {
        let prevNode = null;
        let currNode = this.head;
        let nextNode = null;

        while (currNode !== null) {
            // Before changing current node 'next' property, assign it to next node
            nextNode = currNode.next;

            // Set current node 'next' property to previous node
            currNode.next = prevNode;

            // Set node values for next loop
            prevNode = currNode;
            currNode = nextNode;
        }

        // Set new head to last node which is previous node after loop ends
        this.head = prevNode;
    }

    /**
     * Reverse SinglyLinkedList instance in groups of given size.
     * @param {Number} k
     * @param {Node} headNode
     */
    reverseEveryKNodes(k, headNode) {
        if (headNode === undefined) {
            this.head = this.reverseEveryKNodes(k, this.head);
            return;
        }

        let prevNode = null;
        let currNode = headNode;
        let nextNode = null;
        let count = 0;

        // Reverse first k nodes of singly linked list segment
        while (count < k && currNode !== null) {
            // Before changing current node 'next' property, assign it to next node
            nextNode = currNode.next;

            // Set current node 'next' property to previous node
            currNode.next = prevNode;

            // Set node values for next loop
            prevNode = currNode;
            currNode = nextNode;

            // Increment count
            count++;
        }

        /* After loop, next node and current node is (k+1)th node 
         * and previous node is kth node.
         * Recursively call method with (k+1)th node as parameter
         * and assign result to 'next' property of head node of this segment
         * of the SinglyLinkedList.
         */
        if (nextNode !== null) {
            headNode.next = this.reverseEveryKNodes(k, nextNode);
        }

        // Return kth node (previous node)
        return prevNode;
    }

    // TEMP?

    /**
     * Creates new SinglyLinkedList with n-number of nodes with values ranging from 0-(n-1).
     * @param {Number} n
     * @param {Boolean} isRandom
     */
    createNNodes(n, isRandom = false) {
        this.head = null;

        for (let i = 0; i < n; i++) {
            if (isRandom) {
                this.append(
                    Math.floor(Math.random() * Math.floor(n))
                );
            } else {
                this.append(i);
            }
        }
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