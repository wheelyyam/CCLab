let comboMoment = 2000;

let x, y;
let xSpd, ySpd;
let headwidth, headheight;

let angle1, angle2, angle3, angle4;
let angle5, angle6, angle7, angle8;
let centerRadius = 10;

let cloudX;

function setup() {
    createCanvas(800, 500);

    let cnv = createCanvas(800, 500);
    cnv.parent("p5-canvas-container");

    xSpd = random(-3, 3);
    ySpd = random(-3, 3);

    x = width / 2;
    y = height / 2;
    headwidth = 50;
    headheight = 60;
    r = 230;
    g = 230;
    b = 240;

    angle1 = radians(0);
    angle2 = radians(90);
    angle3 = radians(180);
    angle4 = radians(270);
    angle5 = radians(45);
    angle6 = radians(135);
    angle7 = radians(225);
    angle8 = radians(315);

    cloudX = 0;
}

function draw() {
    console.log(mouseX, mouseY);
    //console.log(frameCount)

    backgroundcolor = color(12, 31, 49, 60)



    background(backgroundcolor);

    drawScene();

    //avatar movement
    x += xSpd;
    y += ySpd;

    if (random() < 0.05) {
        xSpd = random(-3, 3);
        ySpd = random(-3, 3);
    }

    if (x < 30 || x > width - 30) {
        xSpd = xSpd * -1;
    }
    if (y < 30 || y > height - 30) {
        ySpd = ySpd * -1;
    }

    // change the color based on the environment
    if (checkRectArea(x, y, 0, 500, 350, 500)) {
        //brown
        r = 48;
        g = 35;
        b = 0;
    } else if (checkRectArea(x, y, 87, 310, 119, 262)) {
        //brown
        r = 48;
        g = 35;
        b = 0;
    } else if (checkRectArea(x, y, 141, 267, 263, 348)) {
        //brown
        r = 68;
        g = 35;
        b = 0;
    } else if (checkRectArea(x, y, 501, 800, 464, 500)) {
        //blue
        r = 11;
        g = 83;
        b = 148;
    } else if (checkRectArea(x, y, 581, 800, 431, 462)) {
        //blue
        r = 11;
        g = 83;
        b = 148;
    } else if (checkCircleArea(x, y, 580, 220, 80)) {
        //red
        r = 230;
        g = 83;
        b = 54;
    } else {
        // air
        r = 230;
        g = 230;
        b = 240;
    }

    // attract the creature
    if (mouseIsPressed) {
        x = lerp(x, mouseX, 0.025);
        y = lerp(y, mouseY, 0.025);
    }

    //refresh
    if (key == "r" || key == "R") {
        window.location.reload(true);
    }

    // display the creature
    push();
    translate(x, y);
    noStroke();
    fill(r, g, b, 90);

    if (frameCount < comboMoment) {
        beginShape();
        for (let i = 0; i < TWO_PI; i += 0.02) {
            let r = 30 + 1 * (frameCount * 0.15) + random(10, -10);
            let vx = random(0, 2) * r * cos(i);
            let vy = random(0, 2) * r * sin(i);

            vertex(vx, vy);
        }
        endShape(CLOSE);
    } else {
        // declare orbit
        let radDist = 80;
        let x1 = cos(angle1) * radDist;
        let y1 = sin(angle1) * radDist;

        let x2 = cos(angle2) * radDist;
        let y2 = sin(angle2) * radDist;

        let x3 = cos(angle3) * radDist;
        let y3 = sin(angle3) * radDist;

        let x4 = cos(angle4) * radDist;
        let y4 = sin(angle4) * radDist;

        let x5 = cos(angle5) * radDist;
        let y5 = sin(angle5) * radDist;

        let x6 = cos(angle6) * radDist;
        let y6 = sin(angle6) * radDist;

        let x7 = cos(angle7) * radDist;
        let y7 = sin(angle7) * radDist;

        let x8 = cos(angle8) * radDist;
        let y8 = sin(angle8) * radDist;

        //circles
        noStroke();
        fill(230, 83, 54);
        ellipse(x1, y1, random(80), 20);

        fill(11, 83, 148);
        ellipse(x2, y2, random(80), 20);

        fill(58, 35, 0);
        ellipse(x3, y3, random(80), 20);

        fill(230, 230, 240);
        ellipse(x4, y4, random(80), 5);

        noStroke();
        fill(230, 83, 54);
        ellipse(x5, y5, random(80), 5);

        fill(11, 83, 148);
        ellipse(x6, y6, random(80), 20);

        fill(58, 35, 0);
        ellipse(x7, y7, random(80), 5);

        fill(230, 230, 240);
        ellipse(x8, y8, random(80), 5);

        angle1 += random(0.05, 0.09);
        angle2 += random(0.05, 0.09);
        angle3 += random(0.05, 0.09);
        angle4 += random(0.05, 0.09);
        angle5 += random(0.05, 0.09);
        angle6 += random(0.05, 0.09);
        angle7 += random(0.05, 0.09);
        angle8 += random(0.05, 0.09);
    }
    pop();

    push();
    translate(x, y);
    if (frameCount > comboMoment) {
        fill(111, 168, 220, 40);
        beginShape();
        for (let i = 0; i < TWO_PI; i += 0.3) {
            let r = 100 + random(-2, 2);
            let vx = random(0, 2) * r * cos(i);
            let vy = random(0, 2) * r * sin(i);

            vertex(vx, vy);
        }
        endShape(CLOSE);
    }
    pop();

    //combomode eye change
    if (frameCount < comboMoment) {
        c = color(0);
    } else {
        c = color(80, 90, 210);
    }


    //avatar head
    noStroke();
    fill(255, 228, 185);
    ellipse(x, y, headwidth, headheight);

    //avatar eyes
    fill(c);
    ellipse(x - 10, y - 5, headwidth / 4, headheight / 8);
    ellipse(x + 10, y - 5, headwidth / 4, headheight / 8);

    fill(255);
    ellipse(x - 8, y - 4, headwidth / 8, headheight / 12);
    ellipse(x + 8, y - 4, headwidth / 8, headheight / 12);

    //avatar arrow
    fill(c);
    ellipse(x, y - 23, 12, 15);
    triangle(x - 12, y - 20, x + 12, y - 20, x, y - 11);

    //     background(0);
    //     fill(255);
    //     textFont("Courier New", 20);

    //     text("end of avatar life cycle", width / 2 - 150, height / 2);
    //   }
}

function checkRectArea(x, y, xMin, xMax, yMin, yMax) {
    let w = xMax - xMin;
    let h = yMax - yMin;
    //stroke(255, 0, 0);
    //noFill();
    //rect(xMin, yMin, w, h);

    let result = false;
    if (x > xMin && x < xMax && y > yMin && y < yMax) {
        result = true;
    }

    return result;
}

function checkCircleArea(x, y, centerX, centerY, rad) {
    // stroke(255, 0, 0);
    // noFill();
    // circle(centerX, centerY, rad * 2);

    let result = false;
    let distance = dist(x, y, centerX, centerY);
    if (distance < rad) {
        result = true;
    }

    return result;
}

function drawScene() {
    if (cloudX > 850) {
        cloudX = -309;
    }
    cloudX += 2;

    //clouds
    fill(195, 211, 209);
    ellipse(cloudX + 95, 45, 150, 50);
    ellipse(cloudX + 309, 75, 150, 50);

    //mountain
    noStroke();

    fill(70);
    beginShape();
    vertex(316, 427);
    vertex(356, 315);
    vertex(369, 317);
    vertex(401, 259);
    vertex(434, 208);
    vertex(459, 212);
    vertex(544, 427);
    endShape(CLOSE);

    fill(110);
    beginShape();
    vertex(424, 453);
    vertex(441, 307);
    vertex(456, 309);
    vertex(477, 238);
    vertex(571, 159);
    vertex(679, 201);
    vertex(716, 275);
    vertex(749, 336);
    vertex(758, 395);
    endShape(CLOSE);

    //ellipse(591, 500, 350, 700);

    //lava
    fill(210, 20, 30);
    beginShape();
    curveVertex(490, 216);
    curveVertex(507, 195);
    curveVertex(542, 165);
    curveVertex(571, 152);
    curveVertex(615, 154);
    curveVertex(644, 167);
    curveVertex(665, 183);
    curveVertex(681, 201);
    curveVertex(665, 216);
    curveVertex(634, 244);
    curveVertex(611, 232);
    curveVertex(579, 209);
    curveVertex(555, 208);
    curveVertex(529, 245);
    curveVertex(492, 263);
    curveVertex(477, 237);
    endShape(CLOSE);

    //ground
    noStroke();
    fill(48, 89, 30);
    beginShape();
    curveVertex(0, 375);
    curveVertex(193, 345);
    curveVertex(343, 382);
    curveVertex(514, 422);
    curveVertex(680, 405);
    curveVertex(800, 382);
    curveVertex(800, 500);
    curveVertex(0, 500);
    endShape(CLOSE);

    //tree one
    noStroke();
    fill(72, 46, 4);
    beginShape();
    curveVertex(125, 400);
    curveVertex(147, 313);
    curveVertex(143, 230);
    curveVertex(183, 230);
    curveVertex(187, 313);
    curveVertex(195, 400);
    curveVertex(135, 405);
    endShape(CLOSE);

    fill(180, 95, 6);
    ellipse(158, 190, 150, 140);
    beginShape();
    curveVertex(137, 262);
    curveVertex(104, 255);
    curveVertex(95, 229);
    curveVertex(72, 201);
    curveVertex(82, 151);
    curveVertex(105, 134);
    curveVertex(122, 105);
    curveVertex(152, 110);
    curveVertex(171, 115);
    curveVertex(195, 114);
    curveVertex(212, 134);
    curveVertex(221, 183);
    curveVertex(229, 244);
    curveVertex(188, 268);
    curveVertex(170, 259);
    curveVertex(143, 267);
    endShape(CLOSE);

    //tree two
    noStroke();
    fill(72, 46, 4);
    beginShape();
    curveVertex(200, 400);
    curveVertex(222, 313);
    curveVertex(143 + 75, 230 + 33);
    curveVertex(183 + 75, 230 + 33);
    curveVertex(187 + 75, 313 + 33);
    curveVertex(195 + 75, 400 + 33);
    curveVertex(135 + 75, 405 + 33);
    endShape(CLOSE);

    fill(160, 75, 6);
    ellipse(236, 203, 150, 140);
    beginShape();
    curveVertex(137 + 78, 262 + 15);
    curveVertex(104 + 78, 255 + 15);
    curveVertex(95 + 78, 229 + 15);
    curveVertex(72 + 78, 201 + 15);
    curveVertex(82 + 78, 151 + 15);
    curveVertex(105 + 78, 134 + 15);
    curveVertex(122 + 78, 105 + 15);
    curveVertex(152 + 78, 110 + 15);
    curveVertex(171 + 78, 115 + 15);
    curveVertex(195 + 78, 114 + 15);
    curveVertex(212 + 78, 134 + 15);
    curveVertex(221 + 78, 183 + 15);
    curveVertex(229 + 78, 244 + 15);
    curveVertex(188 + 78, 268 + 15);
    curveVertex(170 + 78, 259 + 15);
    curveVertex(143 + 78, 267 + 15);
    endShape(CLOSE);

    //lake
    fill(11, 83, 148);
    ellipse(800, 500, 650, 140);
}
