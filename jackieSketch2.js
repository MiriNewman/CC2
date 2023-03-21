const SCREEN_WIDTH = 500;
const SCREEN_HEIGHT = 500;

const NUM_LINES = 6;
const NUM_BUBBLES = 25;

let bubbleLines = []; // initialize an array to hold each line
let lines = 0;
let formedLine = []; // initialize an array to hold all the bubbles
let bubble = 0; // this will increase with every bubble down in the Bubble class
let bubbles = [];
let clicks = 0;

function setup(){
  createCanvas(SCREEN_WIDTH, SCREEN_HEIGHT);
  for (let l = 0; l <= NUM_LINES; l++){ // ALTERNATIVE: take out the equals in here...
    let xOffset = int(SCREEN_WIDTH * (l / NUM_LINES)); // ...comment out this line...
    //let xOffset = int(SCREEN_WIDTH * ((l + 1) / (NUM_LINES + 1))); ...and un-comment this line 
    bubbleLines[lines] = new BubbleLine(NUM_BUBBLES, xOffset)
    bubbleLines[lines].CreateLine();
    console.log(xOffset);
    lines++;
  }
}

function draw(){
  background(135 , 206 , 235)
  for (bubble in bubbles){
    bubbles[bubble].display();
  }
}

class Bubble{ // since this is its own class you can easily add a click to add your own bubbles
  constructor(x, y, iM){
    this.size = int(random(20, 50));
    this.x = x;
    if (y == 0){
      this.y = int(random(SCREEN_HEIGHT));
    } else {
      this.y = y;
    }
    this.r = 0;
    this.g = int(random(120, 235));
    this.b = int(random(140, 255));
    this.color = (this.r, this.g, this.b)
    this.speed = .25;
    this.alpha = 200;
    this.isMoving = iM;
    bubble++;
  }

  display(){
    push()
    translate(this.x, this.y);
    noStroke();
    fill(this.r, this.g, this.b, this.alpha);
    circle(0, 0, this.size);
    pop()
    this.update();
    if (this.y >= SCREEN_HEIGHT){
      this.y = 0;
    }
  }

  update(){
    if (this.isMoving){
     this.y = this.y + this.speed;
    } else {
      this.size = this.size + 1;
      if (this.size >= 100){
        this.size = 0;
        bubbles.splice(bubble, 1);
      }
    }
  }
} 

class BubbleLine{ // the class of lines that initially forms the bubbles in a line
  constructor(nB, x){
    this.numBubbles = NUM_BUBBLES;
    this.x = x;
  }

  CreateLine(){
    for (let i = 0; i < this.numBubbles; i++){
      bubbles[bubble] = new Bubble(this.x, 0, true)
    }
  }
}

function mouseClicked(){
  bubble++;
  bubbles[bubble] = new Bubble(mouseX, mouseY, false);
  console.log(bubble)
}