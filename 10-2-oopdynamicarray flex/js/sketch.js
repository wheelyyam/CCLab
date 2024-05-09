let particles = [];

function setup() {
  let canvas = createCanvas(500, 400);
  canvas.parent("p5-canvas-container");
  background(220);
}

function draw() {
  background(0);

  // generate
  particles.push(new Particle(random(width), height, random(2, 10)));

  // update and display
  for (let i = 0; i < particles.length; i++) {
    let p = particles[i];
    p.move();
    p.checkBoundaries();
    p.display();
  }

  // limit the number of objects
  while (particles.length > 1500) {
    let index = 0;
    particles.splice(index, 1);
  }

  // display the number of particles
  text(particles.length, 10, 20);
}

///// CLASS /////

class Particle {
  constructor(x, y, rad) {
    this.x = x;
    this.y = y;
    this.xSpd = 0;
    this.ySpd = random(-3, -1);
    this.rad = rad
    this.isDone = false;
  }
  move() {
    this.x += this.xSpd;
    this.y += this.ySpd;
  }
  checkBoundaries() {
    if (this.x < 0 || this.x > width || this.y < 0 || this.y > height) {
      // out of canvas
      this.isDone = true;
    }
  }
  display() {
    push();
    translate(this.x, this.y);
    if (this.isDone) {
      fill(255, 0, 0);
    }
    circle(0, 0, this.rad * 2);
    pop();
  }
}