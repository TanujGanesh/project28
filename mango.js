class Mango{
    constructor(x, y, width, height) {
        var options = {
            'isStatic':true,
            'restitution':0,
            'friction':1,
        }
        this.body = Bodies.circle(x, y,15, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("mango.png");
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
      }
}