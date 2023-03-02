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
	createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT)
}

function draw() {
	background (110, 140, 100);

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
		for (let i = 0; i < this.numPetals; i++){
			circle(0 + cos(i * inc) * sqrt(this.size), 
				   0 + sin(i * inc) * sqrt(this.size), 
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

function mousePressed(){
	let flowerType = int(random(0, 2));
	console.log(flowerType);
	if (flowerType == 0){
		flowers++;
		bouquet[flowers] = new Rose(int(random(1, 10)),// num Petals
						 random(30),   // size
						 mouseX,
						 mouseY,
						 random(100),  // r
						 random(100),  // g
						 random(100)); // b
	} else if (flowerType == 1) {
		flowers++;
		bouquet[flowers] = new Daffodil(int(random(1, 4)),// num Petals
						 random(30),   // size
						 mouseX,
						 mouseY,
						 random(10),  // r
						 random(10),  // g
						 random(10)); // b
}
	/*
	rn++;
	roses[rn] = new Rose(random(1, 10),// num Petals
						 random(30),   // size
						 mouseX,
						 mouseY,
						 random(100),  // r
						 random(100),  // g
						 random(100)); // b
	*/
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
	/*
	dn++;
	daffodils[dn] = new Daffodil(random(1, 4),// num Petals
						 random(30),   // size
						 mouseX,
						 mouseY,
						 random(10),  // r
						 random(10),  // g
						 random(10)); // b
	*/

	// if (flowerType == 0) {
	// 	rn++;
	// 	roses[rn] = new Rose
	// } else if (flowerType == 1){
	// 	Tulip();
	// } else {
	// 	Daffodil();
	// }
	//console.log(rn);
}