const CANVAS_WIDTH = 500;
const CANVAS_HEIGHT = 500;

let rn = 0; // number of roses
let roses = [];
let tn = 0; // number of tulips
let tulips = [];
let dn = 0; // number of daffodils
let daffodils = [];
let flowers = 0; // number of flowers
let bouquet = [];

function setup() {
	//var cnv = createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT)
	
	var cnv = createCanvas(windowWidth, windowHeight);
	cnv.style('display', 'block');
	sizeXSetup = windowWidth;
	sizeYSetup = windowHeight;
	
}

function draw() {
	background (170, 200, 160);

	// for (rn in roses){
	// 	roses[rn].draw();
	// }
	// for (tn in tulips){
	// 	tulips[tn].draw();
	// }
	// for (dn in daffodils){
	// 	daffodils[dn].draw();
	// }
	for (flowers in bouquet){
		bouquet[flowers].draw();
	}
}

class Rose{
	constructor(nP, s, x, y ,r, g, b, a){
		this.numPetals = 10 + nP;
		this.size = 35 + s;
		this.x = x;
		this.y = y;
		this.r = 155 + r;
		this.g = 120 * (g / 100);
		this.b = 100 + b;
		this.a = a;
	}

	draw(){
		push()
		translate(this.x, this.y);
		//let roseColor = `rgba(${this.r}, ${this.g}, ${this.b}, 0.25)`;
		fill(this.r, this.g, this.b, 100);
		//fill(color);
		//noFill();
		
		let inc = TWO_PI / this.numPetals;
		for (let i = 0; i < this.numPetals; i++){
			circle(0 + cos(i * inc) * this.size * 0.6, 
				   0 + sin(i * inc) * this.size * 0.6, 
				   this.size);
		}
		fill(this.g, this.b, this.r, 20);
		for (let i = 0; i < this.numPetals/2; i++){
			circle(0 + cos(i * inc * 2) * sqrt(this.size), 
				   0 + sin(i * inc * 2) * sqrt(this.size), 
				   this.size);
		}
		circle(0, 0, 40)
		pop()
	}
}

class Tulip{

}

class Daffodil{
	constructor(nP, s, x, y, r, g, b, a){
		this.numPetals = 3 + (nP * 2);
		this.size = 35 + s;
		this.x = x;
		this.y = y;
		this.r = 245 + r;
		this.g = 245 + g;
		this.b = 100 + b;
		this.a = a;
		//this.origin = {0, 0};
	}

	draw(){
		push();
		translate(this.x, this.y);
		fill(this.r, this.g, this.b, 150);

		let inc = TWO_PI / this.numPetals;
		let offset = this.size / (this.numPetals / 2) + ((1/this.numPetals) * this.size);
		beginShape();
		for (let i = 0; i < this.numPetals; i++){
			let angle = i * inc;
			vertex(0,0);
			bezierVertex(cos(angle) * this.size + sin(angle) * offset,
						 sin(angle) * this.size - cos(angle) * offset, 
						 cos(angle) * this.size - sin(angle) * offset, 
						 sin(angle) * this.size + cos(angle) * offset, 
						 0, 
						 0);
		}
		endShape();
		fill(this.r, this.g, this.b, 240);
		circle(0, 0, this.size / 2);
		pop();
	}
}

function createRose(){
	bouquet[flowers] = new Rose(
			int(random(1, 5)),// num Petals
				random(30),   // size
				mouseX,
				mouseY,
				random(100),  // r
				random(100),  // g
				random(100)); // b
}

function createDaffodil(){
	bouquet[flowers] = new Daffodil(
			int(random(1, 4)),// num Petals
				 random(30),   // size
				 mouseX,
				 mouseY,
				 random(10),  // r
				 random(10),  // g
				 random(10)); // b
}

function mousePressed(){
	let flowerType = int(random(0, 2));
	flowers++;
	console.log(flowerType);
	if (flowerType == 0){
		//flowers++;
		createRose();
	} else if (flowerType == 1) {
		createDaffodil();
	}
	/*
	tn++;
	tulips[tn] = new Tulip(int(random(1, 4)),// num Petals
						 random(30),   // size
						 mouseX,
						 mouseY,
						 random(10),  // r
						 random(10),  // g
						 random(10)); // b
	*/
}

function windowResized(){
	resizeCanvas(windowWidth, windowHeight);
	console.log(windowWidth);
}