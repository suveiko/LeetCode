var finalValueAfterOperations = function (operations) {
    let x = 0
    for (let i = 0; i < operations.length; i++) {
        operations[i] === '++X' || operations[i] === 'X++' ? x += 1 : x -= 1
    }
    return x
};

console.log(finalValueAfterOperations(["X++", "++X", "--X", "X--"]))

// Input: operations = ["--X","X++","X++"]
// Output: 1
// Explanation: The operations are performed as follows:
//     Initially, X = 0.
// --X: X is decremented by 1, X =  0 - 1 = -1.
// X++: X is incremented by 1, X = -1 + 1 =  0.
// X++: X is incremented by 1, X =  0 + 1 =  1.