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
    childElement.innerHTML = `Class Name: ${dataStructureJSON['global-variable']}`;
    rootElement.appendChild(childElement);

    // Constructor - Header
    childElement = document.createElement('h3');
    childElement.innerHTML = "Constructor";
    rootElement.appendChild(childElement);
    // Constructor Code - Accordion Button
    childElement = rootElement.appendChild(createAccordionButton("Show Code", "Hide Code"));
    // Constructor Code - Panel
    childElement = childElement.appendChild(document.createElement('div'));
    childElement.classList.add('panel');
    childElement = childElement.appendChild(document.createElement('code'));
    childElement.innerHTML = window[dataStructureJSON['global-variable']].prototype.constructor;

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
                window[dataStructureJSON['global-variable']].prototype
            )
        );
    });
    rootElement.appendChild(childElement);

    // Static Methods
    if (dataStructureJSON.staticMethods
        && !(dataStructureJSON.staticMethods.length === 1
            && !dataStructureJSON.staticMethods[0].name)
    ) {
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
                    window[dataStructureJSON['global-variable']]
                )
            );
        });
        rootElement.appendChild(childElement);
    }

    // Methods That Use Data Structure
    if (dataStructureJSON.methodsThatUseDataStructure
        && !(dataStructureJSON.methodsThatUseDataStructure.length === 1
            && !dataStructureJSON.methodsThatUseDataStructure[0].name)
    ) {
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