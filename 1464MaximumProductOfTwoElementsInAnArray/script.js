var maxProduct = function (nums) {
	nums.sort((a, b) => b - a)

	return (nums[0] - 1) * (nums[1] - 1)
};

console.log(maxProduct([3, 4, 5, 2]))

// Input: nums = [3,4,5,2]
// Output: 12
// Explanation: If you choose the indices i=1 and j=2 (indexed from 0)
// you will get the maximum value, that is, (nums[1]-1)*(nums[2]-1) = (4-1)*(5-1) = 3*4 = 12.