var song;

function preload() {
  song = loadSound("happy-step.mp3");
  //[successCallback],[errorCallback],[whileLoading]
}

function setup() {
  var canvas = createCanvas(windowWidth, windowHeight);
  song.play();
}

function draw() {

}