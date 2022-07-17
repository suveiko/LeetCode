var maximumWealth = function (accounts) {
    const arr = []

    for (let i = 0; i < accounts.length; i++) {
        arr.push(accounts[i].reduce((el, acc) => el + acc, 0))
    }

    return Math.max(...arr)
};


console.log(maximumWealth([[1, 2, 3], [3, 2, 1]]))
//
// Input: accounts = [[1,2,3],[3,2,1]]
// Output: 6
// Explanation:
//     1st customer has wealth = 1 + 2 + 3 = 6
// 2nd customer has wealth = 3 + 2 + 1 = 6
// Both customers are considered the richest with a wealth of 6 each, so return 6.