"use strict";

// ------------------------------------
// ---------- Array (Sorted) ----------
// ------------------------------------

/**
 * Binary search sorted array and returns index of match. Returns -1 if no match.
 * @param {any[]} arr
 * @param {any} value
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