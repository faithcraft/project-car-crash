var car, wall;
var speed, weight;



function setup() {
  createCanvas(1600,400);
  //createSprite(400, 200, 50, 50);
  speed = random(55, 90);
  weight = random(400, 1500); 
  car = createSprite(50, 200, 50, 50);
  wall = createSprite(1500, 200, 60, 200);
  wall.shapeColor = color (230,230,230);

  car.velocityX = speed;
}

function draw() {
  background(0);
  
  if (car.x - wall.x <= wall.width/2 + car.width/2
    && wall.x - car.x <= wall.width/2 + car.width/2)
    {
      var deformation = 0.5* weight* speed* speed/22500; 
      car.velocityX = 0;
      if (deformation <100)
      {
        car.shapeColor = color(0, 255, 0);
      }
      else if (deformation >100 && deformation <180)
      {
        car.shapeColor = color(230, 230, 0);
      }
      else if(deformation >180)
      {
        car.shapeColor = color(255, 0, 0);
      }
      


    
    }




  drawSprites();
}