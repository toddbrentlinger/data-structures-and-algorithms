"use strict";

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
    childElement = document.createElement('button');
    childElement.classList.add('accordion');
    childElement.innerHTML = "Show Code";
    childElement.addEventListener('click', function () {
        /* Toggle between adding and removing the 'active' class,
         to highlight the button that controls the panel */
        this.classList.toggle('active');

        // Toggle between hiding and showing the active panel
        const panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
            this.innerHTML = "Show Code";
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
            this.innerHTML = "Hide Code";
        }
    });
    rootElement.appendChild(childElement);

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