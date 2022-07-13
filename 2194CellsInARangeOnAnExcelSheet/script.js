var cellsInRange = function (s) {
    let [ch1, num1, colon, ch2, num2] = s.split("");
    ch1 = ch1.charCodeAt();
    ch2 = ch2.charCodeAt();

    let ans = [];
    for (let ch = ch1; ch <= ch2; ch++)
        for (let num = num1; num <= num2; num++) {
            ans.push(String.fromCharCode(ch) + num);
        }
    return ans;
};

console.log(cellsInRange("A1:F1"))

// Input: s = "A1:F1"
// Output: ["A1","B1","C1","D1","E1","F1"]
// Explanation:
//     The above diagram shows the cells which should be present in the list.
//     The red arrow denotes the order in which the cells should be presented.