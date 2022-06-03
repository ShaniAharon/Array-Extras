'use strict'

console.log('EX 38')
console.log('biggerThan100');
// CR needed ✏️

// 38. Write a function named biggerThan100. It gets an array of numbers and returns an array of only the numbers that are bigger than 100.

// use unit testing if they didnt

console.log('INPUT: [1, 3, 400, 60, 300, 500]')
console.log('EXPECTED: [400, 300, 500]')
console.log('ACTUAL:', biggerThan100([1, 3, 400, 60, 300, 500]))

function biggerThan100(nums) {
    var biggerNums = []
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] > 100) biggerNums.push(nums[i])
    }
    return biggerNums
}

//forEach
function biggerThan100(nums) {
    var biggerNums = []
    // for (var i = 0; i < nums.length; i++) {
    //     if (nums[i] > 100) biggerNums.push(nums[i])
    // }
    nums.forEach((num) => {
        num > 100 ? biggerNums.push(num) : ''
    });
    return biggerNums
}

//map

function biggerThan100(nums) {
    var biggerNums = nums.map((num) => num > 100 ? num : '').filter(num => !!num);
    // for (var i = 0; i < nums.length; i++) {
    //     if (nums[i] > 100) biggerNums.push(nums[i])
    // }
    return biggerNums
}

function biggerThan100(nums) {
    var biggerNums = []
    nums.map((num) => {
        num > 100 ? biggerNums.push(num) : ''
    })
    // for (var i = 0; i < nums.length; i++) {
    //     if (nums[i] > 100) biggerNums.push(nums[i])
    // }
    return biggerNums
}

//filter good choice
function biggerThan100(nums) {
    return nums.filter(num => num > 100);
}


console.log('Ex 44')
console.log('counts the appearances of the numbers')
// reviewed ✔️

// EX44 Write the function printNumsCount(nums). The array nums will contain integers in the 
// range of 0-3 such as:
// [3,2,0,2,2,0,3]  
// GUIDANCE: the fact that the values are in a specific range allows us to use an array 
// where the index is actually the number itself. The value in the array counts the 
// appearances of the numbers. 


var nums = [3, 2, 0, 2, 3]

console.log('INPUT: ', nums)
console.log('EXPECTED: [1, 0, 2, 2]')
console.log('ACTUAL:', printNumsCount(nums))

nums = [3, 2, 0, 2, 8]
console.log('INPUT: ', nums)
console.log('EXPECTED: Not valid number')
console.log('ACTUAL:', printNumsCount(nums))

nums = [3, 2, 0, 2, -3]
console.log('INPUT: ', nums)
console.log('EXPECTED: Not valid number')
console.log('ACTUAL:', printNumsCount(nums))

//for
function printNumsCount(nums) {
    var counts = [0, 0, 0, 0]
    for (var i = 0; i < nums.length; i++) {
        var num = nums[i]
        counts[num]++
    }
    return counts
}
//                  change
//forEach() does not mutate the array on which it is called. (However, callbackFn may do so)
//forEach return undefined
function printNumsCount(nums) {
    var counts = [0, 0, 0, 0]
    //      [3, 2, 0, 2, 3]
    nums.forEach(num => counts[num]++)
    return counts
}



console.log('Ex 46')
console.log('multBy nums array')
// CR needed ✏️

// EX46: +UnitTesting Write the function: multBy(nums, multiplier) that returns a modified array in which each item in the array is multiplied by a multiplier.
// Step2: Add another param: isImmutable. It will be a variable that when it’s value is set to true, use array.slice() to work on a new array. Leave the original array as it was. 

var nums = [5, -4, 0, 1]

console.log('INPUT:', nums, 'multiplier', 3)
console.log('EXPECTED: [15, -12, 0, 3]')
console.log('ACTUAL:', multBy(nums, 3, true))

function multBy(nums, multiplier) {
    for (var i = 0; i < nums.length; i++) {
        nums[i] *= multiplier;
    }
    return nums
}

//Part b
function multBy(nums, multiplier, isImmutable) {
    //            can`t be changed
    var newNums = isImmutable ? nums.slice() : nums
    newNums.forEach((num, idx) => newNums[idx] = num * multiplier)
    return newNums
}

//other opt
function multBy(nums, multiplier, isImmutable = false) {
    if (isImmutable) {
        return nums.map(function (num) {
            return num * multiplier;
        });
    } else {
        nums.forEach(function (num, idx) {
            nums[idx] = num * multiplier;
        });
        return nums;
    }
}





