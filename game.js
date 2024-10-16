
let canvas;

let hour = 3
let minute = 0
let clockD = 250
let minLength = clockD / 2.3
let hourLength = clockD / 3

let hourInput = document.getElementById('hourInput')
let minuteInput = document.getElementById('minuteInput')

let hourAngle = ((360/12) * hour) + 180
let minuteAngle = ((360/60) * minute) + 180
hourAngle += 0.5 * minute

function setup() {
    canvas = createCanvas(300, 300)
    angleMode(DEGREES)
}

function draw() {
    translate(width/2, height/2)
    canvas.position(windowWidth/2 - width/2, 40)
    background(66, 122, 161)

    strokeWeight(5)
    fill(0, 0, 0, 0)
    stroke(255)
    circle(0, 0, clockD)
    
    // hands
    strokeWeight(10)

    hourAngle = ((360/12) * hour) + 180
    minuteAngle = ((360/60) * minute) + 180
    hourAngle += 0.5 * minute



    // minute hand
    push()
    rotate(minuteAngle)
    stroke(165, 190, 0)
    line(0, 0, 0, minLength)
    pop()

    // hour hand
    push()
    rotate(hourAngle)
    stroke(103, 148, 54)
    line(0, 0, 0, hourLength)
    pop()

    // center pin
    stroke(255)
    noFill()
    circle(0, 0, 2)
}

