var runningSum = function (nums) {
    const arr = [nums[0]]

    for (let i = 1; i < nums.length; i++) {
        arr.push(nums[i] + arr[i - 1])
    }

    return arr
};

console.log(runningSum([1, 2, 3, 4]))

// Input: nums = [1,2,3,4]
// Output: [1,3,6,10]
// Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].