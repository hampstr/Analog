
let canvas;

let hour = 1
let minute = 0
let clockD = 250
let minLength = clockD / 2.3
let hourLength = clockD / 3

let hourInput = document.getElementById('hourInput')
let minuteInput = document.getElementById('minuteInput')
let backButton = document.getElementById('backButton')
let enterButton = document.getElementById('enter')

let tries = 0

let hourAngle;
let minuteAngle;

let hasChanged = false

function CustomRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}



function calculateAngles() {
    hourAngle = ((360/12) * hour) + 180
    minuteAngle = ((360/60) * minute) + 180
    hourAngle += 0.5 * minute
}


backButton.addEventListener('click', () => {
    location.href = "index.html"
})

window.addEventListener('keyup', (e) => {
    if (e.key == "Enter") {
        evaluateEntry()
    }
})

hourInput.addEventListener('change', () => {
    changed = true
})
minuteInput.addEventListener('change', () => {
    changed = true
})


function setup() {
    canvas = createCanvas(300, 300);
    canvas.position(windowWidth/2 - width/2, 40)
    angleMode(DEGREES);

    // random time
    hour = CustomRandom(1, 12)
    minute = CustomRandom(0, 59)
    minute = Math.floor(minute / 5) * 5
    // console.log(`hour: ${hour} minute: ${minute}`)
    calculateAngles()
}

enterButton.addEventListener('click', evaluateEntry)

function evaluateEntry() {
    if (!hourInput.value) {
        window.alert("Please fill out the hour input")
        return
    }
    if (!minuteInput.value) {
        window.alert("Please fill out the minute input")
        return
    }
    if (!changed) {
        window.alert("Please change something to enter!")
        return
    }
    
    let correct = int(hourInput.value) == hour && int(minuteInput.value) == minute
    if (correct) {
        window.alert(`Correct! with ${tries} tries`)
        location.reload()
    }
    else {
        window.alert(`Wrong! ${int(hourInput.value) == hour ? 'However, your hour is correct!' : ''}${int(minuteInput.value) == minute ? 'However, your minute is correct!' : ''}`)

        if (int(hourInput.value) == hour) {
            hourInput.style.borderColor = "rgb(27, 231, 0)"
            hourInput.disabled = true
        }
        if (int(minuteInput.value) == minute) {
            minuteInput.style.borderColor = "rgb(27, 231, 0)"
            minuteInput.disabled = true
        }


        tries++
    }
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

    calculateAngles()

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

