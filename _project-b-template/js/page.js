let img;
let cam;

function preload() {
  img = loadImage("assets/tree.png")
}


function setup() {
  let canvas = createCanvas(640, 480);
  canvas.parent("p5-canvas-container");
  background(255, 255, 220)

  cam = createCapture(VIDEO)
}

function draw() {

  // background(255, 255, 220)
  //image(img, 0, 0)


  for (let i = 0; i < 30; i++) {
    let x = floor(random(width))
    let y = floor(random(height))
    let dia = random(0, 15)
    let c = cam.get(x, y)


    noStroke()
    fill(c)

    circle(x, y, dia)
  }







}