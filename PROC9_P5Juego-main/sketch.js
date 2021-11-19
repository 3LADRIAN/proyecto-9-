var caja;

function setup() {
  createCanvas(400,400);
  caja=createSprite(200,200,30,30);
  
}

function draw() 
{
  background("yellow");


  if(keyIsDown(LEFT_ARROW)){
    caja.position.x = caja.position.x -150;
  }

  if(keyIsDown(UP_ARROW)){
    caja.position.y = caja.position.y -150;
  }

  if(keyIsDown(DOWN_ARROW)){
    caja.position.y = caja.position.y +150;
  }

  if(keyIsDown(RIGHT_ARROW)){
    background("red");
  }
  
  drawSprites();
}




