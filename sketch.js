
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bob1, bob2, bob3, bob4, bob5;
var roof;
var rope;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	roof = new Roof(400, 200, 400, 20);
	bob1 = new Bob(300, 400, 50);
	bob2 = new Bob(350, 400, 50);
	bob3 = new Bob(400, 400, 50);
	bob4 = new Bob(450, 400, 50);
	bob5 = new Bob(500, 400, 50);
	rope1 = Rope(bob1.body, roof.body, 2, 0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope1.display();
  
  drawSprites();
 
}



