class Player {
  constructor(ctx, x, y, sideLength, image) {
    this.ctx = ctx
    this.x = x
    this.y = y
    this.sideLength = sideLength
    this.image = image
  }

  draw() {
    // this.gravity()
    ctx.drawImage(this.image,this.x,this.y,this.sideLength,this.sideLength);
  }

  moveLeft() {
    console.log('left')
    this.x-=10

  }

  moveRight() {
    console.log('right')
    this.x+=10


  }

  jump() {
    this.y-=30



  }
  

  gravity() {
    this.y = this.y + 0.2
  }

}
