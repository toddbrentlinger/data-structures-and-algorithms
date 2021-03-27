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
     * @param {any} data
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
     * @param {any} data
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

    // ------------------------------------
    // ---------- Static Methods ----------
    // ------------------------------------

    /**
     * Merges two sorted SinglyLinkedList instances to one sorted list.
     * @param {SinglyLinkedList} firstHeadNode
     * @param {SinglyLinkedList} secondHeadNode
     */
    static mergeTwoSortedLists(firstHeadNode, secondHeadNode) {
        // Dummy first node to hang the result on
        let dummyNode = new Node(0);

        // Tail node initialized to dummy node
        let tail = dummyNode;

        while (true) {
            // If reaches either list, add rest of other list to end
            if (firstHeadNode === null) {
                tail.next = secondHeadNode;
                break;
            }
            if (secondHeadNode === null) {
                tail.next = firstHeadNode;
                break;
            }

            /* Compare the data of the two lists. Whichever list's data 
             is smaller, append it into tail and advance the head to the
             next node. */
            if (firstHeadNode.data <= secondHeadNode.data) {
                tail.next = firstHeadNode;
                firstHeadNode = firstHeadNode.next;
            } else {
                tail.next = secondHeadNode;
                secondHeadNode = secondHeadNode.next;
            }

            // Advance the tail
            tail = tail.next;
        }
        return dummyNode.next;
    }

    // ----------------------------
    // ---------- Search ----------
    // ----------------------------

    /**
     * 
     * @param {Node} sublistHead
     * @param {Node} fullListHead
     * @returns {Number}
     */
    static sublistSearch(sublistHead, fullListHead) {
        // If both head nodes are null, return true
        if (sublistHead === null && fullListHead === null)
            return true;

        // If reach this point, at least one head node is NOT null
        // If one head node is null, return false
        if (sublistHead === null || fullListHead === null)
            return false;

        // If reach this point, both head nodes are NOT null
        let sub = sublistHead;
        let full = fullListHead;

        while (full !== null) {
            // If both node data values are equal
            if (sub.data === full.data) {
                // If sub.next is null, sublist is in full list, return true
                if (sub.next === null)
                    return true;
                // Increment sub to next node
                sub = sub.next;
            } else // Else node data values are NOT equal, reset sub to sublistHead
                sub = sublistHead;

            // Increment full to next node
            full = full.next;
        }
        // If reach here, no match, return false
        return false;
    }

    static sublistSearchUnitTests() {
        const fullListStr = "0->1->2->3->4->5";
        const fullList = new SinglyLinkedList();
        fullList.append(0);
        fullList.append(1);
        fullList.append(2);
        fullList.append(3);
        fullList.append(4);
        fullList.append(5);
        console.log("Full List: " + fullListStr);

        // Substring in Middle, return true
        const subListStr = "2->3->4";
        const subList = new SinglyLinkedList();
        subList.append(2);
        subList.append(3);
        subList.append(4);
        console.log(`Sub: ${subListStr}\nTrue: ${this.sublistSearch(subList.head, fullList.head)}`);

        // Substring at beginning, return true
        const subList1Str = "0->1->2";
        const subList1 = new SinglyLinkedList();
        subList1.append(0);
        subList1.append(1);
        subList1.append(2);
        console.log(`Sub: ${subList1Str}\nTrue: ${this.sublistSearch(subList1.head, fullList.head)}`);

        // Substring at end, return true
        const subList2Str = "3->4->5";
        const subList2 = new SinglyLinkedList();
        subList2.append(3);
        subList2.append(4);
        subList2.append(5);
        console.log(`Sub: ${subList2Str}\nTrue: ${this.sublistSearch(subList2.head, fullList.head)}`);

        // Substring not in full string, return false
        const subList3Str = "6->7->8";
        const subList3 = new SinglyLinkedList();
        subList3.append(6);
        subList3.append(7);
        subList3.append(8);
        console.log(`Sub: ${subList3Str}\nFalse: ${this.sublistSearch(subList3.head, fullList.head)}`);

        // Substring longer than full string AND full string at beginning of substring, return false
        const subList4Str = "0->1->2->3->4->5->6";
        const subList4 = new SinglyLinkedList();
        subList4.append(0);
        subList4.append(1);
        subList4.append(2);
        subList4.append(3);
        subList4.append(4);
        subList4.append(5);
        subList4.append(6);
        console.log(`Sub: ${subList4Str}\nFalse: ${this.sublistSearch(subList4.head, fullList.head)}`);

        // Substring longer than full string AND full string at end of substring, return false
        const subList5Str = "-1->0->1->2->3->4->5";
        const subList5 = new SinglyLinkedList();
        subList5.append(-1);
        subList5.append(0);
        subList5.append(1);
        subList5.append(2);
        subList5.append(3);
        subList5.append(4);
        subList5.append(5);
        console.log(`Sub: ${subList5Str}\nFalse: ${this.sublistSearch(subList5.head, fullList.head)}`);

        // Substring longer than full string AND full string NOT in substring, return false
        const subList6Str = "10->11->12->13->14->15->16";
        const subList6 = new SinglyLinkedList();
        subList6.append(10);
        subList6.append(11);
        subList6.append(12);
        subList6.append(13);
        subList6.append(14);
        subList6.append(15);
        subList6.append(16);
        console.log(`Sub: ${subList6Str}\nFalse: ${this.sublistSearch(subList6.head, fullList.head)}`);

        // Beginning of substring at end of full string, return false
        const subList7Str = "4->5->6";
        const subList7 = new SinglyLinkedList();
        subList7.append(4);
        subList7.append(5);
        subList7.append(6);
        console.log(`Sub: ${subList7Str}\nFalse: ${this.sublistSearch(subList7.head, fullList.head)}`);

        // Strings are equal, return true
        const subList8 = new SinglyLinkedList();
        subList8.append(0);
        subList8.append(1);
        subList8.append(2);
        subList8.append(3);
        subList8.append(4);
        subList8.append(5);
        console.log(`Sub: ${fullListStr}\nTrue: ${this.sublistSearch(subList8.head, fullList.head)}`);
    }

    // --------------------------
    // ---------- Sort ----------
    // --------------------------

    /**
     * Merge sort linked list.
     * @param {Node} headNode
     */
    static mergeSort(headNode) {
        // Base case
        if (headNode === null || headNode.next === null)
            return headNode;

        // Get middle of the list
        const middle = SinglyLinkedList.getMiddle(headNode);
        const nextOfMiddle = middle.next;

        // Set the next of middle to null
        middle.next = null;

        // Apply mergeSort on left list
        const left = SinglyLinkedList.mergeSort(headNode);

        // Apply mergeSort on right lest
        const right = SinglyLinkedList.mergeSort(nextOfMiddle);

        // Merge the left and right lists
        const sortedList = SinglyLinkedList.mergeTwoSortedLists(left, right);
        return sortedList;
    }

    // -----------------------------
    // ---------- Utility ----------
    // -----------------------------

    /**
     * Utility function to get middle of the linked list.
     * @param {Node} headNode
     */
    static getMiddle(headNode) {
        // Base case
        if (headNode === null)
            return headNode;

        let fastRef = headNode.next;
        let slowRef = headNode;

        // Move fastRef by two and slowRef by one
        // After loop, slowRef will refer to middle node
        while (fastRef !== null) {
            fastRef = fastRef.next;
            if (fastRef !== null) {
                slowRef = slowRef.next;
                fastRef = fastRef.next;
            }
        }
        return slowRef;
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
        this.prev = null;
    }
}

/** @todo Can extend SinglyLinkedList to use some of the same methods
 *        like print(), getLast(), etc. */
export class DoublyLinkedList {
    constructor(firstNode = null) {
        this.head = firstNode;
    }

    /**
     * Inserts new node on the front of the DoublyLinkedList.
     * @param {any} item
     */
    push(item) {
        // Create new node
        let newNode = new DoublyLinkedNode(item);

        // If list is NOT empty, change 'next' of new node and 'prev' of head node
        if (this.head !== null) {
            newNode.next = this.head; // Assign new node 'next' to previous head node
            this.head.prev = newNode; // Assign prev head node 'prev' to new node
        }

        // Assign new node to head
        this.head = newNode;
    }

    /**
     * Creates new node with item parameter and adds to end of DoublyLinkedList.
     * @param {any} item
     */
    append(item) {
        const newNode = new DoublyLinkedNode(item);

        // If list is empty, assign new node to head
        if (this.head === null) {
            this.head = newNode;
        } else {
            const lastNode = this.getLast();
            lastNode.next = newNode;
            newNode.prev = lastNode;
        }
    }

    /**
     * Creates new node with item parameter and inserts after prevNode parameter.
     * @param {DoublyLinkedNode} prevNode
     * @param {any} item
     */
    insertAfter(prevNode, item) {
        // Check if prevNode is null
        if (prevNode === null) {
            console.error("The previous node must NOT be null");
            return;
        }

        // Create new node
        let newNode = new DoublyLinkedNode(item);

        // Assign prevNode 'next' node's 'prev' property to new node
        if (prevNode.next !== null)
            prevNode.next.prev = newNode;

        // Assign new node 'next' and 'prev' properties
        newNode.next = prevNode.next;
        newNode.prev = prevNode;

        // Assign prevNode 'next' property to new node
        prevNode.next = newNode;
    }

    /**
     * Creates new node with item parameter and inserts before nextNode parameter.
     * @param {DoublyLinkedNode} nextNode
     * @param {any} item
     */
    insertBefore(nextNode, item) {
        // Check if nextNode is null
        if (nextNode === null) {
            console.error("The next node must NOT be null");
            return;
        }

        // Create new node
        let newNode = new DoublyLinkedNode(item);

        // If nextNode is head, assign new node to head
        if (nextNode.prev === null)
            this.head = newNode;
        else // Else assign nextNode 'prev' node's 'next' property to new node
            nextNode.prev.next = newNode;

        // Assign new node 'next' and 'prev' properties
        newNode.prev = nextNode.prev;
        newNode.next = nextNode;

        // Assign nextNode 'prev' property to new node
        nextNode.prev = newNode;
    }

    /** Returns last node in DoublyLinkedList instance. */
    getLast() {
        let tempNode = this.head;
        if (tempNode !== null) {
            while (tempNode.next !== null) {
                tempNode = tempNode.next;
            }
        }
        return tempNode;
    }

    /**
     * 
     * @param {DoublyLinkedNode} node
     */
    deleteNode(nodeToDelete) {
        if (this.head === null || nodeToDelete === null)
            return;

        // If nodeToDelete is head node, change head node to second node
        if (this.head === nodeToDelete)
            this.head = nodeToDelete.next;

        // If nodeToDelete 'next' node is NOT null, assign it's 'prev' property
        if (nodeToDelete.next !== null)
            nodeToDelete.next.prev = nodeToDelete.prev;

        // If nodeToDelete 'prev' node is NOT null, assign it's 'next' property
        if (nodeToDelete.prev !== null)
            nodeToDelete.prev.next = nodeToDelete.next;
    }

    /** Reverse order of nodes in DoublyLinkedList instance. */
    reverse() {
        let prevNode = null;
        let currNode = this.head;
        while (currNode !== null) {
            // Assign prevNode
            prevNode = currNode.prev;

            // Switch 'prev' and 'next' properties of currNode
            currNode.prev = currNode.next;
            currNode.next = prevNode;

            // Increment currNode to next node in list, which is now assigned to 'prev' property
            currNode = currNode.prev;
        }

        // Assign new head
        if (prevNode !== null)
            this.head = prevNode.prev;
    }

    /** Print each node in DoubleLinkedList instance to console. */
    print() {
        let currNode = this.head;
        while (currNode !== null) {
            console.log(currNode.data);
            currNode = currNode.next;
        }
    }

    size() {

    }

    sizeRecursive(node = this.head) {

    }

    /** Clears DoublyLinkedList instance. */
    clear() {
        this.head = null;
    }
}