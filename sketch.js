const Engine=Matter.Engine 
const World=Matter.World
const Bodies=Matter.Bodies
var engine,world
var ground
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10
var ball
var rope
function setup(){
createCanvas(1000,600)
engine=Engine.create()
world=engine.world
ground=new Ground(500,500,1000,20)
box1=new Box(700,100,100,100)
box2=new Box(700,100,100,100)
box3=new Box(700,100,100,100)
box4=new Box(600,100,100,100)
box5=new Box(600,100,100,100)
box6=new Box(600,100,100,100)
box7=new Box(500,100,100,100)
box8=new Box(500,100,100,100)
box9=new Box(500,100,100,100)
box10=new Box(400,100,100,100)
box11=new Box(400,100,100,100)
box12=new Box(400,100,100,100)
ball=new Ball(200,400,50)
rope=new Rope(ball.body,{x:500,y:50})
}

function draw(){
background("grey")
Engine.update(engine)
ground.display()
box1.display()
box2.display()
box3.display()
box4.display()
box5.display()
box6.display()
box7.display()
box8.display()
box9.display()
box10.display()
box11.display()
box12.display()
ball.display()
rope.display()
}