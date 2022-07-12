var numJewelsInStones = function (jewels, stones) {
    const splitJewels = jewels.split('')
    const splitStones = stones.split('')

    return splitStones.map(st => splitJewels.filter(jew => st === jew)).join('').length
};

console.log(numJewelsInStones('aA', 'aAAbbbb'))


// Input: jewels = "aA", stones = "aAAbbbb"
// Output: 3