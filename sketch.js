var car,wall,speed,weight,rectangle,deformation;






function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
speed=random(55,90)
weight=random(400,1500)
rectangle=createSprite(50,200,50,50)
wall=createSprite(1500,200,60,height/2)
wall.shapeColor=(80,80,80)
car.velocityX=speed;
}


function draw() {
  background(255,255,255);  
 if(wall.x-car.x<(car.width+wall.width)/2) 
 { car.velocityx=0
var deformation=0.5*weight*speed*speed/22509
if(deformation>180)
 {
car.shapeColor=color(255,0,0)

}
if(deformation<180&&deformation>100) 
 {
 car.shapecolor=color(230,230,0)
 }
 if(deformation<100)
 {
   car.shapecolor=color(0,255,0)
 }
}
 
  drawSprites();
}