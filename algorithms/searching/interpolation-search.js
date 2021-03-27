"use strict";

// -----------------------------------------------------------
// ---------- Array (Sorted, Uniformly Distributed) ----------
// -----------------------------------------------------------

/**
 * Interpolation search uniformly distributed sorted array and returns index of match. Returns -1 if no match.
 * @param {any[]} arr
 * @param {any} value
 * @returns {Number}
 */
export function interpolationSearch(arr, value) {
    let lo = 0;
    let hi = arr.length - 1;
    let pos;

    while (lo <= hi && value >= arr[lo] && value <= arr[hi]) {
        // If sub-array has length 1, check for match
        if (lo === hi) {
            if (arr[lo] === value)
                return lo;
            return -1;
        }

        // Probe position formula
        pos = lo + (value - arr[lo]) * (hi - lo) / (arr[hi] - arr[lo]);
        pos = Math.round(pos);

        // Check match
        if (arr[pos] === value)
            return pos;
        // Else if value is less than item at pos, calculate probe position of left sub-array
        else if (arr[pos] > value)
            hi = pos - 1;
        // Else value is more than item at pos, calculate probe position of right sub-array
        else
            lo = pos + 1;
    }
    return -1;
}