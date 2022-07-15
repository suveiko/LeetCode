var countAsterisks = function (s) {
    s = s.split('|')
    let count = 0

    for (let i = 0; i < s.length; i += 2) {
        for (let el of s[i]) {
            if (el === '*') count++
        }
    }

    return count
};


console.log(countAsterisks('yo|uar|e**|b|e***au|tifu|l'))


// Input: s = "yo|uar|e**|b|e***au|tifu|l"
// Output: 5
// Explanation: The considered characters are underlined: "yo|uar|e**|b|e***au|tifu|l".
// There are 5 asterisks considered. Therefore, we return 5.