class Goal {
  constructor(ctx, sideLength, x, y) {
    this.ctx = ctx
    this.sideLength = sideLength
    this.x = x
    this.y = y
    this.type  = 'goal'
  }

  draw() {
    this.ctx.fillStyle= 'red';
    this.ctx.fillRect(this.x, this.y, this.sideLength, this.sideLength); 
  }

  top() { return this.y }
  bottom() { return this.y+this.sideLength }
  left() { return this.x }
  right() { return this.x+this.sideLength }
}