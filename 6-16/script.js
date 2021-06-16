
class Animal {
    constructor(name, age) {
        this.name = name
        this.weight = 50
        this.age = age
        this.alive = true
    }
    eat = () => {
        console.log('Munch Mucnch')
        this.weight += 10
    }
    sleep = () => {
        console.log('ZZzzzzzZZZ')
    }

}

class Racoon extends Animal {
    constructor(name, age, tail) {
        super(name, age) //Go to parent constructor and grab these attributes
        this.tail = tail
    }
    steal = () => {
        console.log(`${this.name} is stealing your money!`)
    }
}

class Flamingo extends Animal {
    constructor(name, age, color) {
        super(name, age)
        this.color = color
    }
    makeWeirdSong = () => {
        console.log('Jeppahhh!')
    }
    standOnOneLeg = () => {
        console.log('🦩')

    }
    doBoth = () => {
        console.log('do both')
        this.makeWeirdSong()
        this.standOnOneLeg()
        this.sleep()
    }
}




let animalObj = new Racoon('Herbert', 44, true)
let animalObj2 = new Racoon('Victoria', 24, true)
let animalObj3 = new Animal('Mahim', 5)
let animal4 = new Flamingo('Leanne', 22, 'pink')