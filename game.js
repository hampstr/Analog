
let canvas;

let hour = 1
let minute = 0
let clockD = 250
let minLength = clockD / 2.3
let hourLength = clockD / 3

let hourInput = document.getElementById('hourInput')
let minuteInput = document.getElementById('minuteInput')
let backButton = document.getElementById('backButton')

let hourAngle = ((360/12) * hour) + 180
let minuteAngle = ((360/60) * minute) + 180
hourAngle += 0.5 * minute


backButton.addEventListener('click', () => {
    location.href = "index.html"
})


function setup() {
    try {
        canvas = createCanvas(300, 300);
        canvas.position(windowWidth/2 - width/2, 40)
        angleMode(DEGREES);
    } catch (error) {
        window.alert("Error in setting up p5.js: " + error.message);
    }
}

window.addEventListener('load', () => {
    
})

function draw() {
    try {
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
    catch (e) {
        window.alert(e)
        noLoop()
    }
}

