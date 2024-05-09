let balls = []; // empty array

function setup() {
  let canvas = createCanvas(500, 400);
  canvas.parent("p5-canvas-container");
  background(0);
}

function draw() {
  background(0);

  // generate
  for (let i = 0; i < 3; i++) {
    balls.push(new Ball(mouseX, mouseY, random(1, 10)));
  }

  // update and display
  for (let i = 0; i < balls.length; i++) {
    let b = balls[i]; // get each ball
    b.move();
    if (mouseIsPressed) {
      b.speedUp();
      // or
      //b.slowDown();
    }
    b.display();
  }

  // limit the number of the objects
  while (balls.length > 500) {
    // let's remove the first (oldest) element!
    balls.splice(0, 1);
  }

  text(frameRate().toFixed(2), 10, 20);
  text(balls.length, 10, 40);
}


class Ball {
  constructor(initX, initY, initDia) {
    this.x = initX;
    this.y = initY;
    this.xSpd = random(-1, 1) * 0.3;
    this.ySpd = random(-1, 1) * 0.3;
    this.dia = initDia;
    //
    this.r = random(255);
    this.g = random(255);
    this.b = random(255);
    //
    this.rotSpd = random(0.01, 0.20);
  }
  move() {
    this.x += this.xSpd;
    this.y += this.ySpd;
  }
  speedUp() {
    // +50%
    this.xSpd = this.xSpd * 1.50;
    this.ySpd *= 1.50;
  }
  slowDown() {
    // -2%
    this.xSpd = this.xSpd * 0.98;
    this.ySpd *= 0.98;
  }
  display() {
    push();

    blendMode(ADD);
    translate(this.x, this.y);
    rotate(frameCount * this.rotSpd);

    stroke(this.r, this.g, this.b);
    fill(this.r, this.g, this.b, 100);

    ellipse(0, 0, this.dia, this.dia * 0.25);
    ellipse(0, 0, this.dia * 0.25, this.dia);

    pop();
  }
}
