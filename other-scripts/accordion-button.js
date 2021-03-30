"use strict";

/**
 * Create container with accordion buttion that open/closes next sibling element.
 * @param {String|Element} closedMessage
 * @param {String|Element} openedMessage
 */
export function createAccordionButton(closedMessage, openedMessage) {
    const container = document.createElement('div');
    container.classList.add('accordion-container');

    const element = container.appendChild(document.createElement('button'));
    element.classList.add('accordion');
    if (typeof closedMessage === 'string')
        element.innerHTML = closedMessage;
    else
        element.appendChild(closedMessage);

    element.addEventListener('click', function () {
        /* Toggle between adding and removing the 'active' class,
         to highlight the button that controls the panel */
        this.classList.toggle('active');

        // Toggle between hiding and showing the active panel
        const panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
            if (openedMessage !== undefined)
                this.innerHTML = closedMessage;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
            if (openedMessage !== undefined)
                this.innerHTML = openedMessage;
        }
    });

    return container;
}

/**
 * Create accordion buttion that open/closes next sibling element.
 * @param {String} closedMessage
 * @param {String} openedMessage
 */
export function createAccordionButtonOld(closedMessage, openedMessage) {
    const element = document.createElement('button');
    element.classList.add('accordion');
    element.innerHTML = closedMessage;

    element.addEventListener('click', function () {
        /* Toggle between adding and removing the 'active' class,
         to highlight the button that controls the panel */
        this.classList.toggle('active');

        // Toggle between hiding and showing the active panel
        const panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
            if (openedMessage !== undefined)
                this.innerHTML = closedMessage;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
            if (openedMessage !== undefined)
                this.innerHTML = openedMessage;
        }
    });

    return element;
}