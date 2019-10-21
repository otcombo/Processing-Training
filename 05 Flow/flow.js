class STAR {
  constructor() {
    this.x = random(-width, 0);
    this.y = random(-height, 0);
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
      this.x = random(-width, 0);
      this.y = random(-height, 0);
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
    this.r = map(this.z, 0, width, 10, 2);
    this.starY = this.y * (this.z / height);
    ellipse(this.starX, this.starY, this.r, this.r);
  }

}



let stars = new Array(1000);
let offset = 400;


function setup() {
  createCanvas(screen.width, screen.height);
  for (let i = 0; i < stars.length; i++) {
    stars[i] = new STAR();
  }
}

function draw() {
  background(0);
  translate(width + offset, height + offset);


  for (let i = 0; i < stars.length; i++) {
    if (mouseIsPressed) {
      stars[i].speed = 15;
    } else {
      stars[i].speed = 5;
    }
    stars[i].show();
    stars[i].update();
  }
}