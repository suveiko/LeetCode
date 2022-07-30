var numOfStrings = function (patterns, word) {
    let count = 0
    for (let i = 0; i < patterns.length; i++) {
        if (word.includes(patterns[i])) {
            count++
        }
    }

    return count
};

console.log(numOfStrings(["a","a","a"], "ab"))


// Input: patterns = ["a","abc","bc","d"], word = "abc"
// Output: 3
// Explanation:
//     - "a" appears as a substring in "abc".
// - "abc" appears as a substring in "abc".
// - "bc" appears as a substring in "abc".
// - "d" does not appear as a substring in "abc".
// 3 of the strings in patterns appear as a substring in word.