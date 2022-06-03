// ex-movies.js

// Write the following functions:
// • getMovieLink(imdb) that returns a link to that movie, the function
// returns an HTML like:
// <a href="https://www.imdb.com/title/tt0073052/">Harry Potter</a>
// • deleteMovie(imdb) that removes a movie from the array
// TIP: use findIndex

var gMovies = [
    { imdb: 'tt0373889', name: 'Harry Potter' },
    { imdb: 'tt0000004', name: 'Un bon bock' },
    { imdb: 'tt0000003', name: 'Pauvre Pierrot' },
]

function getMovieLink(imdb) {
    const movie = gMovies.find(m => m.imdb === imdb)
    return `<a href="https://www.imdb.com/title/${imdb}/">${movie.name}</a>`
}

function deleteMovie(imdb) {
    const idx = gMovies.findIndex(m => m.imdb === imdb)
    return gMovies.splice(idx, 1)[0]
    // gMovies.splice(idx, 1)
    // return gMovies
    //filter opt 
    // To change the original array
    //  gMovies = gMovies.filter(m => m.imdb !== imdb)
    // return gMovies
}

