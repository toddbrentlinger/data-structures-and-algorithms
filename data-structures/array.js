"use strict";

/**
 * Binary search sorted array and returns index of match. Returns -1 if no match.
 * @param {any[]} arr
 * @param {any} value
 */
export function binarySearchArray(arr, value) {
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
 * Linear search an array for value and returns index of match. Returns -1 if no match.
 * @param {any[]} arr
 * @param {any} value
 */
export function linearSearchArray(arr, value) {
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
export function improvedLinearSearchArray(arr, value) {
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

/**
 * Creates array of specified length with random values in specified range 
 * that can be sorted in ascending order.
 * @param {Number} length
 * @param {Number} lowLimit
 * @param {Number} highLimit
 * @param {Boolean} isSorted
 */
export function createRandomArray(length, lowLimit = 0, highLimit = 10, isSorted = false) {
    // Check highLimit is more than lowLimit
    if (lowLimit >= highLimit) {
        console.error("lowLimit must be less than highLimit");
        return;
    }

    let arr = new Array(length);
    lowLimit = Math.ceil(lowLimit);
    highLimit = Math.floor(highLimit);
    for (let i = 0; i < length; i++)
        arr[i] = Math.floor(Math.random() * (highLimit - lowLimit + 1) + lowLimit);

    // If isSorted, sort in ascending order
    if (isSorted)
        arr.sort((first, second) => first - second);

    return arr;
}