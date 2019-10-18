p5.disableFriendlyErrors = true;

var play_it = 1;
var waves;

//============================================================

function Particle(max_dist, angle) {
  this.position = p5.Vector.fromAngle(angle, max_dist);
  this.max_distance = max_dist;

  this.update = function() {
    //flow field
    var dx = map(sin(frameCount * 0.001), -1, 1, PI, TWO_PI);
    var dy = map(cos(frameCount * 0.002), -1, 1, 0.001, 0.002);
    var index = noise(this.position.heading() / dx, this.max_distance * dy, frameCount * 0.002);
    var new_distance = index * this.max_distance;
    this.position.normalize();
    this.position.mult(new_distance);
  }

}

//============================================================

function Ring(max_radius) {
  this.particles = [];
  this.max_radius = max_radius;

  let N = 100; //number of particles making up the ring

  for (var i = 0; i < N; i++) {
    var theta_i = PI * norm(i, 1, N - 2); //PI = the half ring
    this.particles.push(new Particle(max_radius, theta_i));
  }

  this.run = function() {
    beginShape();
    for (var i = 0; i < this.particles.length; i++) {
      this.particles[i].update();
      var pos = this.particles[i].position;
      vertex(pos.x, pos.y);
    }
    endShape(CLOSE);
  }
}

//============================================================

function Waves(radius) {
  this.rings = [];

  let N = 400; //number of rings in wave

  for (var i = 0; i < N; i++) {
    var r = radius * norm(i, 0, N);
    this.rings.push(new Ring(r));
  }

  this.run = function() {
    for (var i = 0; i < this.rings.length; i++) {
      this.rings[i].run();
    }
  }
}

//============================================================

function setup() {
  var canvas = createCanvas(150, windowHeight);
  canvas.parent('sketch-holder');

  noFill();
  stroke(random(100, 250), random(0, 250), 0, 240);
  // stroke(255, 200);
  strokeWeight(0.5);

  if (width > 800) {
    canvas.mouseOver(checkState);
    canvas.mouseOut(checkState);
  }

  waves = new Waves(2 * height); //max radius
}

//============================================================

function draw() {
  background('#000');

  translate(-200, 0);
  rotate(-PI / 2);
  waves.run();
  noLoop();
}

//============================================================

function checkState() {
  if (play_it) {
    loop();
    play_it = 0;
  } else {
    noLoop();
    play_it = 1;
  }
}