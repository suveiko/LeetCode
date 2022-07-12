var interpret = function (command) {
    return command.replaceAll('()', 'o').replaceAll('(al)', 'al')
};

console.log(interpret('(al)G(al)()()G'))


// Input: command = "(al)G(al)()()G"
// Output: "alGalooG"
