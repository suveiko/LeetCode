var isSameAfterReversals = function (num) {
	let reversedNum = num.toString()
	let str = ''


	for (let i = reversedNum.length - 1; i >= 0; i--) {
		str += reversedNum[i]
	}

	return Number(reversedNum) === getValidNumber(str)
};

const getValidNumber = (str) => {
	return +Number(str).toString().split('').reverse().join('')
}

console.log(isSameAfterReversals(1800))

// Input: num = 1800
// Output: false
// Explanation: Reverse num to get 81, then reverse 81 to get 18, which does not equal num.