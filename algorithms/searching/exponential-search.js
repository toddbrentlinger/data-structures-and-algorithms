"use strict";

import { binarySearchRecursive } from './binary-search.js';

// ------------------------------------
// ---------- Array (Sorted) ----------
// ------------------------------------

/**
 * Exponential search algorithm to return index of match. Returns -1 if no match.
 * @param {any[]} arr
 * @param {any} value
 * @returns {Number}
 */
export function exponentialSearch(arr, value) {
    // Check if element at first index
    if (arr[0] === value)
        return 0;

    const arrLength = arr.length;
    // Find index by repeated doubling until element value is greater than value to search
    let i = 1;
    while (i < arrLength && arr[i] <= value)
        i *= 2;

    // Recursive binary search for index range (i/2 - i)
    return binarySearchRecursive(arr, value, i / 2, Math.min(i, arrLength - 1));
}