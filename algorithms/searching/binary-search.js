"use strict";

// ------------------------------------
// ---------- Array (Sorted) ----------
// ------------------------------------

/**
 * Binary search sorted array and returns index of match. Returns -1 if no match.
 * @param {any[]} arr
 * @param {any} value
 * @returns {Number}
 */
export function binarySearch(arr, value) {
    let left = 0;
    let right = arr.length - 1;
    let mid = Math.floor(right / 2);

    while (left <= right) {
        mid = left + Math.floor((right - left) / 2);
        if (arr[mid] < value) {
            left = mid + 1;
        } else if (arr[mid] > value) {
            right = mid - 1;
        } else {
            return mid;
        }
    }
    return -1;
}

/**
 * Recursive binary search sorted array and returns index of match. Returns -1 if no match.
 * @param {any[]} arr
 * @param {any} value
 * @param {Number} left
 * @param {Number} right
 * @returns {Number}
 */
export function binarySearchRecursive(arr, value, left, right) {
    // If left/right parameters are undefined, set to first/last index
    if (left === undefined)
        left = 0;
    if (right === undefined)
        right = arr.length - 1;

    // If left greater than right, no match found
    if (left > right) return -1;

    const mid = left + Math.floor((right - left) / 2);

    if (arr[mid] < value)
        return binarySearchRecursive(arr, value, mid + 1, right);
    else if (arr[mid] > value)
        return binarySearchRecursive(arr, value, left, mid - 1);
    else
        return mid;
}