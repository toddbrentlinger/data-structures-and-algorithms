﻿"use strict";

export function createDataStructureMethodElement(methodJSON, globalVar) {
    if (!methodJSON) return;

    let rootElement, parentElement, childElement;

    // Data structure method element
    rootElement = document.createElement('li');
    rootElement.classList.add('data-structure-method');

    // Name
    childElement = document.createElement('h3');
    childElement.innerHTML = methodJSON.name;
    rootElement.appendChild(childElement);

    // Description
    childElement = document.createElement('p');
    childElement.classList.add('method-description');
    childElement.innerHTML = methodJSON.description;
    rootElement.appendChild(childElement);

    // Code
    
    childElement = document.createElement('code');
    childElement.innerHTML = globalVar[methodJSON['method']];
    rootElement.appendChild(childElement);
    
    return rootElement;
}