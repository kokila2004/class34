class Ball{
  constructor(x,y,radius){
 var options={
    restitution:0.5,
    friction:1,
    density:0.5
 }
 this.body=Bodies.circle(x,y,radius,options)
 this.radius=radius
 World.add(world,this.body)
  }
  display(){
      ellipseMode(RADIUS)
      fill("red")
      ellipse(this.body.position.x,this.body.position.y,this.radius)
  }
}