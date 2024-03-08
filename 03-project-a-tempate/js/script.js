let x, y, a, b, c, d;
let xSpeed, ySpeed;
let aSpeed, bSpeed;
let cSpeed, dSpeed;
let dia;

function setup() {
    let canvas = createCanvas(400, 400);
    canvas.parent("p5-canvas-container")
    background(220);

    x = random(100, 300);
    y = random(100, 300);
    a = random(100, 300);
    b = random(100, 300);
    c = random(100, 300);
    d = random(100, 300);

    xSpeed = random(-5, 5);
    ySpeed = random(-5, 5);

    aSpeed = random(-5, 5);
    bSpeed = random(-5, 5);

    cSpeed = random(-5, 5);
    dSpeed = random(-5, 5);
}

function draw() {
    background(255, 50);

    dia = random(45);

    //position
    x = x + xSpeed * random(0, 1);
    y = y + ySpeed * random(0, 1);

    a = a + aSpeed * random(0, 1);
    b = b + bSpeed * random(0, 1);

    c = c + cSpeed * random(0, 1);
    d = d + dSpeed * random(0, 1);

    if (x < 0 || x > width) {
        xSpeed = xSpeed * -1;
    }
    if (y < 0 || y > height) {
        ySpeed = ySpeed * -1;
    }
    if (a < 0 || a > width) {
        aSpeed = aSpeed * -1;
    }
    if (b < 0 || b > height) {
        bSpeed = bSpeed * -1;
    }
    if (c < 0 || c > width) {
        cSpeed = cSpeed * -1;
    }
    if (d < 0 || d > height) {
        dSpeed = dSpeed * -1;
    }

    //circle
    noStroke();
    fill(255, 130, 20);
    circle(x, y, dia);

    noStroke();
    fill(255, 104, 42);
    circle(a, b, dia);

    noStroke();
    fill(255, 103, 59);
    circle(c, d, dia);

    if (mouseIsPressed) {
        x = mouseX;
        y = mouseY;
        a = mouseX;
        b = mouseY;
        c = mouseX;
        d = mouseY;
    }

    // spots
    let spotX = random(0, 400);
    let spotY = random(0, 400);
    let spotR = random(1, 15);

    fill(random(255), 10, 10);
    circle(spotX, spotY, spotR);

    if (keyIsPressed) {
        if (key == "s" || key == "S") {
            save("sketch.png");
            noLoop();
        }
    }
}