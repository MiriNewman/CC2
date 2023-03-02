const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 400;

const ARRAY_SIZE = 100; // these are for the stars
var ranArrX = [ARRAY_SIZE];
var ranArrY = [ARRAY_SIZE];
var ranSize = [ARRAY_SIZE];

let counter = 0;
let timer = 0;

let waxing = true; // !waxing == waning, right?

function setup(){
	createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);

	GenRanArray();
}

function draw(){
	background('black');

	push();
		fill (255, 225, 255);
	  	for(let i = 0; i < ARRAY_SIZE; i++){
	    	circle(ranArrX[i], ranArrY[i], 5 + ranSize[i]);
	  	}
	  
		for (let y = 0; y < ARRAY_SIZE; y++){
		    ranArrY[y] = ranArrY[y] + 1;
		    if (ranArrY[y] >= CANVAS_HEIGHT) {
		    	ranArrY[y] = 0;
		    }
	  	}
	pop();

	push();
		translate(CANVAS_WIDTH/2, CANVAS_HEIGHT/2)
		fill(5);
		circle(0, 0, 200);
		
	pop();

	counter++;
	MoonPhase(CANVAS_WIDTH/2, CANVAS_HEIGHT/2, CANVAS_HEIGHT/4, counter / 200);

	
	counter%= 100;
}

function DrawBezierCircle(transX, transY, radius){
	controlX = radius * (4/3);

	push()
	translate(transX, transY);
		beginShape();
			vertex(0, radius);
			bezierVertex(controlX, radius, controlX, -radius, 0, -radius);
			bezierVertex(-controlX, -radius, -controlX, radius, 0, radius);
		endShape();
	pop();
}

function MoonPhase(centerX, centerY, radius, phase) {
	let lext;
	let rext;

	if (phase == 0.5) {
			waxing = !waxing;
		}

	if (waxing) {
		if (phase <= 0.5){
			rext = radius * (4/3);
			lext = map(phase, 0, 0.5, rext, -rext);
		} else {
			rext = map(phase, 0.5, 1.0, -lext, lext);
			lext = radius * (4/3);
		}
	} else {
		//phase -= phase;
		if (phase <= 0.5){
			rext = -radius * (4/3);
			lext = map(phase, 0.5, 0, rext, -rext);
		} else {
			rext = map(phase, 1.0, 0.5, -lext, lext);
			lext = -radius * (4/3);
		}
	}

	push();
	translate(centerX, centerY)
	fill(180 + phase);
	beginShape();
		vertex(0, radius);
		if (waxing) {
			bezierVertex(rext, radius, rext, -radius, 0, -radius);
			bezierVertex(lext, -radius, lext, radius, 0, radius);
		} else {
			bezierVertex(lext, radius, lext, -radius, 0, -radius);
			bezierVertex(rext, -radius, rext, radius, 0, radius);
		}
	endShape();
	pop();
}

function GenRanArray(){
  for (let i = 0; i < ARRAY_SIZE; i++){
    ranArrX[i] = random(CANVAS_WIDTH);
    ranArrY[i] = random(CANVAS_HEIGHT);
    ranSize[i] = random(-1, 2);
  }
}