
let age = 25; //Number
let name = 'Mahim' //String
let racoonsAreFunny = true //Boolean
let favAnimals = ['dog', 'cat', 'mouse'] //Array 
let favPlants = { //Object
    name: 'Ace of Spades',
    genus: 'Anthurium',
    age: 2,
    color: 'green'
}

const pie = 3.14


// console.log(favPlants.color) //Dot Notation
// console.log(favPlants['name']) //Bracket Notation

favPlants.owner = "Valerie"
//favPlants[name] = 'cool'
// console.log(favPlants)


favAnimals.push('fish')

favAnimals.unshift('dolphin')

// let a = favAnimals.pop()
// let b = favAnimals.shift()
// console.log(favAnimals)

for (let i = 0; i < favAnimals.length; i++) {
    // console.log(favAnimals[i])
}

for (let animal of favAnimals) { //Loop thru array
    // console.log(animal)
}

for (let key in favPlants) { //Loop thru object
    //console.log(`key ${key} value ${favPlants[key]}`) //String interpolation
    //console.log(key, favPlants[key])
}









let isTaskFinished = takeOutTheTrash('garbage')

// console.log(isTaskFinished)

if (isTaskFinished) {
    console.log(`You did it!! Here's $20!`)
} else {
    console.log("DO YOUR WORK")
}



function takeOutTheTrash(trash) {

    console.log(`Taking out the ${trash}`)

    return true
}

//ES6 
// const takeOutTheTrash = (trash) => {
//     console.log(`Taking out the ${trash}`)
//     return true
// }