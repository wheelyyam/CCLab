let osc;
let oscIsPlaying = false;

function setup() {
  let canvas = createCanvas(500, 400);
  canvas.parent("p5-canvas-container");
  background(220);

  osc = new p5.Oscillator('sine');
}

function draw() {
  let freqValue = map(mouseX, 0, width, 200, 1000, true);
  osc.freq(freqValue);

  let sinValue = sin(frameCount * 0.1)
  let ampValue = map(sinValue, -1, 1, 0.0, 1.0, true);
  osc.amp(ampValue);
}

function mousePressed() {
  if (oscIsPlaying == false) {
    osc.start();
    oscIsPlaying = true;
  } else {
    osc.stop();
    oscIsPlaying = false;
  }
}