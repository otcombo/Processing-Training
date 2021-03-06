class STAR {
  constructor() {
    this.x = random(-width, width);
    this.y = random(-height, height);
    this.z = random(width);
    this.opacity = 10;
    this.color = color(255, 255, 255);
    this.speed = 5;

    this.originX = this.x;
    this.originY = this.y;
    this.originZ = this.z;
    this.starX = this.x;
    this.starY = this.y;
  }

  update() {
    this.z = this.z - this.speed;
    this.opacity = this.opacity + 5;

    if (this.z < 1) {
      this.z = width;
      this.x = random(-width, width);
      this.y = random(-height, height);
      this.originX = this.x;
      this.originY = this.y;
      this.originZ = this.z;
      this.starX = this.x;
      this.starY = this.y;
      this.opacity = 10;
    }
  }

  show() {
    noStroke();
    this.color.setAlpha(this.opacity);
    fill(this.color);

    this.starX = map(this.x / this.z, 0, 1, 0, width);
    this.starY = map(this.y / this.z, 0, 1, 0, height);
    this.r = map(this.z, 0, width, 10, 1);
    // this.starY = this.y * (this.z / width); 
    ellipse(this.starX, this.starY, this.r, this.r);
  }

  showline(){
    stroke(255, this.opacity/10);
    this.originX = map(this.x / this.originZ, 0, 1, 0, width);
    this.originY = map(this.y / this.originZ, 0, 1, 0, height);
    line(this.originX, this.originY, this.starX, this.starY);
  }
}





let stars = new Array(2000);

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < stars.length; i++) {
    stars[i] = new STAR();
  }
}

function draw() {
  background(0);
  translate(mouseX, mouseY);


  for (let i = 0; i < stars.length; i++) {
    if (mouseIsPressed) {
      stars[i].speed = 30;
      stars[i].showline();
    } else {
      stars[i].speed = 5;
    }
    stars[i].show();
    stars[i].update();
  }
}