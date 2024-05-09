// CCLab Mini Project - 9.R Particle World Template

let NUM_OF_PARTICLES = 500; // Decide the initial number of particles.

let particles = [];

function setup() {
  let canvas = createCanvas(800, 600);
  canvas.parent("p5-canvas-container");

  // generate particles
  for (let i = 0; i < NUM_OF_PARTICLES; i++) {
    particles[i] = new Particle(random(width), random(-height, 0));
  }
}

function draw() {
  background(50);

  // update and display
  for (let i = 0; i < particles.length; i++) {
    let p = particles[i];
    p.applyWind()
    p.stop()
    p.update();
    p.display();
    if (p.y > height) {
      particles.splice(i, 1)
    }
  }
  if (particles.length == 0) {
    for (let i = 0; i < NUM_OF_PARTICLES; i++) {
      particles[i] = new Particle(random(width), random(height));
    }
  }
}

class Particle {
  // constructor function
  constructor(startX, startY) {
    // properties: particle's characteristics
    this.x = startX;
    this.y = startY;
    this.xSpd = random(0, 0.8)
    this.ySpd = random(0.5, 2)
    this.dia = random(3, 6);
    this.dir = 1
  }
  // methods (functions): particle's behaviors
  update() {
    this.x += this.xSpd * this.dir;
    this.y += this.ySpd
  }
  display() {
    // particle's appearance
    push();
    translate(this.x, this.y);

    circle(0, 0, this.dia);

    pop();
  }

  applyWind() {
    if (mouseX < width / 2) {
      this.dir = 1
    } else {
      this.dir = -1
    }
  }
  stop() {
    if (this.y >= height - 10) {
      this.ySpd = 0
      this.xSpd = 0
    }
  }
}
