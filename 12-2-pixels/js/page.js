let cam;
let img;

function setup() {
  let canvas = createCanvas(640, 480);
  canvas.parent("p5-canvas-container");
  background(220);

  cam = createCapture(VIDEO);
  cam.hide();
  img = createImage(640, 480); // blank image
}

function draw() {
  background(220);

  //image(cam, 0, 0);
  cam.loadPixels();

  let gridSize = 30
  // now we can access the cam.pixels and img.pixels arrays!
  for (let y = 0; y < cam.height; y++) {
    for (let x = 0; x < cam.width; x++) {
      // access each pixel!
      let index = (x + y * cam.width) * 4;

      let r = cam.pixels[index + 0];
      let g = cam.pixels[index + 1];
      let b = cam.pixels[index + 2];
      let a = cam.pixels[index + 3];

      let avg = (r + g + b) / 3

      fill(r, g, b)
      noStroke()
      circle(x, y, gridSize)
    }
  }
  img.updatePixels();

  image(img, 0, 0);
}