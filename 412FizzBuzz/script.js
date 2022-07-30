var fizzBuzz = function (n) {
    const arr = []
    for (let i = 1; i < n + 1; i++) {
        if (i % 15 === 0) {
            arr.push('FizzBuzz')
        } else if (i % 5 === 0) {
            arr.push('Buzz')
        } else if (i % 3 === 0) {
            arr.push('Fizz')
        } else {
            arr.push(`${i}`)
        }
    }
    return arr
};

console.log(fizzBuzz(15))


// Input: n = 15
// Output: ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]