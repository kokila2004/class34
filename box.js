class Box{
    constructor(x,y,width,height){
        var options={
            
            friction:1,
            density:0.5
        }
        this.body=Bodies.rectangle(x,y,width,height)
        this.width=width
        this.height=height
        World.add(world,this.body)
    }
     display(){
         rectMode(CENTER)
         fill('white')
         stroke("green")
         strokeWeight(4)
         rect(this.body.position.x,this.body.position.y,this.width,this.height)

     }
    
}