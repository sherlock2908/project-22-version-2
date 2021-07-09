var starImg, fairyImg, bgImg;
var fairy , fairyVoice;
var star, starBody;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("star.png");
	fairyImg = loadAnimation("fairyImage1.png","fairyImage2.png");
	bgImg = loadImage("starNight.png");
	fairyVoice = loadSound("JoyMusic.mp3");

}

function setup() {
	createCanvas(800, 750);

	// fairyVoice.play();

	fairy = createSprite(130, 520);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.25;
	fairy.velocityX = 0; 

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

	star.x = starBody.position.x;
	star.y = starBody.position.y;

}


function draw() {
  background(bgImg);

  if (keyWentDown("right")) {
	fairy.velocityX = 2; 
}

if (keyWentDown("left")) {
	fairy.velocityX = -2; 
}

if (keyDown("space")) {
	fairy.velocityX = 0; 
}

if (keyDown("down")) {
	star.velocityY = 2; 
}

if (starBody.position.y > 470) {
	Matter.Body.setStatic(starBody, true);
}

  drawSprites();

}



