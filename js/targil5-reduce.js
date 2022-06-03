var emps = [
    {
        name: 'Joe Schmoe',
        yearsExperience: 5,
        department: 'IT'
    },
    {
        name: 'Sally Sallerson',
        yearsExperience: 15,
        department: 'Engineering'
    },
    {
        name: 'Bill Billson',
        yearsExperience: 5,
        department: 'Engineering'
    },
    {
        name: 'Jane Janet',
        yearsExperience: 15,
        department: 'Management'
    },
    {
        name: 'Bob Hope',
        yearsExperience: 9,
        department: 'IT'
    }
];

// Use reducers to calculate the following:
// can sum or build any thing from array to object etc
// emps.reduce((acc, val) => acc + val, initialValue = starting value can be any data type)

// ● All experience sum

function getExperienceSum(emps) {
    return emps.reduce((acc, emp) => acc + emp.yearsExperience, 0)
}

// ● Sum each department's collective experience (create a map object dept -> experience)
// const res = getDepartmentsExperience(emps)
// console.log('res', res);
function getDepartmentsExperience(emps) {
    return emps.reduce((acc, emp) => {
        console.log('acc', acc);
        acc[emp.department] ? acc[emp.department] += emp.yearsExperience
            : acc[emp.department] = emp.yearsExperience
        return acc
    }, {})
}

//opt2 no short if
// function getDepartmentsExperience(emps) {
//     return emps.reduce((acc, emp) => {
//         console.log('acc', acc);
//         if (acc[emp.department]) {
//             acc[emp.department] += emp.yearsExperience
//         } else acc[emp.department] = emp.yearsExperience
//         return acc // get out from the func and retunr the acc build the object every time // update the acc
//     }, {})
// }

// ● Group employees by experience (an object in which the key is a 
//     number and the value is an array of employee objects)
//(create a map object experience ->{key:[{employee}, {employee}]})

function getEmployeesByExperience(emps) {
    return emps.reduce((acc, emp) => {
        console.log('acc', acc);
        // acc[emp.yearsExperience] ? acc[emp.yearsExperience].push(emp)
        //     : acc[emp.yearsExperience] = [emp]
        //can use a helper var
        const experience = emp.yearsExperience
        if (!acc[experience]) acc[experience] = []
        acc[experience].push(emp)

        return acc
    }, {})
}

// Count the number of employees in each department
// (create a map object dept -> empCount
//TODO: Can try to write it more readable like in the video
function getNumOfEmpByDep(emps) {
    return emps.reduce((acc, emp) => {
        console.log('acc', acc);
        acc[emp.department] ? acc[emp.department]++
            : acc[emp.department] = 1
        return acc
    }, {})
}

// 2. Write a function findModes(values) that gets an array and uses
// Array.reduce to create a map and then prints the numbers that occur most
// often.

function findModes(values) {
    var mode = -Infinity
    var modes = []

    const countsMap = values.reduce((acc, val) => {
        console.log('acc', acc);
        acc[val] ? acc[val]++
            : acc[val] = 1
        return acc
    }, {})
    for (const key in countsMap) {
        if (countsMap[key] > mode) mode = key
    }
    //all the modes
    // for (const key in countsMap) {
    //     if (countsMap[key] > mode) {
    //         mode = countsMap[key]
    //         modes = [+key]
    //     }
    //     else if (countsMap[key] === mode) modes.push(+key)
    // }
    return +mode//modes
}

// 3. Write a function flatten(values) that flattens the array, meaning that 
// if an item in this array is an array, it will push all its values to the result 
// array.
// a. i.e. Input: ['Hello', [9, 6] ,18, [4, 7, 8]]
// b. output: ['Hello', 9, 6 ,18, 4, 7, 8]
// c. support only one level of nested values
// d. Bonus: use recursion to support any level

var values = ['Hello', [9, 6], 18, [4, 7], 8]
const test = flatten(values)
// console.log('INPUT: ', ['Hello', [9, 6], 18, [4, 7], 8]);
// console.log('EXPECTED: ', ['Hello', 9, 6, 18, 4, 7, 8]);
// console.log('ACTUAL: ', test);
//Bonus
var valuesDeep = ['Hello', [9, [6, 6]], 18, [[4, [7, 8]], 5], 8]
const testDeep = flattenDeep(valuesDeep)
console.log('INPUT: ', ['Hello', [9, [6, 6]], 18, [[4, [7, 8]], 5], 8]);
console.log('EXPECTED: ', ['Hello', 9, 6, 6, 18, 4, 7, 8, 5, 8]);
console.log('ACTUAL: ', testDeep);
//c. support only one level of nested values
function flatten(values) {
    return values.reduce((acc, val) => {
        console.log('acc', acc);
        //can explain concat with the console join arrays togther or vals into one array
        // if (Array.isArray(val)) acc = acc.concat(val)
        if (Array.isArray(val)) acc.push(...val)
        else acc.push(val)
        return acc
    }, [])
}

// d. Bonus: use recursion to support any level
function flattenDeep(values) {
    return values.reduce((acc, val) => {
        console.log('acc', acc);
        // if (Array.isArray(val)) acc = acc.concat(flattenDeep(val))
        if (Array.isArray(val)) acc.push(...flattenDeep(val))
        else acc.push(val)
        return acc
    }, [])


}

//shorter
// function flattenDeep(values) {
//     return values.reduce((acc, val) => {
//         console.log('acc', acc);
//         // Array.isArray(val) ? acc = acc.concat(flattenDeep(val)) : acc.push(val)
//         Array.isArray(val) ? acc.push(...flattenDeep(val)) : acc.push(val)
//         return acc
//     }, [])
// }

//shorter more
// function flattenDeep(values) {
//     return values.reduce((acc, val) => {
//         return acc.concat(Array.isArray(val) ? flattenDeep(val) : val)
//     }, [])
// }

