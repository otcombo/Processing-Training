var dotArray = [];
var effectRad = 0;

// ============================================================

Dot = (function() {
  class Dot {
    constructor() {
      this.pos = createVector(0, 0);
      this.size = 20;
      this.color = color(255);
      this.targetPos = createVector(0, 0);
      this.currentMoveFrameCount = 0;
      // this.moveDurationFrameCount = 10;
      this.isMoving = false;
      this.relayRatio = 0;
      this.relayPos = createVector(0, 0);
      this.startRatio = 0;
      this.startPos = createVector(0, 0);
      this.endRatio = 0;
      this.endPos = createVector(0, 0);
    }

    setTarget(x, y) {
      var displaceX, displaceY;
      if (this.isMoving) {
        this.pos.set(this.endPos.x, this.endPos.y);
      }
      this.targetPos.set(x, y);
      this.currentMoveFrameCount = 0;
      this.isMoving = true;
      displaceX = x - this.pos.x;
      displaceY = y - this.pos.y;

      //choose which direction to go first
      if (Math.random() < 0.4) {
        this.relayRatio = abs(displaceX) / (abs(displaceX) + abs(displaceY));
        this.relayPos.set(this.pos.x + displaceX, this.pos.y);
      } else {
        this.relayRatio = abs(displaceY) / (abs(displaceX) + abs(displaceY));
        this.relayPos.set(this.pos.x, this.pos.y + displaceY);
      }
    }

    update() {
      var endX, endY, ratio, startX, startY;
      if (this.isMoving) {
        this.currentMoveFrameCount++;
        this.startRatio = this.getstartRatio();
        this.endRatio = this.getendRatio();

        //set the head
        if (this.startRatio < this.relayRatio) {
          ratio = this.startRatio / this.relayRatio;
          startX = this.pos.x + (this.relayPos.x - this.pos.x) * ratio;
          startY = this.pos.y + (this.relayPos.y - this.pos.y) * ratio;
        } else {
          ratio = (this.startRatio - this.relayRatio) / (1 - this.relayRatio);
          startX = this.relayPos.x + ratio * (this.targetPos.x - this.relayPos.x);
          startY = this.relayPos.y + ratio * (this.targetPos.y - this.relayPos.y);
        }
        this.startPos.set(startX, startY);

        //set the tail
        if (this.endRatio < this.relayRatio) {
          ratio = this.endRatio / this.relayRatio;
          endX = this.pos.x + ratio * (this.relayPos.x - this.pos.x);
          endY = this.pos.y + ratio * (this.relayPos.y - this.pos.y);
        } else {
          ratio = (this.endRatio - this.relayRatio) / (1 - this.relayRatio);
          endX = this.relayPos.x + ratio * (this.targetPos.x - this.relayPos.x);
          endY = this.relayPos.y + ratio * (this.targetPos.y - this.relayPos.y);
        }
        this.endPos.set(endX, endY);

        //stop when isArrived
        if (this.currentMoveFrameCount >= this.moveDurationFrameCount) {
          this.pos.set(this.targetPos.x, this.targetPos.y);
          this.isMoving = false;
        }
      }
    }

    display() {
      if (this.isMoving) {
        strokeWeight(this.size);
        stroke(this.color);
        noFill();

        beginShape();
        vertex(this.startPos.x, this.startPos.y);
        if (this.startRatio < this.relayRatio && this.relayRatio < this.endRatio) {
          vertex(this.relayPos.x, this.relayPos.y);
        }

        vertex(this.endPos.x, this.endPos.y);
        endShape();
      } else {
        noStroke();
        fill(this.color);
        ellipse(this.pos.x, this.pos.y, this.size, this.size);
      }
    }

    getMoveProgressRatio() {
      return min(1, this.currentMoveFrameCount / this.moveDurationFrameCount);
    }

    getstartRatio() {
      return -(Math.pow(this.getMoveProgressRatio() - 1, 2)) + 1;
    }

    getendRatio() {
      return -(Math.pow(this.getMoveProgressRatio() - 1, 4)) + 1;
    }

    getDistance(x, y) {
      return dist(x, y, this.pos.x, this.pos.y);
    }

  }

  // Dot.prototype.moveDurationFrameCount = 80;

  return Dot;

})();

function createDot() {
  var newDot;
  newDot = new Dot();
  newDot.pos = createVector(random(width), random(height));
  // newDot.size = width / 500;
  newDot.size = 1;
  newDot.color = createColor(50, random(100));
  return newDot;
};

function createColor(saturation, brightness) {
  var newColor;
  colorMode(HSB);
  // newColor = color(random(360), saturation, brightness);
  let colors = [186, 186, 186, 299];
  newColor = color(random(colors), saturation, brightness);
  colorMode(RGB);
  return newColor;
};


// ============================================================

processDots = function(func, effectRad, probability) {
  for (let i = 0; i < dotArray.length; i++) {
    if (dotArray[i].isMoving) {
      continue;
    }
    if (!(Math.random() < probability)) {
      continue;
    }
    func(dotArray[i], effectRad);
  }
};

awayFromMouse = function(dot, effectRad) {
  if (!(dot.getDistance(mouseX, mouseY) < effectRad)) {
    return;
  }
  dot.setTarget(random(width), random(height));
};

attractToMouse = function(dot, effectRad) {
  var angle, distance, x, y;
  distance = Math.random() * effectRad;
  angle = Math.random() * TWO_PI;
  x = mouseX + distance * cos(angle);

  if (x < 0) {
    x = -x;
  } else if (x > width) {
    x = width - (x - width);
  }

  y = mouseY + distance * sin(angle);
  if (y < 0) {
    y = -y;
  } else if (y > height) {
    y = height - (y - height);
  }

  dot.setTarget(x, y);
};


// ============================================================

function setup() {
  // min(windowWidth, displayWidth)
  // createCanvas(windowWidth, windowHeight);

  var container = select('#section-game-bg');
  var canvas = createCanvas(container.width, container.height);
  canvas.parent('section-game-bg');

  for (var i = 0; i < 200; i++) {
    dotArray.push(createDot());
  }
  effectRad = 0.08 * width;

  colorMode(HSB);
};

function draw() {
  // blendMode(BLEND);
  // gradient background
  for (let i = 0; i < height; i++) {
    let b = map(i, 0, height, 0, 20);
    stroke(220, 40, b);
    line(0, i, width, i);
  }
  // background(0, 0, 0);
  // blendMode(ADD);

  for (let i = 0; i < dotArray.length; i++) {
    dotArray[i].update();
    dotArray[i].display();
  }

  if (mouseIsPressed) {
    Dot.prototype.moveDurationFrameCount = 100;
    processDots(attractToMouse, effectRad * 0.01, 0.1);
  } else {
    Dot.prototype.moveDurationFrameCount = 20;
    processDots(awayFromMouse, effectRad, 1);
    processDots(attractToMouse, effectRad, 0.0003);
  }
};

// function keyPressed() {
//   if (key === 'P') noLoop();
// };
//
// function keyReleased() {
//   if (key === 'P') loop();
// };