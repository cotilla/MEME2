var univers;
var duck;
var I = "it may seem like";
var T = "it doesn't hurt";
var B = "but";
var R = "it really does";

function preload() {
   univers = loadImage("univers.jpg");
   duck = loadImage("killer_duck.jpg");
}


function setup() {
	createCanvas(1048, 1042);
}

function draw() {
	background(0);
    
     	
	/* draw quandrant lines */
	strokeWeight(1);
	stroke("white");
	line(width/2, 0, width/2, height);
	line(0, height/2, width, height/2);

	fill("white");

	
	if (mouseX > width/2 && mouseY > height/2) {
		 image(duck, width/2, height/2, width, height);
    } else if (mouseX < width/2 && mouseY > height/2) {
		image(duck, 0, height/2, width/2, height);
	} else if (mouseX > width/2 && mouseY < height/2) {
		image(duck,width/2, 0, width, height/2);
	} else {
		image(duck, 0, 0, width/2, height/2);
	}
    fill("black");
    textSize(20);
    strokeWeight(0);
	text(I, 50, 50);
    text(T, 600, 50);
	text(B, 100, 600);
	text(R, 600, 600);
}
    
	
	
	
	
	
	
	