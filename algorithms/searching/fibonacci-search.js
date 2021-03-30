"use strict";

// ------------------------------------
// ---------- Array (Sorted) ----------
// ------------------------------------

/**
 * Fibonacci search algorithm to return index of match. Returns -1 if no match.
 * @param {any[]} arr
 * @param {any} value
 * @returns {Number}
 */
export function fibonacciSearch(arr, value) {
    // Initialize fibonacci variables
    let fibMm2 = 0; // Second fibonacci number preceding base fibonacci number
    let fibMm1 = 1; // First fibonacci number preceding base fibonacci number
    let fibM = fibMm2 + fibMm1; // Base fibonacci number

    // Find smallest base fibonacci number greater than or equal to array length
    while (fibM < arr.length) {
        fibMm2 = fibMm1;
        fibMm1 = fibM;
        fibM = fibMm2 + fibMm1;
    }

    // Marks the eliminated range from front
    let offset = -1;
    let i;
    // While there are elements to be inspected
    while (fibM > 1) {
        // Check if fibM2 is a valid index in array
        i = Math.min(offset + fibMm2, arr.length - 1);

        // If value is greater than the value at index fibMm2, cut the sub-array from offset to i.
        // Lower each fibonacci variable to preceding fibonacci number
        if (arr[i] < value) {
            fibM = fibMm1;
            fibMm1 = fibMm2;
            fibMm2 = fibM - fibMm1;
            offset = i;
        }
        // Else If value is greater than the value at index fibMm2, cut the sub-array after i+1.
        // Lower each fibonacci variable to second preceding fibonacci number
        else if (arr[i] > value) {
            fibM = fibMm2;
            fibMm1 = fibMm1 - fibMm2;
            fibMm2 = fibM - fibMm1;
        }
        // Else value equals the value at index fibMm2
        else
            return i;
    }

    // Compare last element
    if (fibMm1 === 1 && arr[arr.length - 1] === value)
        return arr.length - 1;

    // If reach this point, value NOT found
    return -1;
}