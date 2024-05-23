// JavaScript program that contains a function that finds the two numbers in a given array that sum up to the given target

// approach: 
// iterating over array multiple times to find the target
// starting at index 0 for the first loop and index 0+1 for the second
// with every iteration of first loop, starting index will be increased, second loop always starts at (starting_index_of_first_loop + 1)

// function that solves the two sum problem
function twoSumProblem(nums, target) {
    // setting last index for input array
    let last_index = nums.length - 1;
    // for loop going through given array starting at first index
    for (let i = 0; i < last_index; i++) {
        // for loop going through array starting at the index right after the one the main array starts with
        for (let j = i + 1; j <= last_index; j++) {
            // checking if sum of current two indices matches target
            // if match: returns indices
            if (nums[i] + nums[j] == target) {
                return [i, j];
            }
        }
    }
    // if no matches occur, function returns "No matches"
    return "No matches"
}

// test cases for given function
let test_cases = [
    // Standard test cases
    [[1, 2, 3, 4, 5], 7],    // Result: [1, 4] (Indices of 2 and 5 whose sum is 7)
    [[4, 7, 2, 5], 12],      // Result: [1, 3] (Indices of 7 and 5 whose sum is 12)
    [[2, 7, 11, 15], 9],     // Result: [0, 1] (Indices of 2 and 7 whose sum is 9)
    [[13, 21, 33, 74, 85], 54],    // Result: [1, 2] (Indices of 21 and 33 whose sum is 54)
    [[400, 73, 213, 50], 450],      // Result: [0, 3] (Indices of 400 and 50 whose sum is 450)
    [[22, 77, 11, 99], 110],     // Result: [2, 3] (Indices of 11 and 99 whose sum is 110)

    // Edge cases
    [[], 5],                 // Empty array edge case, Result: "No matches"
    [[1], 1],                // Single-element array edge case, Result: "No matches" (No two numbers to sum up)
    [[1, 1, 1, 1], 2],       // All elements are the same, Result: [0, 1] (Indices of first two elements whose sum is 2)
    [[1, 2, 3, 4, 5], 0],    // Target sum is 0 edge case, Result: "No matches" (No two numbers sum up to 0)
    [[-1, 0, 1, 2, -1, -4], -3],  // Test case with negative numbers, Result: [2, 5] (Indices of 1 and -4 whose sum is -3)
    [[-2, 0, 1, 3, 5], 3],   // Test case with negative and positive numbers, Result: [0, 4] (Indices of -2 and 5 whose sum is 3)
    [[1, 3, 5, 7, 9], 120],   // Target sum greater than any two numbers in the array, Result: "No matches" (No two numbers sum up to 120)
    [[5, 5, 5, 5, 5], 10],   // Again, all elements are the same and equal to the target, Result: [0, 1] (Indices of first two elements whose sum is 10)
    [[4, 6, "f", 8, 5], 13]  // contains a letter in array, Result: [3, 4] (Indices of 8 and 5 whose sum is 13)
];

// for loop that tests given test cases
for (k in test_cases) {
    console.log(twoSumProblem(test_cases[k][0], test_cases[k][1]))
}