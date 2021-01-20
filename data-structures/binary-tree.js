"use strict";

import { QueueWithLinkedList } from './queue.js';

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

export class BinaryTree {
    /**
     * @constructor
     * @param {TreeNode} node
     */
    constructor(node = null) {
        this.root = node;
    }

    /** Inorder traversal of binary tree instance. */
    inorderTraversal(node = this.root) {
        if (node === null)
            return;

        this.inorderTraversal(node.left);
        console.log(node.data);
        this.inorderTraversal(node.right);
    }

    /**
     * Insert item in binary tree at first position available in level order.
     * @param {any} item
     */
    insert(item) {
        // Check if binary tree is empty
        if (this.root === null) {
            this.root = new TreeNode(item);
            return;
        }

        let nodeQueue = new QueueWithLinkedList();
        nodeQueue.enqueue(this.root);
        let currQueueNode;

        // Do level order traversal until find empty place
        while (nodeQueue.count !== 0) {
            currQueueNode = nodeQueue.peekFront();
            nodeQueue.dequeue();

            if (currQueueNode.left === null) {
                currQueueNode.left = new TreeNode(item);
                break;
            } else {
                nodeQueue.enqueue(currQueueNode.left);
            }

            if (currQueueNode.right === null) {
                currQueueNode.right = new TreeNode(item);
                break;
            } else {
                nodeQueue.enqueue(currQueueNode.right);
            }
        }
    }

    getMaxDepth() {
        let maxDepth = 0;

        /**
         * Recursive function to increment maxDepth of tree if 
         * @param {TreeNode} treeNode
         * @param {Number} currentDepth
         */
        function checkDepth(treeNode, currentDepth) {
            if (treeNode.left !== null) {
                if (maxDepth <= currentDepth)
                    maxDepth = currentDepth + 1;

                checkDepth(treeNode.left, currentDepth + 1);
            }
            if (treeNode.right !== null) {
                if (maxDepth <= currentDepth)
                    maxDepth = currentDepth + 1;

                checkDepth(treeNode.right, currentDepth + 1);
            }
        }

        if (this.root !== null)
            checkDepth(this.root, 1);

        return maxDepth;
    }

    getMaxWidth() {

    }
}