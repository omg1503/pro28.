
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var boy,boyImg;
var stone;
var  ground;
var tree;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9;
var sling;
function preload()
{
	boyImg = loadImage("boy.png");
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
 stone = new Stone(160,500,50,50);
 ground = new Ground(600,height,1200,20);
 tree = new Tree(900,400,380,600);
 mango1 = new Mango(880,270,2);
 mango2 = new Mango(890,245,2);
 mango3 = new Mango(850,290,2);
 mango4 = new Mango(880,230,2);
 mango5 = new Mango(880,300,2);
 mango6 = new Mango(880,220,2);
 mango7 = new Mango(880,320,2);
 mango8 = new Mango(880,224,2);
 mango9 = new Mango(880,315,2);
 sling = new Slingshot(stone.body, {x:160,y:500});
 boy = createSprite(240,600,10,5);
 boy.scale=0.15;
 boy.addImage(boyImg);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  
  stone.display();
  ground.display();
  tree.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  sling.display();



  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  detectCollision(stone,mango6);
  detectCollision(stone,mango7);
  detectCollision(stone,mango8);
  detectCollision(stone,mango9);
  
 
  drawSprites();
 
}


function mouseDragged(){

	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
	sling.fly();
}

function detectCollision(lstone,lmango){

	mangoBodyPosition = lmango.body.position;
	stoneBodyPosition = lstone.body.position;

	var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
if(distance<=lmango.r+lstone.r){

	Matter.Body.setStatic(lmango.body,false);
}

}

function keyPressed(){
	if (keyCode === 32){

		Matter.Body.setPosition(stone.body, {x:160,y:500})
	}
}