
var wall,thickness;

var bullet,speed,weight;

function setup() {
  createCanvas(1600,400);

  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);

  bullet = createSprite(50,200,50,35);
  car.shapecolor="white";
  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor=color(80,80,80);

  car.velocityX=speed;
  bullet=weight;

}

function draw() {
  background(0);  

  if(hasCollided(bullet,wall)) 
  {
    ball.velocityX=0;
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);

    if(damage>10)
    {
      wall.shapeColor=color(255,0,0);
    }

    if(damage<10)
    {
      wall.shapeColor=color(0,255,0);
    }

  }

  
  drawSprites();
}

function hasColided(bullet,wall) 
{

  bulletRightEdge=bullet.x + bullet.width;
  wallLeftEdge=wall.x;

  if(bulletRightEdge>=wallLeftEdge) 
  {
    return true;
  }

  return false;
}