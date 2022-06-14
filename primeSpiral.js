let x, y,px,py;
let step = 1;
let stepSize = 10;
let numSteps = 1;
let state = 0;
let turncouter = 0 
let totalSteps


function setup() {
    let primer = createCanvas(600, 600);
    primer.parent('primerID')
    background(0);
    // original coordinate
    x = width / 2;
    y = height / 2;
    px = x
    py = y
    const cols = width/stepSize;
    const rows = height/stepSize
    totalSteps = rows * cols
}

function draw() {
    /* //print number of each step
    textSize(stepSize);
    textAlign(CENTER, CENTER);
    fill(255);
    text(step, x, y); */

    /* // drawing each step with a square
    fill(127)
    stroke(255)
    rectMode(CENTER)
    square(x,y,stepSize) */

    
    
    if(isPrime(step)){
        fill(255)
        noStroke()
        circle(x,y,stepSize*0.5)
    }
    stroke(random(255))
    line(x,y,px,py)
    px = x
    py = y

    // direction dictator
    switch (state) {
        case 0:
            x += stepSize;
            break;
        case 1:
            y -= stepSize;
            break;
        case 2:
            x -= stepSize;
            break;
        default:
            y += stepSize;
            break;
    }
    // moving
    if (step % numSteps == 0) {
        state = (state+1)%4;
        turncouter++;
        if(turncouter%2==0){
            numSteps++;
        }
    }
    step++;

    if(step > totalSteps){
        noLoop();
        // save('final.png')
    }
}

function isPrime(value){
    if(value==1) return false;
    for(let i = 2; i<= sqrt(value);i++){
        if (value%i ==0){
            return false
        }
    }
    return true
}
