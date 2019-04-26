var r = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(50);
  noFill();
  // stroke(255);
}

function draw() {
  r = random(windowWidth/2);
  stroke(255,random(100));
  circle(width/2,height/2,r);
}