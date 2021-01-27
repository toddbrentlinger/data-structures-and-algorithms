"use strict";

import { createDataStructureMethodElement } from './data-structure-method-element.js';
import { createAccordionButton } from './accordion-button.js';

export function createDataStructureElement(dataStructureJSON) {
    if (!dataStructureJSON) return;

    let rootElement, childElement;

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

    // Methods - Header
    childElement = document.createElement('h3');
    childElement.innerHTML = "Methods";
    rootElement.appendChild(childElement);
    // Methods
    childElement = document.createElement('ul');
    childElement.classList.add('data-structure-method-container');
    dataStructureJSON.methods.forEach(methodJSON => {
        if (!methodJSON.name)
            return;

        childElement.appendChild(
            createDataStructureMethodElement(
                methodJSON,
                window[dataStructureJSON['global-variable']]
            )
        );
    });
    rootElement.appendChild(childElement);

    // Static Methods - Header
    childElement = document.createElement('h3');
    childElement.innerHTML = "Static Methods";
    rootElement.appendChild(childElement);
    // Static Methods
    childElement = document.createElement('ul');
    childElement.classList.add('data-structure-method-container');
    dataStructureJSON.staticMethods.forEach(staticMethodJSON => {
        if (!staticMethodJSON.name)
            return;

        childElement.appendChild(
            createDataStructureMethodElement(
                staticMethodJSON,
                window[dataStructureJSON['global-variable']].constructor
            )
        );
    });
    rootElement.appendChild(childElement);

    // Methods That Use Data Structure
    if (dataStructureJSON.hasOwnProperty('methodsThatUseDataStructure')) {
        // Header
        childElement = document.createElement('h3');
        childElement.innerHTML = "Methods That Use Data Structure";
        rootElement.appendChild(childElement);

        // Code
        childElement = document.createElement('ul');
        childElement.classList.add('data-structure-method-container');
        dataStructureJSON.methodsThatUseDataStructure.forEach(methodJSON => {
            if (!methodJSON.name)
                return;

            childElement.appendChild(
                createDataStructureMethodElement(methodJSON)
            );
        });
        rootElement.appendChild(childElement);
    }

    return rootElement;
}