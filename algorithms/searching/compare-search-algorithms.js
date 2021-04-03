"use strict";

import { CustomArray } from '../../data-structures/array.js';
import { linearSearch } from './linear-search.js';

/**
 * 
 * @param {Number} length
 */
export function compareArraySearchAlgorithms(length = 10000, isRandomValues = false) {
    let arr, startTime, endTime, percentage;

    // Create array ranging in value from 0-length
    if (isRandomValues) {
        arr = CustomArray.createRandomArray(length, 0, length, true);
    }
    else {
        arr = new CustomArray(length);
        for (let i = 0; i < arr.length; i++)
            arr[i] = i;
    }

    const showSearchResults = (duration, title) => {
        percentage = (100 * duration / linearSearchDuration).toFixed(3);
        console.log(`${title} Search: ${duration.toFixed(3)} ms (${percentage}%)`);
    };

    // Linear Search
    startTime = performance.now();
    arr.forEach(value => {
        arr.linearSearch(value);
    });
    endTime = performance.now();
    const linearSearchDuration = endTime - startTime;
    console.log(`Linear Search: ${linearSearchDuration.toFixed(3)} ms`);

    // Improved Linear Search
    startTime = performance.now();
    arr.forEach(value => {
        arr.improvedLinearSearch(value);
    });
    endTime = performance.now();
    showSearchResults(endTime - startTime, "Improved Linear");

    // Jump Search
    startTime = performance.now();
    arr.forEach(value => {
        arr.jumpSearch(value);
    });
    endTime = performance.now();
    showSearchResults(endTime - startTime, "Jump");

    // Binary Search
    startTime = performance.now();
    arr.forEach(value => {
        arr.binarySearch(value);
    });
    endTime = performance.now();
    showSearchResults(endTime - startTime, "Binary");

    // Binary Search Recursive
    startTime = performance.now();
    arr.forEach(value => {
        arr.binarySearchRecursive(value);
    });
    endTime = performance.now();
    showSearchResults(endTime - startTime, "Recursive Binary");

    // Interpolation Search
    startTime = performance.now();
    arr.forEach(value => {
        arr.interpolationSearch(value);
    });
    endTime = performance.now();
    showSearchResults(endTime - startTime, "Interpolation");

    // Exponential Search
    startTime = performance.now();
    arr.forEach(value => {
        arr.exponentialSearch(value);
    });
    endTime = performance.now();
    showSearchResults(endTime - startTime, "Exponential");

    // Fibonacci Search
    startTime = performance.now();
    arr.forEach(value => {
        arr.fibonacciSearch(value);
    });
    endTime = performance.now();
    showSearchResults(endTime - startTime, "Fibonacci");
}