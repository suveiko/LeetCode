var subtractProductAndSum = function (n) {
	const arr = n.toString().split('')
	let sum = 0
	let mult = 1

	for (let i = 0; i < arr.length; i++) {
		sum += Number(arr[i])
		mult *= Number(arr[i])
	}

	return mult - sum
};

console.log(subtractProductAndSum(234))

// Input: n = 234
// Output: 15
// Explanation:
// 	Product of digits = 2 * 3 * 4 = 24
// Sum of digits = 2 + 3 + 4 = 9
// Result = 24 - 9 = 15