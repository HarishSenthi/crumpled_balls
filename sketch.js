
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine,world,ball
var surface,pole1,pole2
//function preload()
//{
	
//}
var radius=40
function setup() {
	createCanvas(1600, 700);
  rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;
	 surface = new Ground(800,670,width,20);
	pole1 = new Ground(1100,610,20,120);
	pole2 = new Ground(1350,610,20,120);

var ball_options={
isStatic:false,
restitution:0.3,
friction:0,
density:1.2
}
	//Create the Bodies Here.
ball=Bodies.circle(200,100,radius/2,ball_options)
World.add(world,ball)

//ellipseMode(RADIUS);
Engine.run(engine);
}
	
  



function draw() {
  rectMode(CENTER)
  background(0);
  surface.show();
  pole1.show();
  pole2.show();
  ellipse(ball.position.x,ball.position.y,radius,radius)
  //drawSprites();
  //Engine.update(engine);
}
function keyPressed() {
  if (keyCode === UP_ARROW) {
    Matter.Body.applyForce(ball,ball.position,{x:85,y:-85})
  
  }
  }

