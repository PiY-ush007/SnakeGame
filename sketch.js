var player;
var food;
var score=0;


function setup() {
  createCanvas(400, 400);
 player=createSprite(200,200,20,20);
 food=createSprite(300,300,20,20)
 
}

function draw() {
  background("Lightgreen");

  if(keyDown("UP_ARROW")){
    player.velocityY= -8;
    player.velocityX= 0;
  }

  if(keyDown("DOWN_ARROW")){
    player.velocityY= +8;
    player.velocityX= 0;
  }
  if(keyDown("LEFT_ARROW")){
    player.velocityX= -8;
    player.velocityY= 0;
  }

  if(keyDown("RIGHT_ARROW")){
    player.velocityX= +8;
    player.velocityY= 0;
  }
  if(player.isTouching(food)){
    food.x=random(30,370);
    food.y=random(30,370);
    score+=1;
    player.width+=5;
    player.height+=5;
  }
  textSize(20);
  
  text("score:"+ score,30,30);

 player.shapeColor=("red");
drawSprites();

if(player.x>400||player.x<0){
  score-=1;
}

if(player.y>400||player.y<0){
  score-=1;
}
 }


 


