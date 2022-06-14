let x = 0;
let y = 0;
let space = 20;
function setup() {
    createCanvas(800, 800);
    background(0);
}

function draw() {
    fill(random(225), random(225), random(225));
    stroke(random(225))
    if (random(1) < 0.5) {
        line(x, y, x + space, y + space);
        // square(x,y,space/2)
    } else {
        line(x, y + space, x + space, y);
        // circle(x+space/2,y+space/2,space/2)
    }
    x += space;
    if (x > width) {
        x = 0;
        y += space;
    }
}
