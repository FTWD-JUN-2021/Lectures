const canvas = document.querySelector('canvas')

canvas.width = window.innerWidth
canvas.height = window.innerHeight

const ctx = canvas.getContext('2d')




class Obstacle {
    constructor(x, y, w, h, color) {
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        this.color = color
    }
    draw = () => {
        ctx.fillStyle = this.color
        ctx.fillRect(this.x, this.y, this.w, this.h) //x, y, w, h
    }
    move = () => {
        this.x -= 1
        this.draw()
    }
}


const obstacles = []


setInterval(function () {

    // let randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')
    let color = `rgb(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255})`
    //Create new obstacle with random height 
    let obs = new Obstacle(canvas.width, Math.random() * canvas.height, 40, 40, color)

    //Push that obstacle into the array 
    obstacles.push(obs)

}, 1000)













class Hero {
    constructor(img, x, y, w, h) {
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        this.img = img

    }

    draw = () => {
        ctx.drawImage(this.img, this.x, this.y, this.w, this.h)
    }
}


let img = new Image()
img.src = './lichking.png'
let lichking = new Hero(img, 0, 0, 100, 100)



window.onkeydown = function (e) {
    if (e.key === 'ArrowLeft') {
        lichking.x -= 10
    }
    if (e.key === 'ArrowRight') {
        lichking.x += 10
    }
    if (e.key === 'ArrowUp') {
        lichking.y -= 10
    }
    if (e.key === 'ArrowDown') {
        lichking.y += 10
    }
}



function detectCollision(rect1, rect2) {
    if (rect1.x < rect2.x + rect2.w &&
        rect1.x + rect1.w > rect2.x &&
        rect1.y < rect2.y + rect2.h &&
        rect1.y + rect1.h > rect2.y) {
        // collision detected!
        console.log("collision")
        cancelAnimationFrame(animatedId)
    }
}



let animatedId = null

function animate() { //Game engine //Flip Book
    animatedId = requestAnimationFrame(animate)

    //Clear entire canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    lichking.draw()
    //Loop through array and draw each obstacle one at a time 
    for (let obs of obstacles) {
        obs.move()
        detectCollision(obs, lichking)
    }

}

animate()








