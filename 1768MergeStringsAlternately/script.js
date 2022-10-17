var mergeAlternately = function (word1, word2) {
	const arr = []
	let length = 0

	if (word1.length > word2.length) {
		length += word1.length
	} else {
		length += word2.length
	}

	for (let i = 0; i < length; i++) {
		arr.push(word1[i])
		arr.push(word2[i])
	}

	return arr.join('')
};

console.log(mergeAlternately("ab", "pqrs"))

// Input: word1 = "ab", word2 = "pqrs"
// Output: "apbqcr"
// Explanation: The merged string will be merged as so:
// 	word1:  a   b   c
// word2:    p   q   r
// merged: a p b q c r