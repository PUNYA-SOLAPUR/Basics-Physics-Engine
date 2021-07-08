
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball;
var ground, rock, wall1;

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
   
   var ground_options ={
     isStatic: true
   };
  

  ground = Bodies.rectangle(200,390,400,20,ground_options);
  World.add(world,ground);

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);

  var rockS = {
    restitution : 1
  }
  rock = Bodies.circle(170, 80, 35, rockS);
  World.add(world, rock);

  wall1 = Bodies.rectangle(20, 250, 200, 30, ground_options);
  World.add(world, wall1);


  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  ellipse(ball.position.x,ball.position.y,20);
  rect(ground.position.x,ground.position.y,400,20);
  ellipse(rock.position.x,rock.position.y,35);
  rect(wall1.position.x, wall1.position.y, 200, 30);
 
}

