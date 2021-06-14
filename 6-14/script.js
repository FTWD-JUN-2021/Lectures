


//Traditional es5 function 
function sum(a, b) {
    return a + b
}


//es6+ Arrow function 
const subtraction = (a, b) => {
    return a - b
}







//Traditional for loop 
// for (let movie of movies) {
//     console.log(movie.name)
// }


//forEach
// movies.forEach(function (movie) {
//     console.log(movie.name)
// })
// movies.forEach((movie) => {
//     console.log(movie.name)
// })
// movies.forEach(movie => console.log(movie.name))

//map 
// let copyMovies = movies.map((movie) => {
//     movie.year += 1
//     return movie
// })
// console.log(copyMovies)





//filter
// let olderMovies = movies.filter((movie) => {
//     // return movie.year < 2020
//     return movie.name.length > 12
// })
// console.log(olderMovies)



let movies = [

    {
        name: 'Napolean Dynamite',
        year: 2010
    },
    {
        name: 'Star Wars',
        year: 3000
    },
    {
        name: 'It',
        year: 1950
    },
    {
        name: 'Clash of the Titans',
        year: 2006
    }
]

//reduce
// let totalYears = movies.reduce((acc, movie) => {
//     return acc + movie.name + ' '
// }, 'Starts here: ')

// console.log(totalYears)


//sort 
// let sortedYears = movies.sort((a, b) => {
//     if (a.year < b.year) {
//         return 123232
//     }
//     if (b.year < a.year) {
//         return -133243242
//     }
//     if (b.year === a.year) {
//         return 0
//     }
// })

// let sortedYears = movies.sort((a, b) => b.year - a.year)

// let sortedNames = movies.sort((a, b) => {
//     if (a.name.length > b.name.length) {
//         return -1
//     }
//     if (a.name.length < b.name.length) {
//         return 1
//     }
//     if (a.name.length === b.name.length) {
//         return 0
//     }
// })



let sortedNames = movies.sort((a, b) => a.name.length - b.name.length)
console.log(sortedNames)

