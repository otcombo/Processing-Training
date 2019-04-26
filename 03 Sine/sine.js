function setup() {
	createCanvas(windowWidth, windowHeight);
	colorMode(HSB, 1);
}

function draw() {
	background(255);

	let a = 0.0;
	let gap = 10;
	let size = 10;
	let waveHeight = 200;
	let periodLength = width;

	let inc = TWO_PI / (periodLength/gap);

	for (var i = 0; i < width/(gap); i++) {
		push();
		translate(0, height/2);
		ellipse(i*(gap+size), sin(i/(width/100)-(mouseY/height))*waveHeight, size, size);
		pop();
		
		push();
		c = color(sin(i/(width/10)+a), 1, 1);
		stroke(c);
		line(i*gap, 0, i*gap, sin(i/(width/10)+a)*height);
		pop();

		a = millis()/1500;
	}
}