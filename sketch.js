var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
//var particles = [];
var plinkos = [];
var divisions=[];

var divisionHeight=300;
var score =0;
var particle;
var turn=0;
var gameState="Play";

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 50; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 20; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 50; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 25; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  noStroke();
  textSize(20)
 text("Score : "+score,20,30);
  Engine.update(engine);
 
  text("500",25,525);
  text("500",105,525);
  text("500",185,525);
  text("100",265,525);
  text("100",345,525);
  text("100",425,525);
  text("100",500,525);
  text("100",580,525);
  text("200",660,525);
  text("200",740,525);

  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
  // if(frameCount%60===0){
    // particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
     //score++;
  // }
 
  //for (var j = 0; j < particles.length; j++) {
   
    // particles[j].display();
   //}
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }

   if(particle != null){
     particle.display();
     if(particle.body.position.y>760){
       
      if(particle.body.position.x>0 && particle.body.position.x<200){
        score=score+500;
        particle=null;
        if(turn>=5) gameState="end";
      
      }
     }
   }

   if(particle != null){
    particle.display();
    if(particle.body.position.y>760){
      
     if(particle.body.position.x>201 && particle.body.position.x<600){
       score=score+100;
       particle=null;
       if(turn>=5) gameState="end";
     
     }
    }
  }  
  
  
  if(particle != null){
    particle.display();
    if(particle.body.position.y>760){
      
     if(particle.body.position.x>601 && particle.body.position.x<900){
       score=score+200;
       particle=null;
       if(turn>=5) gameState="end";
     
     }
    }
  }
   console.log(gameState);
   //mousePressed();

   if(gameState === "end"){
    textSize(50);
    text("Game Over",240,250);
  }
  }

function mousePressed(){
  if(gameState === "Play"){
    turn++;
    particle=new Particle(mouseX,10,10,10);
  }
}