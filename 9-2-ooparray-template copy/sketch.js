let balls = []

function setup() {
  let canvas = createCanvas(500, 400);
  canvas.parent("p5-canvas-container");
  background(220);

  balls.push(new Ball(100, 200, 10))
  balls.push(new Ball(400, 200, 50))
}

function draw() {
  background(220);

  for (let i = 0; i < balls.length; i++) {
    balls[i].display()
    b.move()
    b.display()

  }

}


class Ball {
  constructor(initX, initY, initD) {
    this.x = initX
    this.y = initY
    this.xSpd = random(-3, 3)
    this.ySpd = random(-3, 3)
    this.dia = initDia

  }
  move() {
    this.x += this.xSpd
    this.y += this.ySpd
  }
  display() {
    push()
    translate(this.x, this.y)
    circle(0, 0, this.dia)
    pop()
  }




}