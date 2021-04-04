class Mango{
    constructor(x, y, r) {
        var options = {
            restitution:0.8,
            friction:1.0,
            isStatic: true
        }
        
        this.x = x;
        this.r = r;
        this.y = y;
        this.body = Bodies.circle(this.x,this.y,(this.r-20)/2,options)
        this.image = loadImage("mango.png");
        World.add(world, this.body);
      }
      display(){
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        imageMode(CENTER);
        image(this.image, 0, 0, this.r,);
        ellipse(0,0,this.r,this.r)
        pop();
      }
    }