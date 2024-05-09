let balls = []; // empty array

function setup() {
  let canvas = createCanvas(500, 400);
  canvas.parent("p5-canvas-container");
  background(220);
}

function draw() {
  background(220);

  // generate three balls every frame
  balls.push(new Ball(width / 2, height / 2, random(1, 20)));
  balls.push(new Ball(width / 2, height / 2, random(1, 20)));
  balls.push(new Ball(width / 2, height / 2, random(1, 20)));

  // update and display
  for (let i = 0; i < balls.length; i++) {
    let b = balls[i]; // get each ball
    b.move();
    b.display();
  }

  // limit the number of the objects
  while (balls.length > 500) {
    // let's remove the first (oldest) element!
    balls.splice(0, 1);
  }

  text("Number of balls: " + balls.length, 10, 30);
  text("FrameRate: " + frameRate().toFixed(2), 10, 60);
}

// 

class Ball {
  constructor(initX, initY, initDia) {
    this.x = initX;
    this.y = initY;
    this.xSpd = random(-3, 3);
    this.ySpd = random(-3, 3);
    this.dia = initDia;
  }
  move() {
    this.x += this.xSpd;
    this.y += this.ySpd;
  }
  display() {
    push();
    translate(this.x, this.y);
    circle(0, 0, this.dia);
    pop();
  }
}