// Loader


window.addEventListener("load", init, false); 
// If it doesn't start automatically, put an 'init();' script at the end of your page
console.info("HTML5 Canvas Static Screen Initiated")

// Start Stuff

var staticspeed = 5
var screen;
var ctx

var bandone = {
 x: 0,
 y: 10,
 width: 500,
 height: 35
};

// Actual Code

function init() {
 screen = document.getElementById("staticscreen1");

 if (screen == "null") {
  screen.style = "background-color:gray"
 } else {
  // If this throws an error but it starts anyway, just ignore the error
  document.getElementById("staticscreen1").style = "background-color:gray"
 }

 ctx = screen.getContext("2d");
 loop();
}

function draw() {
 ctx.clearRect(0, 0, screen.width, screen.height);
 ctx.fillRect(bandone.x, bandone.y, bandone.width, bandone.height);
}

function update() {
 bandone.y += staticspeed;
 if (bandone.y > screen.height + 26) {
  bandone.y = -40
 }
}

function loop() {
 update();
 draw();
 window.requestAnimationFrame(loop);
}