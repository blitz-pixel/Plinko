const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var particles=[];
var pinkos=[];
var pinkos1=[];
var divisions=[];
var divisionHeight= 400;

function setup() {
  var canvas = createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;

  for(k=0;k<=width;k=k+80){
    divisions.push(new division(k,height-divisionHeight/2,10,divisionHeight));
  }

  for(j=40;j<=width;j=j+50){
    pinkos.push(new pinko(j,75));
  }

  for(j=15;j<=width-10;j=j+50){
    pinkos.push(new pinko(j,150));
  }

  for(j=40;j<=width;j=j+50){
    pinkos.push(new pinko(j,225));
  }

  for(j=15;j<=width-10;j=j+50){
    pinkos.push(new pinko(j,300));
  }
 
  Basebody= new ground(240,790,480,10);

 console.log(frameRate);
}

function draw() {
  background("black");
  Engine.update(engine);  

  Basebody.display();

  for(k=0;k<divisions.length;k++){
    divisions[k].display();
  }
  
  for(j=0;j<pinkos.length;j++){
    pinkos[j].display();
  }

  if(frameCount%60 === 0){
    particles.push(new particle(random(width/2-10,width/2+10,),10,10));
 }

  for(i=0;i<particles.length;i++){
    particles[i].display();
  }

  

}