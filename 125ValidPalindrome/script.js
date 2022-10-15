var isPalindrome = function (s) {
	let reversedWord = ''

	for (let i = s.length - 1; i >= 0; i--) {
		reversedWord += s[i]
	}

	return getValidString(reversedWord) === getValidString(s)
};


const getValidString = (word) => {
	return word.replace(/[^a-z0-9]/gi,'').toLowerCase()
}

console.log(isPalindrome('A man, a plan, a canal: Panama'))


// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.