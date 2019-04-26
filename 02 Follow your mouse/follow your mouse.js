var squareColor;
var bgColor;

function setup() {
	createCanvas(windowWidth, windowHeight);
	noStroke();
	rectMode(CENTER);
	squareColor = color(255);
	bgColor = color(0);
}

function draw() {
	background(bgColor);

	rectWidth = 10;
	rectHeight = 60;
	rectMargin = 100;
	count = int(width/rectMargin*height/rectMargin);

	squareColor.setAlpha(128 + 80*sin(millis()/500));

	for (var i = 0; i < count; i++) {
		push();

		var currentX = rectMargin*(i%int(width/rectMargin+1));
		var currentY = rectMargin*int(i/(width/rectMargin+1));
		translate(currentX, currentY);
		// print(i%10);
		
		fill(squareColor);
		var rad = atan2(mouseY - currentY, mouseX - currentX);
		rotate(rad-HALF_PI);

		rect(0, 0, rectWidth, rectHeight, rectWidth/2);
		pop();
	}
}

function mousePressed() {
	bgColor = color(255);
	squareColor = color(0);
}

function mouseReleased() {
	squareColor = color(255);
	bgColor = color(0);	
}