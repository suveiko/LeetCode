var addTwoNumbers = function (l1, l2) {
	let firstList = ''
	let secondList = ''

	firstList = loopHelper(firstList, l1)
	secondList = loopHelper(secondList, l2)

	const listSum = Number(firstList) + Number(secondList)
	const arr = listSum.toString().split('').reverse()

	return arr.map(el => Number(el))
};


const loopHelper = (list, listArr) => {
	for (let i = listArr.length - 1; i >= 0; i--) {
		list += listArr[i]
	}

	return list
}

console.log(addTwoNumbers([9, 9, 9, 9, 9, 9, 9], [9, 9, 9, 9]))

// Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
// Output: [8,9,9,9,0,0,0,1]