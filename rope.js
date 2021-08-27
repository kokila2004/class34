class Rope{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.5,
            length:100

        }
        this.pointB=pointB
        this.rope=Matter.Constraint.create(options)
        World.add(world,this.rope)
    
        
    }
    display(){
        strokeWeight(5)
        stroke("black")
        line(this.rope.bodyA.position.x,this.rope.bodyA.position.y,this.pointB.x,this.pointB.y)


    }
}