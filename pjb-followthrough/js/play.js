let GRAVITY = 0.8;
let BOUNCE_STRENGTH = 25;

let ball;


let hoopX;
let hoopY;
let hoopWidth = 400;
let hoopHeight = 250;
let hoopSpeed = 2;
let hoopDirection = 1;
let ifScroll = false;
let scroll;
let basketX = 700;
let basketY = 350;

function setup() {
  let canvas = createCanvas(1400, 800);
  canvas.parent("canvasContainer");
  canvas.style("z-index", "-1");
  background(255);

  ball = new Ball(width / 2, height / 2, 90);

  hoopX = width / 4;
  hoopY = height / 10;
}

function draw() {
  background(249, 203, 156);
  noStroke()


  drawBasketballHoop(hoopX, hoopY);

  if (ball.isShot) {
    ball.x = lerp(ball.x, basketX, 0.05)
    ball.y = lerp(ball.y, basketY, 0.05)
    ball.rad = lerp(ball.rad, 40, 0.05)

    ball.g = lerp(ball.g, 110, 0.05);
    ball.b = lerp(ball.b, 0, 0.05);



    let distance = dist(ball.x, ball.y, basketX, basketY);
    if (distance < 30) {
      ball.isShot = false
      // play some sound from basket
    }
  } else {
    ball.moveHori();
    // return the original setting
    ball.rad = lerp(ball.rad, 90, 0.05);
    ball.g = lerp(ball.g, 165, 0.05);
    ball.b = lerp(ball.b, 0, 0.05);
  }
  ball.fall();
  ball.moveVert();
  ball.bounce();
  ball.display();

  //net
  for (let x = 630; x <= 770; x += 5) {
    fill(255)
    rect(x, 253, 2, 50)
  }
  for (let x = 635; x <= 765; x += 5) {
    fill(255)
    rect(x, 303, 2, 20)
  }
  for (let x = 640; x <= 760; x += 5) {
    fill(255)
    rect(x, 323, 2, 20)
  }

  //rim
  for (let y = 250; y <= 260; y += 5) {
    fill(200, 0, 0)
    ellipse(width / 2, y, 150, 20)
  }
  fill(250, 225, 213, 99)
  ellipse(width / 2, 249, 128, 8)

}

class Ball {
  constructor(initX, initY, rad) {
    this.x = initX;
    this.y = initY;
    this.ySpd = -1;
    this.rad = rad;
    //
    this.r = 255;
    this.g = 165;
    this.b = 0;
    //
    this.isShot = false;
    this.goal = 0
  }
  shoot() {
    this.isShot = true;
    this.ySpd = -40;
  }
  dribble() {
    if (ball.isShot == false) {
      this.ySpd += BOUNCE_STRENGTH;
    }
  }
  moveHori() {
    this.x = lerp(this.x, mouseX, 0.02);
  }
  moveVert() {
    this.y += this.ySpd;
  }
  fall() {
    this.ySpd += GRAVITY;
    this.ySpd *= 0.97; // -3%
  }
  bounce() {
    if (this.y > height) {
      this.y = height; // limit the positon
      this.ySpd *= -1; // flip the direction
      // play dribble sound
    }
  }
  display() {
    push();
    fill(this.r, this.g, this.b);
    circle(this.x, this.y, this.rad * 2);

    stroke(0);
    strokeWeight(2);
    let arcRadius = this.rad * 1.7;
    arc(this.x - this.rad, this.y, arcRadius, arcRadius, (PI * 5) / 3, PI / 3);
    arc(this.x + this.rad, this.y, arcRadius, arcRadius, (TWO_PI / 3), (PI * 4) / 3);
    line(this.x, this.y - this.rad, this.x, this.y + this.rad);
    pop();

  }
}

function drawBasketballHoop(x, y) {
  //pole
  fill(0)
  rect(width / 2 - 15, 300, 30, 400)

  // backboard
  fill(255)
  rect(500, 50, hoopWidth, hoopHeight);
  fill(249, 203, 156, 99)
  rect(510, 60, hoopWidth - 20, hoopHeight - 20)

  fill(255)
  rect((width / 2) - 80, (height / 4) - 30, 160, 100)
  fill(249, 203, 156, 99)
  rect((width / 2) - 70, (height / 4) - 20, 140, 80)

  fill(0, 50)
  rect(width / 2 - 15, 265, 30, 25)

  // //net
  // for (let x = 630; x <= 770; x += 5) {
  //   fill(255)
  //   rect(x, 253, 2, 50)
  // }
  // for (let x = 635; x <= 765; x += 5) {
  //   fill(255)
  //   rect(x, 303, 2, 20)
  // }
  // for (let x = 640; x <= 760; x += 5) {
  //   fill(255)
  //   rect(x, 323, 2, 20)
  // }

  // //rim
  // for (let y = 250; y <= 260; y += 5) {
  //   fill(200, 0, 0)
  //   ellipse(width / 2, y, 150, 20)
  // }

  fill(250, 225, 213, 99)
  ellipse(width / 2, 249, 128, 8)

  //floor
  fill(241, 192, 114)
  rect(-10, 600, 1420, 400)

  push();
  for (let x = -300; x <= width + 300; x += 20) {
    let xAdj = map(x, 0, width, 200, width - 200);
    strokeWeight(10);
    stroke(201, 152, 74, 90)
    line(xAdj, y + 520, x, height);
  }
  pop();

  fill(201, 152, 74)
  arc(width / 2, 600, 900, 390, 0, PI)

  fill(241, 192, 114)
  arc(width / 2, 600, 880, 370, 0, PI)

  fill(201, 152, 74)
  arc(width / 2, 710, 300, 100, 0, PI)

  beginShape();
  vertex(width / 2 - 150, 710)
  vertex(width / 2 - 130, 600)
  vertex(width / 2 + 130, 600)
  vertex(width / 2 + 150, 710)
  endShape(CLOSE);
}

function mousePressed() {
  ball.dribble();
}

window.addEventListener("scroll", (event) => {
  ifScroll = true;
  scroll = this.scrollY;
  console.log(scroll);
  if (scroll > -20) {
    ball.shoot();
  }
});

