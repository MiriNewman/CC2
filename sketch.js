const CANVAS_WIDTH = 400;
const CANVAS_HEIGHT = 300;
//const CANVAS_SIZE = [CANVAS_WIDTH, CANVAS_HEIGHT];
//const x = p5.cos(RADIANS) * RADIUS;
//const y = p5.sin(RADIANS) * RADIUS;

let counter = 0;
let timer = 0;
let randX, randY = 0;
let randR, randG, randB = 255;

function setup() {
  createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
}

function draw(){
  background(220, 180, 180);
  push();
    translate(40, 20);
    fill(220, 180, 180);
    noStroke();
    rect(15, 20, 60, 40);
    fill(120, 120, 220);
    textSize(20);
    text(counter, 35, 35)
    text(timer, 35, 55);
  pop();

  // push();
  // translate(CANVAS_WIDTH/2, CANVAS_HEIGHT/2);
  // fill(randR, randG, randB);
  // strokeWeight(3);
  // beginShape();
  //   vertex(-50 + timer * 5, -50);
  //   vertex(50, -50 + timer * 5);
  //   vertex(50 - timer * 5, 50);
  //   vertex(-50, 50 - timer * 5);
  //   beginContour();
  //     vertex(0 - timer/2, -10 + timer);
  //     vertex(-10 + timer, 10);
  //     vertex(10 - timer/2, 10 - timer);
  //   endContour();
  // endShape();
  // //triangle(0, -10, 10, 10, -10, 10);
  // pop();

  push();
  translate(CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2);
  beginShape();
    for(let i = 0; i < 3; i++){
      let incr = PI / 2;
      let radians = PI / 4 + i * incr;
      vertex(cos(radians) * 50, sin(radians) * 50);
    }
  endShape();

  pop();

  triangle(0, 50, 25, 0, 50, 50);


  counter++;
  counter %= 10;
  if (counter == 0){
    timer++;
  }
  timer %= 20;
  if ((timer == 0) && (counter == 0)){
    randR = random(256);
    randG = random(256);
    randB = random(256);
  }
}

//function
// PATH=${PATH}:/Users/...