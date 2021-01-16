const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1600,700);
    engine = Engine.create();
    world = engine.world;
box1= new box(1200,650)
ball1= new Ball(200, 450, 40)
ground = new Ground(width/2, 670, width, 20)
Engine.run(engine);
}

function draw(){
    background("white");
    box1.display()
    ball1.display()
    ground.display()
}
function keyPressed(){
    if (keyCode==UP_ARROW){
        Matter.Body.applyForce(ball1.body, ball1.body.position, {x:85, y:-85})
    }
}