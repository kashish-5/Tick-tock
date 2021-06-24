var hr,min,sc;


function setup() {
  createCanvas(400,400);
  //createSprite(400, 200, 50, 50);
  angleMode(DEGREES);

}

function draw() {
  background(0);  
  translate(200,200);
  rotate(-90);


  hr=hour();
  min=minute();
  sc=second();

  scAngle=map(sc,0,60,0,360);
  minAngle=map(min,0,60,0,360);
  hrAngle=map(hr%12,0,12,0,360);

  push();
  rotate(scAngle);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,100,0);
  pop();

  push();
  rotate(minAngle);
  stroke("green");
  strokeWeight(7);
  fill("green");
  line(0,0,75,0);
  pop();

  push();
  rotate(hrAngle);
  stroke("blue");
  strokeWeight(7);
  fill("blue");
  line(0,0,50,0);
  pop();

  strokeWeight(7);
  noFill();
  stroke(255,0,0);
  arc(0,0,300,300,0,scAngle);

  strokeWeight(7);
  noFill();
  stroke("green");
  arc(0,0,280,280,0,minAngle);

  strokeWeight(7);
  noFill();
  stroke("blue");
  arc(0,0,260,260,0,hrAngle);





  drawSprites();
}