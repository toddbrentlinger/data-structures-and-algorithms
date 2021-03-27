"use strict";

export class CustomArray extends Array {
    /**
     * Exponential search algorithm to return index of match. Returns -1 if no match.
     * @param {any} value
     */
    exponentialSearch(value) {
        // Check if element at first index
        if (this[0] === value)
            return 0;

        const arrLength = this.length;
        // Find index by repeated doubling until element value is greater than value to search
        let i = 1;
        while (i < arrLength && this[i] <= value)
            i *= 2;

        // Recursive binary search for index range (i/2 - i)
        return this.binarySearchRecursive(value, i / 2, Math.min(i, arrLength - 1));
    }

    /**
     * Interpolation search uniformly distributed sorted array and returns index of match. Returns -1 if no match.
     * @param {any} value
     */
    interpolationSearch(value) {
        let lo = 0;
        let hi = this.length - 1;
        let pos;

        while (lo <= hi && value >= this[lo] && value <= this[hi]) {
            // If sub-array has length 1, check for match
            if (lo === hi) {
                if (this[lo] === value)
                    return lo;
                return -1;
            }

            // Probe position formula
            pos = lo + (value - this[lo]) * (hi - lo) / (this[hi] - this[lo]);
            pos = Math.round(pos);

            // Check match
            if (this[pos] === value)
                return pos;
            // Else if value is less than item at pos, calculate probe position of left sub-array
            else if (this[pos] > value)
                hi = pos - 1;
            // Else value is more than item at pos, calculate probe position of right sub-array
            else
                lo = pos + 1;
        }
        return -1;
    }

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
     * Recursive binary search sorted array and returns index of match. Returns -1 if no match.
     * @param {any} value
     * @param {Number} left
     * @param {Number} right
     */
    binarySearchRecursive(value, left, right) {
        if (left === undefined)
            left = 0;
        if (right === undefined)
            right = this.length - 1;

        if (left > right) return -1;

        const mid = left + Math.floor((right - left) / 2);

        if (this[mid] < value)
            return this.binarySearchRecursive(value, mid + 1, right);
        else if (this[mid] > value)
            return this.binarySearchRecursive(value, left, mid - 1);
        else
            return mid;
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