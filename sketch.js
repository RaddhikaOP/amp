var bg1,bg2,bg3,bg4,bg5,bg6,bg7,bg8,bg9;
var pl1,pl2,pl3;
var b1,b2,b3,b4,b5,b6,b6,b8,b9;
var p1,p2,p3;
var player
var food, foodimg;

function preload()
{
	bg1 = loadImage("amphouse.jpg")
	bg2 = loadImage("bed.jpg")
	bg3 = loadImage("cafe.jpg")
	bg4 = loadImage("golf.jpg")
	bg5 = loadImage("gym.jpg")
	bg6 = loadImage("house1.jpg")
	bg7 = loadImage("park.jpg")
	bg8 = loadImage("shoot.jpg")
	bg9 = loadImage("shop.jpg")
	pl1 = loadImage("ben.png")
	pl2 = loadImage("brent.png")
	pl3 = loadImage("lexi.png")
	foodimg = loadImage("pizza.png")
}

function setup() 
{
	createCanvas(800, 400);
	
	start();
	
}

	


function draw() {
	rectMode(CENTER);
	
	//background("black");
	if(mousePressedOver(p1)){
		player = p1;
		breakfast()
	}

	if(mousePressedOver(p2)){
		player = p2;
		breakfast()
	}


	if(mousePressedOver(p3)){
		player = p3;
		breakfast()
	}

	drawSprites();
	text(mouseX + "," + mouseY ,20,20)
	
	
	
}

function start(){

	b1 = createSprite(400,155,800,400)
	b1.addImage(bg1)
	b1.scale = 0.7
	fill("yellow")
	textSize(20)
	text("Welcome to the life of a Amp Members! Choose one of the following players to continue..",10,35)
	
	p1 = createSprite(110,278,20,20)
	p1.addImage(pl1)
	p1.scale= 0.4

	p2 = createSprite(750,290,20,20)
	p2.addImage(pl2)
	p2.scale=1.25

	p3 = createSprite(380,260,20,20)
	p3.addImage(pl3)
	p3.scale= 0.5

	if(mousePressedOver(p1)){
		player = p1;
		breakfast()
	}

	if(mousePressedOver(p2)){
		player = p2;
		breakfast()
	}


	if(mousePressedOver(p3)){
		player = p3;
		breakfast()
	}




}

function breakfast(){


	b2 = createSprite(400,155,800,400)
	b2.addImage(bg3)
	b1.scale = 0.7

	food = createSprite(495,265,30,30)
	food.addImage(foodimg)
	food.scale = 0.3
}







