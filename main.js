import { SinglyLinkedList } from './data-structures/linked-list.js';
import {
    StackWithLinkedList, StackWithArray,
    infixToPostfix, infixToPostfixUnitTest, evaluatePostfix, areBracketsBalanced, printNGE,
    reverseString,
    TwoStacksInArray
} from './data-structures/stack.js';
import { QueueWithLinkedList, QueueWithArray } from './data-structures/queue.js';
import { BinaryTree, TreeNode } from './data-structures/binary-tree.js';

import { createDataStructureElement } from './other-scripts/data-structure-element.js';

// Linked List
window.singlyLinkedList = new SinglyLinkedList();

// Stack
window.stackWithLinkedList = new StackWithLinkedList();
window.stackWithArray = new StackWithArray(10);
//infixToPostfixUnitTest();
window.infixToPostfix = infixToPostfix;
window.evaluatePostfix = evaluatePostfix;
window.areBracketsBalanced = areBracketsBalanced;
window.printNGE = printNGE;
window.reverseString = reverseString;
window.twoStacksInArray = new TwoStacksInArray(10);

// Queue
window.queueWithLinkedList = new QueueWithLinkedList();
window.queueWithArray = new QueueWithArray(10);
window.QueueWithArray = QueueWithArray;

// Binary Tree
window.binaryTree = new BinaryTree();
window.TreeNode = TreeNode;

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