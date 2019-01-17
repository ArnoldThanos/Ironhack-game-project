class Object {
  constructor(ctx, color, sideLength, x, y) {
    this.ctx = ctx
    this.color = color
    this.sideLength = sideLength
    this.x = x
    this.y = y
    this.type = 'object'
  }
  draw() {
    this.ctx.fillStyle=this.color;
    this.ctx.fillRect(this.x, this.y, this.sideLength, this.sideLength); 
  }
  top() { return this.y }
  bottom() { return this.y+this.sideLength }
  left() { return this.x }
  right() { return this.x+this.sideLength }
}


