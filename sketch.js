var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var ground,paper;
var box1,box2,box3;

function setup() {
	createCanvas(1300, 700);

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(650,height,1300,30);

	paper = new Paper(150,450,30)
	
	box1=new Dustbin(800,675,200,20);
	box2=new Dustbin(710,635,20,100);
	box3=new Dustbin(890,635,20,100);
	
}

function draw() {

	Engine.update(engine);
	background("DeepSkyBlue");
	
	ground.display();
	paper.display();

	box1.display();
	box2.display();
	box3.display();

	textSize(30);
	text ("Let's Keep Our City Clean", 475,75)

	fill("BLACK");
	strokeWeight(5)
	textSize(20);
	text ("TRASHBIN", 745,400)

  	drawSprites();
 
}


function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
  
	}
}


