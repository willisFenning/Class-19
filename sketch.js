var PLAY = 1;
var END = 0;
var gameState = PLAY;

var jiafeiHead;
var robloxCharacter, robloxCharRunning, robloxCharJumping;

var ground, groundImg;
var background, backgroundImg;

var clouds, cloudImg, cloudsGroup;
var obstacles, obsraclesImg, obstaclesGroup;
var gameOverImg;



function preload(){
   jiafeiHead = loadImage("jiafei head-modified.png");

   robloxCharRunning = loadImage("robloxCharRunning.png");
   robloxCharJumping = loadImage("robloxCharJumping.png");
   
   gameOverImg = loadImage("gameOver.png");
   

}

function setup() {
    createCanvas(windowHeight, windowWidth);

    robloxCharacter = createSprite(200, 200, 20, 50);
    robloxCharacter.addImage(robloxCharRunning);

    jiafeiHead = createSprite(50, 200, 40, 40);
    jiafeiHead.addImage(jiafeiHead);
    jiafeiHead.setCollider(20, 80, 200, 60);
    jiafeiHead.debug = true;

    cloudsGroup = createGroup();
    obstaclesGroup = createGroup();

}

function draw() {
    background("white");

  if(ground.x> 400){
    ground.x = 300;
   }

  if(gameState === PLAY){

    if(ground.x>0){
        ground.x = width/2;
    }

    if(keyDown("space" && robloxCharacter.y >= 100)){
        robloxCharacter.velocityY = -5;
    }

  robloxCharacter.velocityY = robloxCharacter.velocityY + 0.8;


  }   
  

 
    drawSprites();
}



function spawnObstacles(){


}



function spawnClouds(){


}

function reset(){

  
}






