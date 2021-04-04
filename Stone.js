class Stone{
    constructor(x,y,w,h){
     
    var options ={
       isStatic: false,
        restitution:0,
        friction:1,
        density:1.2
    }    
    this.w = w;
    this.h = h;
    this.image = loadImage("stone.png");
    this.body = Bodies.rectangle(x,y,w,h,options);
    World.add(world, this.body);
}

display(){

    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.w, this.h);
    pop();
  }
};

