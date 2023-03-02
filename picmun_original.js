class Player {
	constructor (x, y, r) {
		this.position = new p5.Vector(x, y);
		this.velocity = p5.Vector.random2D();
		this.velocity.mult(3);
		this.r = r;
		this.m = r * 0.1;
	}
	update() {
		this.position.add(this.velocity);
	}

	checkBoundaryCollision() {
		if (this.position.x > CANVAS_WIDTH - rightOffset- this.r) {
	      this.position.x = width - rightOffset - this.r;
	      this.velocity.x *= -1;
	    } else if (this.position.x < this.r) {
	      this.position.x = this.r;
	      this.velocity.x *= -1;
	    } else if (this.position.y > CANVAS_HEIGHT - bottomOffset - this.r) {
	      this.position.y = height - bottomOffset - this.r;
	      this.velocity.y *= -1;
	    } else if (this.position.y < this.r) {
	      this.position.y = this.r;
	      this.velocity.y *= -1;
	    }
	}

	display() {
		noStroke();
		fill (randomColor[0], randomColor[1], randomColor[2]);
		circle(this.position.x, this.position.y, this.r * 2)
	}
}

function wall(){
	this.height = 0;
	this.width = 0;
	this.rotation = 0;
}

const CANVAS_WIDTH = 400;
const CANVAS_HEIGHT = 400;

let isVertical = true;
let isClose = true;
let randomColor = [120, 140, 130];

let player = new Player(200, 200, 10);

let rightOffset = 0;
let bottomOffset = 0;

function setup(){
	createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
}

function draw(){
	background(0);
	//leftBorder = new Borders(true, true);
	Border(true, true);
	Border(true, false);
	Border(false, true);
	Border(false, false);

	player.update();
	player.display();
	player.checkBoundaryCollision();

}

function keyPressed() {
	if (keyCode == UP_ARROW){
		ColorRandomizer();
		if (bottomOffset >= 0 && bottomOffset < CANVAS_HEIGHT){
			bottomOffset += 10;
			//console.log(bottomOffset);
		}
	}
	if (keyCode == DOWN_ARROW) {
		ColorRandomizer();
		if (bottomOffset > 0) {
			bottomOffset -= 10;
			//console.log(bottomOffset);
		}
	}
	if (keyCode == LEFT_ARROW) {
		ColorRandomizer();
		if (rightOffset >= 0 && rightOffset < CANVAS_WIDTH) {
			rightOffset += 10;
		}
	}
	if (keyCode == RIGHT_ARROW) {
		ColorRandomizer();
		if (rightOffset > 0) {
			rightOffset -= 10;
		}
	}
}

/*
 if you can read this
 why are you looking at the dev tools huh? O.o
 buy a girl dinner first :3
*/

function ColorRandomizer(){
	randomColor[0] = random(255);
	randomColor[1] = random(255);
	randomColor[2] = random(255);
}

function Border(isVertical, isClose){
	push();
	fill(200, 255, 200);

	if (isVertical && isClose){
		rect(0, 0, 5, CANVAS_HEIGHT);
	} else if (isVertical && !isClose) {
		rect(CANVAS_WIDTH-5 - rightOffset, 0, 5, CANVAS_HEIGHT);
	} else if (!isVertical && isClose) {
		rect(0, 0, CANVAS_WIDTH, 5);
	} else {
		rect(0, CANVAS_HEIGHT-5 - bottomOffset, CANVAS_WIDTH, 5);
	}

	pop();
}