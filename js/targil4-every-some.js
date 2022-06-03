// 1. Write a function allPassed(students) that gets an array of students 
// (name, grade) and returns true if they all passed (grade >= 70)

var students = [{ name: 'dude', grade: 89 }, { name: 'dd', grade: 69 }]

function allPassed(students) {
    return students.every(s => s.grade >= 70)
}

// 2. Write a function isGameOn(players) that gets an array of players 
// (name,isAlive) and returns true if one of them is still alive

var players = [{ name: 'dude', isAlive: true }, { name: 'dd', isAlive: false }]


function isGameOn(players) {
    return players.some(p => p.isAlive)
}

// 3. Write a function isMatrix(arr2d) that gets a 2d array and validate 
// that it is a matrix (= all rows are of the same length)

function isMatrix(arr2d) {
    // const rowLength = arr2d[0].length
    // return arr2d.every(row => row.length === rowLength)
    return arr2d.every(row => row.length === arr2d[0].length)
}


// 4. Bonus: Write a function isWide(arr2d) that gets a 2d array and check 
// that at least one of its rows has more than 5 column
// if one of the rows length begger then 5

function isWide(arr2d) {
    return arr2d.some(row => row.length > 5)
}

// 5. Bonus: Write the function positiveRowsOnly (mat) – return only the
// rows in the matrix that have all positive integers
// TIP: use filter and every

function positiveRowsOnly(mat) {
    return mat.filter(row => row.every(num => num > 0))
}

