'use strict'


// Write the function onlyOneWord(strs) – returns only those strings 
// with a single word (no spaces)
// var input = ['return', 'phrases', 'with one word'];
// var expected = ['return', 'phrases']
// var actual = onlyOneWord(input)

function onlyOneWord(strs) {
    return strs.filter(s => !s.includes(' '))
    //trim remove white spaces , fix the bug when the user enter space at the start or end
    // return strs.filter(s => !s.trim().includes(' '))
}

// Write the function reverseAll(strs) – gets an array of strings and 
// returns a new array containing string reversed

function reverseAll(strs) {
    //turn the string into an array reverse the order and join it into a string 
    return strs.map(s => s.split('').reverse().join(''))
}

// Write the function capitalizeLongerThan5(strs) – gets an array of 
// strings and returns a new array in which strings that are longer than 
// 5 are capitalized (starts with uppercase)
//var str = 'sd'.charAt(0).toUpperCase() + 'sd'.substring(1)
function capitalizeLongerThan5(strs) {
    return strs.map(s => s.length > 5 ? s.charAt(0).toUpperCase() + s.substring(1) : s)
}

// ex04.js Write the function onlyVowels(strs) – gets an array of strings 
// and returns a new array containing only vowels from each string:
// var input = ['average', 'exceptional', 'amazing'];
// var expected = ['aeae', 'eeioa', 'aai']
// var actual = onlyVowels(input)

function onlyVowels(strs) {
    //           can solved use case when we dont have a vowels in the word
    return strs.map(s => getVowels(s)) //.filter(s => s !== '')
}

function getVowels(str) {
    const vowels = 'aeiou'
    return str.split('').filter(l => vowels.includes(l.toLowerCase())).join('')
}


// Bonus: Write the function doubleMatrix(mat) – that 
// doubles the numbers in the matrix, maintaining the same structure
function doubleMatrix(mat) {
    return mat.map(row => row.map(num => num * 2))
}


