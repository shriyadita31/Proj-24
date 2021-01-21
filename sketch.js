const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2;
var box3,box4,box5;
var pig1,pig2;
var log1,log2,log3,log4;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(900,300);
    box2 = new Box(700,300);
    box3 = new Box(900,200);
    box4 = new Box(700,200);
    pig1 = new Pig(800,300);
   // pig2 =new Pig(1050,200);
    log1= new Log(803,200,280,PI/2)
    ground = new Ground(600,380,1200,20)

}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    pig1.display();
   // pig2.display();
    ground.display();
    log1.display();
}