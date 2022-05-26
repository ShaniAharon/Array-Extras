'use strict'

console.log('EX 38')
console.log('biggerThan100');

// Write the function onlyOneWord(strs) – returns only those strings 
// with a single word (no spaces)
// var input = ['return', 'phrases', 'with one word'];
// var expected = ['return', 'phrases']
// var actual = onlyOneWord(input)



function onlyOneWord(strs) {
    return strs.filter(s => !s.includes(' '))
}

// Write the function reverseAll(strs) – gets an array of strings and 
// returns a new array containing string reversed

function reverseAll(strs) {
    //turn the string into an array reverse the order and join it into a string 
    return strs.map(s => s.split('').reverse().join(''))
}