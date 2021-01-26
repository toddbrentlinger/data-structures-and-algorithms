"use strict";

// ------------------------------------
// ---------- Array (Sorted) ----------
// ------------------------------------

/**
 * Jump search sorted array and returns index of match. Returns -1 is no match.
 * @param {any[]} arr
 * @param {any} value
 */
jumpSearch(value) {
    const step = Math.floor(Math.sqrt(arr.length)); // Optimal step size
    let curr = step; // Current index
    let prev = 0; // Previous index

    // Find the block where element is present
    while (arr[Math.min(curr, arr.length) - 1] < value) {
        prev = curr;
        curr += step;
        if (prev >= arr.length)
            return -1;
    }

    // Linear search for value in block beginning with prev
    while (arr[prev] < value) {
        prev++;

        // If reach next block or end of array, element is NOT present
        if (prev === Math.min(curr, arr.length))
            return -1;
    }

    // Return index if element is found
    if (arr[prev] === value)
        return prev;

    return -1;
}