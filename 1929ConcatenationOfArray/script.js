var getConcatenation = function(nums) {
    return [...nums,...nums]
};

console.log(getConcatenation([1,3,2,1]))

// Input: nums = [1,3,2,1]
// Output: [1,3,2,1,1,3,2,1]
// Explanation: The array ans is formed as follows:
//     - ans = [nums[0],nums[1],nums[2],nums[3],nums[0],nums[1],nums[2],nums[3]]
//     - ans = [1,3,2,1,1,3,2,1]