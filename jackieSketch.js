let numCircles = 50;
let circles = [];

let xOffset = 0;

function setup(){
  createCanvas(700 , 700);

  noStroke();

  let numLines = 5;
  for (let l = 0; l < numLines; l++){
    xOffset = 60 * (l + 1);
    //let x = 1000 / (l / numLines)
    for (let i = 0; i < numCircles; i++){
      var x = xOffset;
      console.log(l)
      //console.log(x)
      var y = random(1000);
      var r = random( 20 , 80);
      var c = color( 0 , random(255) , random (255) , random (255));
      var s = 0.5;
      circles[i] = new DrawCircle(x , y , r , c , s);
    }
  }

// circles[i] = new DrawCircle(150, random(1000), 20 , random(255) , 0.5);


}

function draw(){
  background (135 , 206 , 235);

  for (let i = 0; i < circles.length; i++) {
    circles[i].move();
    //console.log(circles[i].x);
    circles[i].display();
    //circles[i].shift();
  }

}


function DrawCircle( x , y , r , c , s){
    this.x = x;
    this.y = y;
    this.radius = r;
    this.color = c;
    this.speed = s;
}


  function mousePressed() {
 
  var r = random(20, 100);
  var c = color(0 , random(255) , random(255) , random(255));
  var s = (0.1 , 0.5);
  var newCircle = new DrawCircle(mouseX, mouseY, r, c, s);
  circles.push(newCircle);
}
function shift(DrawCircle){
  this.x += 40;
}


DrawCircle.prototype = {
  constructor: DrawCircle,
  //circle
  display: function() {
    fill(this.color);
    ellipse(this.x,this.y, this.radius);
    
  },
  
  move: function() {
    this.y += this.speed;
    // retset outside circles
    if (this.y -this.radius/2 > height) {
      this.y = -this.radius/2;
    }
  }
  
  // shift: function() {
  //   this.x += 1;
  // }

}