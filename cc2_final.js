const SCREEN_WIDTH = 500;
const SCREEN_HEIGHT = 500;

const HALF_WIDTH = SCREEN_WIDTH / 2;
const HALF_HEIGHT = SCREEN_HEIGHT / 2;

let numThings = 0;
let arrayOfThings = []; // Array to hold each drawing object

let colorArray = [5]

let selection = 0;
let selectedColor;

let arrowBumpTimer = 0
let arrowBump = false;

let control = false;

function setup(){
	createCanvas(SCREEN_WIDTH, SCREEN_HEIGHT);
    colorArray[0] = color(255, 220, 180)
    colorArray[1] = color(120, 240, 140)
    colorArray[2] = color(60, 180, 220)
    colorArray[3] = color(220, 200, 200)
    colorArray[4] = color(40, 40, 50)
    colorArray[5] = color(150, 20, 150)
    selectedColor = colorArray[selection]
}

function draw(){
	background(40);
	
	for (numThings in arrayOfThings){ // draw the things!!
		arrayOfThings[numThings].display();
	}

	push() // color selection!
	translate(15, 10)
	fill(255)
	rect(0, 0, 102, 80)
	stroke(0)
	fill(selectedColor)
	textSize(30);
	text("Color", 3, 26)
		push()
		if (arrowBump){
			translate(90, 4)
		} else {
			translate(90, 6)
		}
		fill(selectedColor)
		//circle(0, 0, 2)
		beginShape()
		vertex(0, 0)
		vertex(-8, 8)
		vertex(-3, 8)
		vertex(-3, 20)
		vertex(3, 20)
		vertex(3, 8)
		vertex(8, 8)
		vertex(0, 0)
		endShape();
		pop()
	fill(20)
	textSize(15)
	if (control){
		text("Press Control\nto finish shape", 3, 50)
	} else {
		text("Press Control \nfor new shape", 3, 50)
	}
	pop();

	arrowBumpTimer++;
	if (arrowBumpTimer == 50){
		arrowBump = !arrowBump;
	}
	arrowBumpTimer %= 50;
}

class thing{
	constructor(){
		this.x1;
		this.x2;
		this.y1;
		this.y2;
		this.color = selectedColor;

		this.numPoints = 0;
		this.pointArray = [] // Array to hold points for each drawing object
	}


	display(){
		beginShape();
		fill(this.color)
		for (this.numPoints in this.pointArray){
			vertex(this.pointArray[this.numPoints].x, 
				   this.pointArray[this.numPoints].y)
		}
		endShape();
	}
}

class pointVertex{
	constructor(x, y){
		this.x = x;
		this.y = y;
	}
}

function mouseClicked(){
	if(control){
		arrayOfThings[numThings].numPoints++;
		arrayOfThings[numThings].pointArray[arrayOfThings[numThings].numPoints] = new pointVertex(mouseX, mouseY);
	}
}

function keyPressed(){
	if (keyCode === CONTROL){
		control = !control;
		if (control){
			numThings++;
			arrayOfThings[numThings] = new thing();
		}
		console.log(control);
	}

	if (keyCode === UP_ARROW){
		selection++;
		if (selection >= colorArray.length){
			selection = 0;
		}
		selectedColor = colorArray[selection]
	}
}