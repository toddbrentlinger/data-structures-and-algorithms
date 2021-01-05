"use strict";

export class TreeNode {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

export class BinaryTree {
    constructor(node = null) {
        this.root = node;
    }
}