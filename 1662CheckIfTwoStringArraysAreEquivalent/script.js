var arrayStringsAreEqual = function(word1, word2) {
    let firstWord = ''
    let secondWord = ''

    for (let i = 0; i < word1.length; i++) {
        firstWord += word1[i]
    }

    for (let i = 0; i < word2.length; i++) {
        secondWord += word2[i]
    }

    return firstWord === secondWord
};

console.log(arrayStringsAreEqual(["ab", "c"],["a", "bc"]))


// Input: word1 = ["ab", "c"], word2 = ["a", "bc"]
// Output: true
// Explanation:
//     word1 represents string "ab" + "c" -> "abc"
// word2 represents string "a" + "bc" -> "abc"
// The strings are the same, so return true.