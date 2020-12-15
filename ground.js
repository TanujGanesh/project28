class Grd{
    constructor(x,y,w,h){
       var opt={
           isStatic:true
       } 
       this.body=Bodies.rectangle(x,y,w,h,opt);
       this.w=w;
       this.h=h;
       World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        push();
        translate(pos.x,pos.y);
        fill(150);
        noStroke();
        rectMode(CENTER);
        rect(0,0,this.w,this.h);
        pop();
        
    }
}