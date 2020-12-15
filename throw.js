class Throw{
    constructor(x,y,body){
        var opt={
            pointA:{
                x:x,
                y:y
            },
            bodyB:body,
            stiffness:0.02,
            length:10
        }
        this.tow=Constraint.create(opt);
        World.add(world,this.tow);
    }
    fly(){
        this.tow.bodyB=null;
    }
    display(){
        if(this.tow.bodyB){
        stroke(0);
        var posA=this.tow.pointA;
        var posB=this.tow.bodyB.position;
        line(posA.x,posA.y,posB.x,posB.y);
        }
    }
}