class Trap {
  constructor(ctx,  sideLength, x, y, movement) {
    this.ctx = ctx
    this.color = 'red'
    this.sideLength = sideLength
    this.x = x
    this.y = y
    this.type = 'object'
    this.type = 'trap'
    this.image = new Image(),
    this.movement = movement,
    this.movementCounter = 0
    this.speed = 2
  }

  draw() {
    if (this.movement === 'verticaly_1') {
      if (this.movementCounter > 150 || this.movementCounter <0) {
        
        this.speed =  this.speed - (this.speed * 2)

      }


      

      this.movementCounter+= this.speed
      this.y+= this.speed

      console.log(this.speed)



    }

    if (this.movement === 'horisontaly_1') {
      if (this.movementCounter > 150 || this.movementCounter <0) {
        
        this.speed =  this.speed - (this.speed * 2)

      }


      this.movementCounter+= this.speed
      this.x+= this.speed

      console.log(this.speed)



    }





    this.image.src="../images/trap.png"
   
    ctx.drawImage(this.image,this.x,this.y,40,40); 
  }


  update() {

  }

  top() { return this.y }
  bottom() { return this.y+this.sideLength }
  left() { return this.x }
  right() { return this.x+this.sideLength }
}