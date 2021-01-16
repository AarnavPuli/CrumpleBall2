class box {
    constructor(x, y) {
      this.x = x
      this.y = y
      this.boxwidth = 200
      this.boxheight = 100
      this.thickness = 20
      this.angle = 0
      this.bottombody = Bodies.rectangle(this.x, this.y, this.boxwidth, this.thickness, {isStatic:true})
      this.leftbody = Bodies.rectangle(this.x-this.boxwidth/2, this.y-this.boxheight/2, this.thickness, this.boxheight, {isStatic:true})
      this.rightbody = Bodies.rectangle(this.x+this.boxwidth/2, this.y-this.boxheight/2, this.thickness, this.boxheight, {isStatic:true})
    Matter.Body.setAngle(this.leftbody, this.angle)
    Matter.Body.setAngle(this.rightbody,-1* this.angle) 
    this.image=loadImage("dustbingreen.png")
    World.add(world, this.bottombody) 
    World.add(world, this.leftbody)
    World.add(world, this.rightbody)  
  }
    display(){
      var pos =this.bottombody.position;
      var posleft =this.leftbody.position;
      var posright =this.rightbody.position;
      push();
      translate(pos.x, pos.y);
      rectMode(CENTER)
      fill("black")
      //rect(0, 0, this.boxwidth, this.thickness);
      imageMode(CENTER)
      image(this.image,0,-this.boxheight/2,this.boxwidth,this.boxheight)
      pop();
      push();
      translate(posleft.x, posleft.y);
      rotate(this.angle)
      rectMode(CENTER)
      fill("black")
      //rect(0, 0, this.thickness, this.boxheight);
      pop();
      push();
      translate(posright.x, posright.y);
      rotate(-1*this.angle)
      //rectMode(CENTER)
      fill("black")
      //rect(0, 0, this.thickness, this.boxheight);
      pop();
    }
  };