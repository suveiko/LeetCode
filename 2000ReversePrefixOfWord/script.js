var reversePrefix = function (word, ch) {
    let start = ''
    let end = word.indexOf(ch)

    for (let i = 0; i < word.length; i++) {
        debugger
        start += word[i]
        if (ch === word[i]) break
    }

    if (!word.split('').includes(ch)) {
        return word
    } else {
        return start.split('').reverse().join('') + word.slice(end + 1)
    }
};

console.log(reversePrefix("xyxzxe", 'z'))


// Input: word = "xyxzxe", ch = "z"
// Output: "zxyxxe"
// Explanation: The first and only occurrence of "z" is at index 3.
// Reverse the part of word from 0 to 3 (inclusive), the resulting string is "zxyxxe".