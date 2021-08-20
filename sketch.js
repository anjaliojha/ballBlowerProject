const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

var ball;
var blower;
var mouthBlower;
var button;

function setup() {
  engine = Engine.create();
  world = engine.world;
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

  ball=new Ball(600,275,30)

  blower=new Blower(600,275,200,100);

  mouthBlower=new BlowerMouth(600,315,20,80)
  


}

function draw() {
  background(255,255,255);  
  drawSprites();

  button=createButton("Click to Blow");
  button.position(width/2,height-100);
  button.class("blowButton");
  button.mouseClicked(blow)

  ball.show()
  blower.show()
  mouthBlower.show()
}
function blow(){
Matter.Body.applyForce(ball.body,{x:0,y:0},{x:0,y:0.5});
}