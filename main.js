import { SinglyLinkedList } from './data-structures/linked-list.js';
import {
    StackWithLinkedList, StackWithArray,
    infixToPostfix, infixToPostfixUnitTest, evaluatePostfix
} from './data-structures/stack.js'; 

import { createDataStructureElement } from './other-scripts/data-structure-element.js';

// Linked List
window.singlyLinkedList = new SinglyLinkedList();

// Stack
window.stackWithLinkedList = new StackWithLinkedList();
window.stackWithArray = new StackWithArray(100);
infixToPostfixUnitTest();
window.infixToPostfix = infixToPostfix;
window.evaluatePostfix = evaluatePostfix;

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