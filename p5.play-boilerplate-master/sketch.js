var mr, fr;


function setup() {
  createCanvas(800,400);
  mr =createSprite(400, 200, 50, 50);
  fr = createSprite(200,200,50,80);
  mr.velocityX = -5;
  fr.velocityX = 5;
}

function draw() {
  background(255,255,255);  
  if(mr.x-fr.x<mr.width/2+fr.width/2 &&fr.x-mr.x<mr.width/2+fr.width/2){
  mr.velocityX = mr.velocityX*(-1);
  fr.velocityX = fr.velocityX*(-1);
  }
  drawSprites();
}