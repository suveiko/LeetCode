var containsDuplicate = function(nums) {
    const set = new Set(nums)

    return set.size !== nums.length
};

console.log(containsDuplicate([1,2,3,1]))

// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true