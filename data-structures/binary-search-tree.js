"use strict";

export class TreeNode {
    /**
     * @constructor
     * @param {any} data
     */
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }

    setLeft(data) {
        this.left = new TreeNode(data);
    }

    setRight(data) {
        this.right = new TreeNode(data);
    }
}

export class BinarySearchTree {
    /**
     * @constructor
     * @param {TreeNode} node
     */
    constructor(node = null) {
        this.root = node;
    }

    // ------------------------------------
    // ---------- Public Methods ----------
    // ------------------------------------

    /**
     * Inorder traversal of binary search tree instance.
     * @param {TreeNode} node
     * @returns {any}
     */
    inorderTraversal(node = this.root) {
        if (node === null)
            return;

        this.inorderTraversal(node.left);
        console.log(node.data);
        this.inorderTraversal(node.right);
    }

    /**
     * Recursively searches BinarySearchTree for matching key. If found, returns node, else return null.
     * @param {any} key
     * @param {TreeNode} node
     * @returns {TreeNode}
     */
    search(key, node = this.root) {
        // Base Case: If node is null or key equals node data, return node
        if (node === null || node.data === key)
            return node;

        // If key is greater than node's data, search right branch
        if (key > node.data)
            return this.search(key, node.right);

        // If reach this point, key is less than node's data, search left branch
        return this.search(key, node.left);
    }

    /**
     * Recursive function to insert item in binary search tree.
     * @param {any} item
     * @param {TreeNode} node
     */
    insertRecursive(item, node = this.root) {
        // Base Case: If node is null, create and return new node
        if (node === null)
            return new TreeNode(item);

        // If item is greater than node data, move to right branch
        if (item > node.data)
            node.right = this.insertRecursive(item, node.right);
        // Else item is less than node data, move to left branch
        else
            node.left = this.insertRecursive(item, node.left);

        return node;
    }

    /**
     * Insert item in binary search tree.
     * @param {any} item
     */
    insert(item) {
        let currNode = this.root;

        // Check if empty BinarySearchTree
        if (this.root === null) {
            this.root = new TreeNode(item);
            return;
        }

        while (true) {
            // If currNode data is equal, return
            if (currNode.data === item)
                return;

            // If item is greater than currNode data, move to right branch
            if (currNode.data < item) {
                if (currNode.right === null) {
                    currNode.right = new TreeNode(item);
                    return;
                }
                else
                    currNode = currNode.right;
            }

            // Else item is less than currNode data, move to left branch
            else {
                if (currNode.left === null) {
                    currNode.left = new TreeNode(item);
                    return;
                }
                else
                    currNode = currNode.left;
            }
        }
    }

    /**
     * Delete node with matching key from binary search tree using recursive method.
     * @param {any} key
     */
    deleteKey(key) {
        this.root = this.deleteRecursive(key);
    }

    /**
     * Recursive method to delete node with key from binary search tree.
     * @param {any} key
     * @param {TreeNode} node
     * @returns {TreeNode}
     */
    deleteKeyRecursive(key, node = this.root) {
        // Base Case: If the tree with root at node is empty, return node
        if (node === null)
            return node;

        // If key is less than data at node
        if (key < node.data)
            node.left = this.deleteRecursive(key, node.left);
        // Else If key is more than data at node
        else if (key > node.data)
            node.right = this.deleteRecursive(key, node.right);
        // Else key is equal to data at node, delete node
        else {
            // If node has one or no children
            if (node.left === null)
                return node.right;
            else if (node.right === null)
                return node.left;

            // If reach this point, node has two children
            // Get the inorder successor (smallest in the right subtree)
            let minNode = node.right;
            let minValue = minNode.data; // in order successor value
            while (minNode !== null) {
                minValue = minNode.data;
                minNode = minNode.left;
            }

            // Assign inorder successor to node
            node.data = minValue;

            // Delete the inorder successor
            node.right = this.deleteRecursive(minValue, node.right);
        }

        return node;
    }

    // ------------------------------------
    // ---------- Static Methods ----------
    // ------------------------------------

    /** Compares insert and insertRecursive method in BinarySearchTree.
     * @param {Number} length Number of items to insert
     * @returns {Number[]}
     */
    static compareInsertMethods(length = 1000) {
        let startTime, endTime, i, binarySearchTree, binarySearchTree2, duration, duration2;

        // Create array of random values
        const arr = [...Array(length)].map(_ => Math.ceil(Math.random() * length));

        // Insert
        binarySearchTree = new BinarySearchTree();
        startTime = performance.now();
        for (i = 0; i < length; i++) {
            binarySearchTree.insert(arr[i]);
        }
        endTime = performance.now();
        duration = endTime - startTime;
        console.log(`Insert ${length} items:\n${duration} ms`);

        // Recursive Insert
        binarySearchTree2 = new BinarySearchTree();
        binarySearchTree2.root = new TreeNode(arr[0]);
        startTime = performance.now();
        for (i = 1; i < length; i++) {
            binarySearchTree2.insertRecursive(arr[i]);
        }
        endTime = performance.now();
        duration2 = endTime - startTime;
        console.log(`Recursive Insert ${length} items:\n${duration2} ms`);

        //return [binarySearchTree, binarySearchTree2];
        return [duration, duration2];
    }

    /**
     * Creates string of data points that can use to graph relationship between 
     * normal insert and recursive insert methods at increasing number of calls.
     * @param {Number} runsPerDataPoint
     * @returns {String}
     */
    static getInsertComparisonDataPoints(runsPerDataPoint = 5) {
        const horizDataPoints = [1, 10, 50, 100, 500, 1000, 5000, 10000, 50000];
        let dataPoints = [];

        for (let i = 0; i < horizDataPoints.length; i++) {
            let avgVerticalDataPoint = [0, 0];
            let durations;
            for (let j = 0; j < runsPerDataPoint; j++) {
                durations = this.compareInsertMethods(horizDataPoints[i]);
                avgVerticalDataPoint[0] += durations[0];
                avgVerticalDataPoint[1] += durations[1];
            }
            avgVerticalDataPoint[0] /= runsPerDataPoint;
            avgVerticalDataPoint[1] /= runsPerDataPoint;

            dataPoints.push({
                "x": horizDataPoints[i],
                "yNormal": avgVerticalDataPoint[0],
                "yRecursive": avgVerticalDataPoint[1]
            });
        }

        let str = "\n";
        dataPoints.forEach(dataPoint => {
            str += Object.values(dataPoint).toString() + "\n";
        });
        return str;
    }
}