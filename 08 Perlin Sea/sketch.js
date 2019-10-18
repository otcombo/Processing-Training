let pos, colors;
const moveSpeed = 0.4;
const moveScale = 800;

function setup() {
  var canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent('sketch-holder');

  background("#162a25");
  noStroke();

  colors = [color("#77c39c"), color("#2f5e36"), color("#55aba5"), color("#2d7063"), color("#3f6829"), color("#44a872"), color("#215964"), color("#cdedae")];
  pos = [];
  for (let i = 0; i < 500; i++) {
    pos.push({
      x: random(width),
      y: random(height),
      c: colors[floor(random(colors.length))]
    });
  }
}

function draw() {
  for (let i = 0; i < pos.length; i++) {
    with(pos[i]) {
      let angle = noise(x / moveScale, y / moveScale) * TWO_PI * moveScale; //I never understood why end by multiplying by moveScale
      x += cos(angle) * moveSpeed;
      y += sin(angle) * moveSpeed;
      fill(c);
      ellipse(x, y, 2, 2);
      if (x > width || x < 0 || y > height || y < 0 || random(1) < 0.001) {
        x = random(width);
        y = random(height);
      }
    }
  }
}

function mousePressed() {
  for (let i = 0; i < 10; i++) {
    pos.push({
      x: mouseX + random(-30, 30),
      y: mouseY + random(-30, 30),
      c: colors[floor(random(colors.length))]
    });
  }
}

function mouseDragged() {
  mousePressed();
}