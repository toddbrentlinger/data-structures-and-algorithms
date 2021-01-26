"use strict";

// ---------------------------
// ---------- Array ----------
// ---------------------------

/**
 * Linear search an array for value and returns index of match. Returns -1 if no match.
 * @param {any[]} arr
 * @param {any} value
 */
export function linearSearch(arr, value) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value)
            return i;
    }
    return -1;
}
/**
 * Improved linear search an array for value and returns index of match. Returns -1 if no match. 
 * @param {any[]} arr
 * @param {any} value
 */
export function improvedLinearSearch(arr, value) {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
        if (arr[left] === value)
            return left;
        if (arr[right] === value)
            return right;
        left++;
        right--;
    }
    return -1;
}