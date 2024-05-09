let ballX;
let ballY;
let velocityY;
let gravity = 0.8;
let bounceStrength = 10;

let hoopX;
let hoopY;
let hoopWidth = 400;
let hoopHeight = 250;
let hoopSpeed = 2;
let hoopDirection = 1;
let ifScroll = false;
let scroll;

function setup() {
  let canvas = createCanvas(1400, 800);
  canvas.parent("canvasContainer");
  canvas.style("z-index", "-1");
  background(255);

  velocityY = 0;
  ballY = height / 2;
  ballX = width / 2;
  hoopX = width / 4;
  hoopY = height / 10;
}

function draw() {
  background(249, 203, 156);

  if (!ifScroll) {
    ballY += velocityY;
    velocityY += gravity;
    if (ballY >= height) {
      ballY = height;
      velocityY *= -0.9;
    }
  } else {
    ballY = map(scroll, 0, 20, height - 100, -100);
  }

  let targetX = mouseX;
  ballX = lerp(ballX, targetX, 0.01);

  drawBasketballHoop(hoopX, hoopY);
  drawBasketball(ballX, ballY);
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

  //floor
  fill(241, 192, 114)
  rect(-10, 600, 1420, 400)

  for (let x = 0; x <= width; x += 20) {
    noStroke()
    fill(201, 152, 74, 90)
    rect(x, y + 520, 10, 200)
  }

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

function drawBasketball(x, y) {
  fill(255, 165, 0);
  noStroke();
  ellipse(x, y, 180, 180);
}

function mousePressed() {
  velocityY = bounceStrength
}

window.addEventListener("scroll", (event) => {
  ifScroll = true;
  scroll = this.scrollY;
  console.log(scroll);
  console.log(ballY);
});