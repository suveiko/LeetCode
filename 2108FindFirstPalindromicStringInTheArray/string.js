var firstPalindrome = function(words) {
    let str = ''

    for (let i = 0; i < words.length; i++) {
        if (words[i] === words[i].split('').reverse().join('')) {
            str += words[i]
            break
        }
    }

    return str
};

console.log(firstPalindrome(["abc","car","ada","racecar","cool"]))

// Input: words = ["abc","car","ada","racecar","cool"]
// Output: "ada"
// Explanation: The first string that is palindromic is "ada".
//     Note that "racecar" is also palindromic, but it is not the first.