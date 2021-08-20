class Ball{
    constructor(x,y,r){
        var options={
            restitution:0.8
        }
    this.x=x;
    this.y=y
    this.r=r
    this.body=Bodies.circle(x,y,r,options)
    World.add(world,this.body)
    }
    show(){
        var pos=this.body.position
        var angle=this.body.angle
        push()
        translate(pos.x,pos.y);
         rotate(angle)
        ellipseMode(RADIUS)
        ellipse(0,0,this.r,this.r)
        pop()
        
   
    }
   }