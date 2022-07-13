var countMatches = function (items, ruleKey, ruleValue) {
    let res = 0;
    for (let i of items) {
        if (ruleKey === "color" && i[1] === ruleValue) {
            res++
        } else if (ruleKey === "type" && i[0] === ruleValue) {
            res++
        } else if (ruleKey === "name" && i[2] === ruleValue) {
            res++
        }
    }
    return res;
};


console.log(countMatches([["phone", "blue", "pixel"], ["computer", "silver", "phone"], ["phone", "gold", "iphone"]], "type", "phone"))


// Input: items = [["phone","blue","pixel"],["computer","silver","phone"],["phone","gold","iphone"]],
//          ruleKey = "type",
//          ruleValue = "phone"
// Output: 2
// Explanation: There are only two items matching the given rule,
//      which are ["phone","blue","pixel"] and ["phone","gold","iphone"].
//      Note that the item ["computer","silver","phone"] does not match.