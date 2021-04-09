import { CustomArray } from './data-structures/array.js';
import { SinglyLinkedList, DoublyLinkedList } from './data-structures/linked-list.js';
import {
    StackWithLinkedList, StackWithArray,
    infixToPostfix, infixToPostfixUnitTest, evaluatePostfix, areBracketsBalanced, printNGE,
    reverseString,
    TwoStacksInArray
} from './data-structures/stack.js';
import { QueueWithLinkedList, QueueWithArray } from './data-structures/queue.js';
import { BinaryTree, TreeNode } from './data-structures/binary-tree.js';
import { BinarySearchTree } from './data-structures/binary-search-tree.js';

import { createDataStructureElement } from './other-scripts/data-structure-element.js';

import { compareArraySearchAlgorithms } from './algorithms/searching/compare-search-algorithms.js';

// Array
//window.customArray = new CustomArray();
window.CustomArray = CustomArray;
window.compareArraySearchAlgorithms = compareArraySearchAlgorithms;

// Linked List
//window.singlyLinkedList = new SinglyLinkedList();
window.SinglyLinkedList = SinglyLinkedList;
//window.doublyLinkedList = new DoublyLinkedList();
window.DoublyLinkedList = DoublyLinkedList;

// Stack
//window.stackWithLinkedList = new StackWithLinkedList();
//window.stackWithArray = new StackWithArray(10);
//window.twoStacksInArray = new TwoStacksInArray(10);
window.StackWithLinkedList = StackWithLinkedList;
window.StackWithArray = StackWithArray;
window.TwoStacksInArray = TwoStacksInArray;
//infixToPostfixUnitTest();
window.infixToPostfix = infixToPostfix;
window.evaluatePostfix = evaluatePostfix;
window.areBracketsBalanced = areBracketsBalanced;
window.printNGE = printNGE;
window.reverseString = reverseString;

// Queue
//window.queueWithLinkedList = new QueueWithLinkedList();
window.QueueWithLinkedList = QueueWithLinkedList;
window.queueWithArray = new QueueWithArray(10);
window.QueueWithArray = QueueWithArray;

// Binary Tree
//window.binaryTree = new BinaryTree();
window.BinaryTree = BinaryTree;
window.TreeNode = TreeNode;

// Binary Search Tree
window.BinarySearchTree = BinarySearchTree;

init();

function init() {
    let requestURL = './data-structures.json';
    let request = new XMLHttpRequest();
    request.open('GET', requestURL);

    request.responseType = 'json';
    request.send();

    request.onload = function () {
        const body = document.getElementById('root');

        request.response.forEach(dataStructureJSON => {
            body.appendChild(createDataStructureElement(dataStructureJSON));
        });
    };
}