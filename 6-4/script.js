

document.querySelector('#divIdentification').innerText = 'cool banana'


function quackQuack() {
    document.querySelectorAll('.ducks').forEach(duck => {
        duck.innerText = 'Quack Quack 🐥'
    })
}


document.querySelector('h2').onclick = function (event) {
    console.log(event)
    quackQuack()
}

let ducks = document.querySelectorAll('.ducks')


for (let duck of ducks) {
    duck.onmouseover = function (event) {
        event.target.style.color = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
        event.target.innerText += '!'
    }
}

document.querySelector('button').onclick = function (e) {
    console.log("button clicked")
    let text = document.querySelector('input').value
    console.log(text)
    document.querySelector('.container').classList.toggle(text)
}