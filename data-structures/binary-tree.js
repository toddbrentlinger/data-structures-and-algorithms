"use strict";

export class TreeNode {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
    /*
    set left(data) {
        this.left = new TreeNode(data);
    }
    set right(data) {
        this.right = new TreeNode(data);
    }
    */
}

export class BinaryTree {
    constructor(node = null) {
        this.root = node;
    }

    getMaxDepth() {

    }

    getMaxWidth() {

    }
}