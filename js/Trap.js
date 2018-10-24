class Trap {
  constructor(ctx,  sideLength, x, y) {
    this.ctx = ctx
    this.color = 'red'
    this.sideLength = sideLength
    this.x = x
    this.y = y
    this.type = 'object'
    this.type = 'trap'
    this.image = new Image()
  }

  draw() {
    this.image.src="../images/flares/trap.png"
   
    ctx.drawImage(this.image,this.x,this.y,40,40); 
  }

  top() { return this.y }
  bottom() { return this.y+this.sideLength }
  left() { return this.x }
  right() { return this.x+this.sideLength }
}