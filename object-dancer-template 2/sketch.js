/*
  Check our the GOAL and the RULES of this exercise at the bottom of this file.
  
  After that, follow these steps before you start coding:

  1. rename the dancer class to reflect your name (line 35).
  2. adjust line 20 to reflect your dancer's name, too.
  3. run the code and see if a square (your dancer) appears on the canvas.
  4. start coding your dancer inside the class that has been prepared for you.
  5. have fun.
*/

let dancer;

function setup() {
  // no adjustments in the setup function needed...
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("p5-canvas-container");

  // ...except to adjust the dancer's name on the next line:
  dancer = new WillyDancer(width / 2, height / 2);
}

function draw() {
  // you don't need to make any adjustments inside the draw loop
  background(0);
  drawFloor(); // for reference only

  dancer.update();
  dancer.display();
}

// You only code inside this class.
// Start by giving the dancer your name, e.g. LeonDancer.
class WillyDancer {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
    this.x2 = 0;
    this.y2 = 0;
    this.angle = 0;
    this.size1 = 70;
    this.size2 = 100;
    this.angleDirection = 1;
    this.direction = 1;
    this.centerX = width / 2
    this.centerY = height / 2;
    this.xspeed = random(3, -3)
    this.yspeed = random(5, -5)
  }
  update() {


    // this.y += 5 * this.direction;

    if (this.y <= this.centerY - 70 || this.y >= this.centerY + 70) {
      this.direction *= -1;
    }

    this.angle += radians(this.angleDirection * 5)

    if (this.angle > radians(40) || this.angle < radians(-40)) {
      this.angleDirection *= -1
    }
    this.x += this.xspeed
    this.y += this.yspeed

    if (this.x + 50 > width || this.x + 50 < 0) {
      this.xspeed *= -1
    }
    if (this.y + 50 > height || this.y + 50 < 0) {
      this.yspeed *= -1
    }


  }
  display() {
    // the push and pop, along with the translate 
    // places your whole dancer object at this.x and this.y.
    // you may change its position on line 19 to see the effect.
    push();
    translate(this.x, this.y);

    //arms
    push()
    rotate(this.angle)
    fill(255, 228, 185)
    scale(1.0 + 0.25 * sin(frameCount * 0.4));
    ellipse(this.x2, this.y2, 140, 20)

    pop()

    // left legs
    push()
    // rotate(this.angle )
    rotate(PI * 3 / 4)
    fill(255, 228, 185)
    scale(0.5 + 0.1 * sin(frameCount * 0.4));
    ellipse(this.x2 + 80, this.y2 - 50, 140, 20)
    pop()

    // RIGHT legs
    push()
    rotate(PI / 3)
    fill(255, 228, 185)
    scale(0.5 + 0.1 * sin(frameCount * 0.4));
    ellipse(this.x2 + 100, this.y2 + 50, 140, 20)
    pop()



    //circle body
    push();
    fill(255, 228, 185)
    scale(1.2 + 0.25 * sin(frameCount * 0.1));
    ellipse(this.x2, this.y2, this.size1, this.size2);
    pop();


    //eyes
    push()
    fill(random(255), random(255), random(255));
    noStroke()
    scale(1.0 + 0.25 * sin(frameCount * 0.3))
    ellipse(this.x2 - 20, this.y2 - 20, 30, 15);
    ellipse(this.x2 + 20, this.y2 - 20, 30, 15);
    pop()

    //mouth
    noFill()
    stroke(10);
    strokeWeight(2);
    arc(this.x2, this.y2 + 20, 30, 10, 0, PI);




    // the next function draws a SQUARE and CROSS
    // to indicate the approximate size and the center point
    // of your dancer.
    // it is using "this" because this function, too, 
    // is a part if your Dancer object.
    // comment it out or delete it eventually.
    //this.drawReferenceShapes()

    pop();
  }
  // drawReferenceShapes() {
  //   noFill();
  //   stroke(255, 0, 0);
  //   line(-5, 0, 5, 0);
  //   line(0, -5, 0, 5);
  //   stroke(255);
  //   rect(-100, -100, 200, 200);
  //   fill(255);
  //   stroke(0);
  // }
}



/*
GOAL:
The goal is for you to write a class that produces a dancing being/creature/object/thing. In the next class, your dancer along with your peers' dancers will all dance in the same sketch that your instructor will put together. 

RULES:
For this to work you need to follow one rule: 
  - Only put relevant code into your dancer class; your dancer cannot depend on code outside of itself (like global variables or functions defined outside)
  - Your dancer must perform by means of the two essential methods: update and display. Don't add more methods that require to be called from outside (e.g. in the draw loop).
  - Your dancer will always be initialized receiving two arguments: 
    - startX (currently the horizontal center of the canvas)
    - startY (currently the vertical center of the canvas)
  beside these, please don't add more parameters into the constructor function 
  - lastly, to make sure our dancers will harmonize once on the same canvas, please don't make your dancer bigger than 200x200 pixels. 
*/