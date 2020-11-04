import { SinglyLinkedList } from './data-structures/linked-list.js';

import { createDataStructureElement } from './other-scripts/data-structure-element.js';

window.singlyLinkedList = new SinglyLinkedList();
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