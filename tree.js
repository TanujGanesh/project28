class Tr{
    constructor(){
        var opt={
            isStatic:true
        }
        this.body=Bodies.rectangle(600,480,100,20,opt);
        this.image=loadImage("tree.png");
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        imageMode(CENTER);
        image(this.image,600,275,350,450);
    }
}