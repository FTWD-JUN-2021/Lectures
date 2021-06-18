const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

canvas.width = window.innerWidth
canvas.height = window.innerHeight

ctx.fillRect(20, 20, 20, 20)



const runningImg = new Image()
runningImg.src = `./running.png`


const idleImg = new Image()
idleImg.src = `./idle.png`


const walkingImg = new Image()
walkingImg.src = `./walking.png`


class Dino {
    constructor(name, x, y, w, h) {
        this.name = name;
        this.x = x;
        this.y = y;
        this.width = w;
        this.height = h;
        this.speed = 10
        this.velX = 0
        this.velY = 0
        this.jumping = false
        this.grounded = false
        this.actions = {
            idle: { img: idleImg, frames: 10 },
            running: { img: runningImg, frames: 8 },
            walking: { img: walkingImg, frames: 10 }
        }
        this.act = 'walking'
    }
    draw = () => {
        let act = this.actions[this.act]
        let sx = Math.floor(i / 3) * (act.img.width / act.frames) % act.img.width
        //context.drawImage(img, sx, sy, swidth, sheight, x, y, width, height);
        ctx.drawImage(act.img, sx, 0, act.img.width / act.frames, act.img.height, this.x, this.y, this.width, this.height)
    }


}

let i = 0


const player = new Dino('Wally', 100, 100, 200, 150)







let height = canvas.height;
let width = canvas.width;

// let player = {
//     x: canvas.width / 2,
//     y: canvas.height - 15,
//     width: 5,
//     height: 5,
//     speed: 3,
//     velX: 0,
//     velY: 0,
//     jumping: false,
//     grounded: false
// }


var boxes = [];

// dimensions
boxes.push({
    x: 0,
    y: 0,
    width: 10,
    height: height
});
boxes.push({
    x: 0,
    y: height - 2,
    width: width,
    height: 50
});
boxes.push({
    x: width - 10,
    y: 0,
    width: 50,
    height: height
});

boxes.push({
    x: 120,
    y: 10,
    width: 80,
    height: 80
});
boxes.push({
    x: 170,
    y: 50,
    width: 80,
    height: 80
});
boxes.push({
    x: 220,
    y: 100,
    width: 80,
    height: 80
});
boxes.push({
    x: 270,
    y: 150,
    width: 40,
    height: 40
});

boxes.push({
    x: 70,
    y: canvas.height - 100,
    width: 4000,
    height: 40
});


boxes.push({
    x: 0,
    y: canvas.height - 400,
    width: 200,
    height: 40
});


function animate() {
    requestAnimationFrame(animate)

    ctx.clearRect(0, 0, canvas.width, canvas.height)
    i++
    update()
    //player.draw()

}

animate()
