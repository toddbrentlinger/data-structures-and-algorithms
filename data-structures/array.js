"use strict";

export class CustomArray extends Array {
    /**
     * Binary search sorted array and returns index of match. Returns -1 if no match.
     * @param {any} value
     */
    binarySearch(value) {
        let left = 0;
        let right = this.length - 1;
        let mid = Math.floor(right / 2);

        while (left <= right) {
            mid = left + Math.floor((right - left) / 2);
            if (this[mid] < value) {
                left = mid + 1;
            } else if (this[mid] > value) {
                right = mid - 1;
            } else {
                return mid;
            }
        }
        return -1;
    }

    /**
     * Jump search sorted array and returns index of match. Returns -1 is no match.
     * @param {any} value
     */
    jumpSearch(value) {
        const step = Math.floor(Math.sqrt(this.length)); // Optimal step size
        let curr = step; // Current index
        let prev = 0; // Previous index

        // Find the block where element is present
        while (this[Math.min(curr, this.length) - 1] < value) {
            prev = curr;
            curr += step;
            if (prev >= this.length)
                return -1;
        }

        // Linear search for value in block beginning with prev
        while (this[prev] < value) {
            prev++;

            // If reach next block or end of array, element is NOT present
            if (prev === Math.min(curr, this.length))
                return -1;
        }

        // Return index if element is found
        if (this[prev] === value)
            return prev;

        return -1;
    }

    /**
     * Linear search an array for value and returns index of match. Returns -1 if no match.
     * @param {any} value
     */
    linearSearch(value) {
        for (let i = 0; i < this.length; i++) {
            if (this[i] === value)
                return i;
        }
        return -1;
    }

    /**
     * Improved linear search an array for value and returns index of match. Returns -1 if no match. 
     * @param {any} value
     */
    improvedLinearSearch(value) {
        let left = 0;
        let right = this.length - 1;
        while (left <= right) {
            if (this[left] === value)
                return left;
            if (this[right] === value)
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
    static createRandomArray(length, lowLimit = 0, highLimit = 10, isSorted = false) {
        // Check highLimit is more than lowLimit
        if (lowLimit >= highLimit) {
            console.error("lowLimit must be less than highLimit");
            return;
        }

        let arr = new CustomArray(length);
        lowLimit = Math.ceil(lowLimit);
        highLimit = Math.floor(highLimit);
        for (let i = 0; i < length; i++)
            arr[i] = Math.floor(Math.random() * (highLimit - lowLimit + 1) + lowLimit);

        // If isSorted, sort in ascending order
        if (isSorted)
            arr.sort((first, second) => first - second);

        return arr;
    }
}