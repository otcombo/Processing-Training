var size = 25;
var rows;
var cols;
var terrian = [];

var yoff = 0;
var inc = 0.1;
var zscale = 150;

var flying = 0;

function setup() {
	createCanvas(windowWidth, windowHeight, WEBGL);

	var fps = frameRate();
	
	rows = int(width / size);
	cols = int(height / size);

}

function draw() {
	background(0);
	// fill(255, 100);
	noFill();

	rotateX(PI/2.2);
	translate(-width/2, 0);

	// text("FPS: " + fps, 10, 10);
	
	flying -= 0.01;
	yoff = flying;

	for (var y = 0; y < cols; y++) {
		terrian[y] = [];
		var xoff = 0;
		for (var x = 0; x < rows; x++) {
			terrian[y][x] = map (noise(xoff,yoff), 0, 1, zscale*-1, zscale);
			xoff += inc;
		}
		yoff += inc;
	}

	for (var y = 0; y < cols - 1; y++) {


		stroke(255,map(y,0,20,0,50));

		beginShape(TRIANGLE_STRIP);
		for (var x = 0; x < rows - 1; x++) {
			vertex(x * size, y * size, terrian[y][x]);
			vertex(x * size, (y + 1) * size, terrian[y+1][x]);
		}
		endShape();
	}

	// noLoop();
}



//////////////// 1D perlin noise

// var startX = 0;
// var inc = 0.01;


// function setup(){
// 	createCanvas(windowWidth,windowHeight);

// }

// function draw(){
// 	background('#FAFAFA');
// 	stroke(0);
// 	noFill();

// 	beginShape();
// 	xoff = startX;
// 	for (var x = 0; x < width; x++) {
// 		y = map(noise(xoff),0,1,0,height);
// 		vertex(x,y)

// 		xoff += inc;
// 	}
// 	endShape();

// 	startX += inc;
// }



/////////////// 2D Perlin Noise

// var inc = 0.01;

// function setup() {
// 	createCanvas(300, 300);
// 	pixelDensity(1);
// }

// function draw() {
// 	loadPixels();

// 	var yoff = 0;
// 	for (var y = 0; y < width; y++) {

// 		var xoff = 0;

// 		for (var x = 0; x < width; x++) {
// 			var index = (x + y * width) * 4;
// 			// var depth = random(0, 255);
// 			var depth = map(noise(xoff, yoff), 0, 1, 0, 255);

// 			pixels[index+0] = depth;
// 			pixels[index+1] = depth;
// 			pixels[index+2] = depth;
// 			pixels[index+3] = 255;

// 			xoff += inc;
// 		}	

// 		yoff += inc;
// 	}

// 	updatePixels();
// }
