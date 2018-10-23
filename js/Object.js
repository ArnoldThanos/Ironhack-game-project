class Object {
  constructor(ctx, color, sideLength, x, y) {
    this.ctx = ctx
    this.color = color
    this.sideLength = sideLength
    this.x = x
    this.y = y
  }

  draw() {
    this.ctx.fillStyle="#FF0000";
    this.ctx.fillRect(this.x ,this.y ,this.sideLength, this.sideLength); 
    // console.log('drawed')
  }
}


// ctx.fillStyle="#FF0000";

// ctx.fillRect(50 ,50 , 50, 50);