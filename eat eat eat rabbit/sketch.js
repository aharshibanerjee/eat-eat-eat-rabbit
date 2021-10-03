var garden,rabbit,apple,leaf1,leaf2,leaf3;
var gardenImg,rabbitImg,appleimg,leaf1img,leaf2img,leaf3img;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleimg = loadImage("apple.png");
  leaf1img = loadImage("redImage.png");
  leaf2img = loadImage("orangeLeaf.png");
  leaf3img = loadImage("leafI.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
 rabbit.x=World.mouseX
 //spawning apples
 applespawn() 
 drawSprites();
}
function applespawn(){
  if(frameCount%60===0){
  apple=createSprite(600,100,40,25);
  apple.velocityY=5;
      apple.addImage(appleimg) 
      apple.x=Math.round(random(15,355))   
      apple.scale=0.05
}}
function leaf1pawn(){
  if(frameCount%60===0){
    leaf1=createSprite(600,100,40,25);
  leaf1.velocityY=3;
  leaf1.addImage(leaf1img) 
  leaf1.x=Math.round(random(1,400))   
  leaf1.scale=0.05
  }}
  function leaf1pawn(){
    if(frameCount%60===0){
      leaf2=createSprite(600,100,40,25);
    leaf2.velocityY=3;
    leaf2.addImage(leaf2img) 
    leaf2.x=Math.round(random(1,400))   
    leaf2.scale=0.05
    }}
    function leaf1pawn(){
      if(frameCount%60===0){
        leaf3=createSprite(600,100,40,25);
      leaf3.velocityY=3;
      leaf3.addImage(leaf3img) 
      leaf3.x=Math.round(random(1,400))   
      leaf3.scale=0.05
      }}