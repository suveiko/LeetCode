var numIdenticalPairs = function (nums) {
    let count = 0

    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] === nums[j]) {
                count++
            }
        }
    }

    return count
};


console.log(numIdenticalPairs([1, 2, 3, 1, 1, 3]))

// Input: nums = [1,2,3,1,1,3]
// Output: 4
// Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.