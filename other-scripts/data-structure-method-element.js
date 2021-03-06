﻿"use strict";

import { createAccordionButton } from './accordion-button.js';

export function createDataStructureMethodElement(methodJSON, globalVar) {
    if (!methodJSON) return;

    let rootElement, childElement;

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
    // Code - Accordion Button
    rootElement.appendChild(createAccordionButton("Show Code", "Hide Code"));

    // Code - Panel
    childElement = rootElement.appendChild(document.createElement('div'));
    childElement.classList.add('panel');
    childElement = childElement.appendChild(document.createElement('code'));
    if (globalVar)
        childElement.innerHTML = globalVar[methodJSON.name.split("(")[0]];
    else
        childElement.innerHTML = window[methodJSON.name.split("(")[0]];
    
    return rootElement;
}