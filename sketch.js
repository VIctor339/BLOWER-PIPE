const Engine = Matter.Engine;
 const Render = Matter.Render; 
 const World = Matter.World;
  const Bodies = Matter.Bodies;
   const Constraint = Matter.Constraint;
    const Body = Matter.Body;
     const Composites = Matter.Composites;
      const Composite = Matter.Composite; 
      let engine;
       let world;
        var ball;
         var blower; 
         var blowerMouth; 
         var button
function setup() {
var canvas = createCanvas(500,500);
ball = new Ball (width/2 + 80,height/2 - 80,80,80);
blower = new Blower (width/2 - 50,height/2 + 50,150,20)
blowerMouth = new BlowerMouth (width/2 + 70,height/2 +20,100,90);
button = createButtom ("Click to blow")
buttom.position(width/2,height - 100);
buttom.class("blowButton")
button.mousePressed(blow);
}

function draw() {
  background(69);
  Engine.update(engine)
  ball.show();
  blower.show();
  blowerMouth.show();


  drawSprites();
}
function blow(){
Matter.Body.applyForce(ball.body,{x:0,y:0},{x:0,y:0.05});
}