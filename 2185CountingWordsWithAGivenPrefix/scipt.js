var prefixCount = function (words, pref) {
    let counter = 0

    for (let i = 0; i < words.length; i++) {
        if (pref === words[i].slice(0, pref.length)) {
            counter++
        }
    }

    return counter
};


console.log(prefixCount(["leetcode","win","loops","success"], "code"))


// Input: words = ["pay","attention","practice","attend"], pref = "at"
// Output: 2
// Explanation: The 2 strings that contain "at" as a prefix are: "attention" and "attend".
// words = ["leetcode","win","loops","success"], pref = "code"