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

export class BinaryTree {
    /**
     * @constructor
     * @param {TreeNode} node
     */
    constructor(node = null) {
        this.root = node;
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