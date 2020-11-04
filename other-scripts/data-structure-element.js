"use strict";

import { createDataStructureMethodElement } from './data-structure-method-element.js';

export function createDataStructureElement(dataStructureJSON) {
    if (!dataStructureJSON) return;

    let rootElement, parentElement, childElement;

    // Data structure element
    rootElement = document.createElement('section');
    rootElement.classList.add('data-structure');

    // Header (name)
    childElement = document.createElement('h2');
    childElement.innerHTML = dataStructureJSON['data-structure'];
    rootElement.appendChild(childElement);

    // Global variable name
    childElement = document.createElement('p');
    childElement.innerHTML = `Global Instance Variable: ${dataStructureJSON['global-variable']}`;
    rootElement.appendChild(childElement);

    // Methods
    childElement = document.createElement('ul');
    childElement.classList.add('data-structure-method-container');
    dataStructureJSON.methods.forEach(methodJSON => {
        childElement.appendChild(
            createDataStructureMethodElement(
                methodJSON,
                window[dataStructureJSON['global-variable']]
            )
        );
    });
    rootElement.appendChild(childElement);

    return rootElement;
}