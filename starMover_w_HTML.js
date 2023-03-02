const CANVAS_WIDTH = 2000;
const CANVAS_HEIGHT = 1500;

const ARRAY_SIZE = 250; // these are for the stars
var ranArrX = [ARRAY_SIZE];
var ranArrY = [ARRAY_SIZE];
var ranSize = [ARRAY_SIZE];

let counter = 0;
let timer = 0;

let sizeXSetip = 0, sizeYSetup = 0;

function setup(){
	//createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
	var cnv = createCanvas(windowWidth, windowHeight);
	cnv.style('display', 'block');
	sizeXSetup = windowWidth;
	sizeYSetup = windowHeight;
	GenRanArrayWindowed(sizeXSetup, sizeYSetup);
}

function draw(){
	background (0);
	push();
		fill (255, 225, 255);
	  	for(let i = 0; i < ARRAY_SIZE; i++){
	    	circle(ranArrX[i], ranArrY[i], 5 + ranSize[i]);
	  	}

		for (let y = 0; y < ARRAY_SIZE; y++){
		    ranArrY[y] = ranArrY[y] + 0.3;
		    if (ranArrY[y] >= sizeYSetup * 2) {
		    	ranArrY[y] = 0;
		    }
	  	}
	pop();

}

function windowResized(){
	resizeCanvas(windowWidth, windowHeight);
	console.log(windowWidth);
}

function GenRanArrayWindowed(sizeX, sizeY){
  for (let i = 0; i < ARRAY_SIZE; i++){
    ranArrX[i] = random(sizeX*2);
    ranArrY[i] = random(sizeY*2);
    ranSize[i] = random(-1, 2);
  }
}