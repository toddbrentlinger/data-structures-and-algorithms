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
    //insert(item, node = this.root) {
    //    // Base Case: If node is null, create and return new node
    //    if (node === null)
    //        return new TreeNode(item);

    //    // If item is greater than node data, move to right branch
    //    if (item > node.data)
    //        node.right = this.insert(item, node.right);
    //    // Else item is less than node data, move to left branch
    //    else
    //        node.left = this.insert(item, node.left);
    //}

    /**
     * Insert item in binary search tree.
     * @param {any} item
     */
    insert(item) {
        let currNode = this.root;

        // Check if empty BinarySearchTree
        if (this.root === null)
            this.root = new TreeNode(item);

        while (currNode !== null) {
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
     * Delete node with item from binary search tree.
     * @param {any} item
     */
    delete(item) {

    }

    // ------------------------------------
    // ---------- Static Methods ----------
    // ------------------------------------
}