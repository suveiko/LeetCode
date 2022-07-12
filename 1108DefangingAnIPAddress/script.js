var defangIPaddr = function (address) {
    return address.split('').map(a => a === '.' ? '[.]' : a).join('')
};

console.log(defangIPaddr("1.1.1.1"))
// Input: address = "1.1.1.1"
// Output: "1[.]1[.]1[.]1"