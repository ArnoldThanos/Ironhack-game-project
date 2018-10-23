class Player {
  constructor(ctx, x, y, radius, image) {
    this.ctx = ctx
    this.x = x
    this.y = y
    this.radius = radius
    this.image = image
    this.collison = false
    this.jumping = true
    this.x_velocity = 0
    this.y_velocity = 0 
    this.gravity = 0.3
  }
  top() { return this.y-this.radius }
  bottom() { return this.y+this.radius }
  left() { return this.x-this.radius }
  right() { return this.x+this.radius }

  draw() {
    // this.gravity()
    ctx.drawImage(
      this.image,
      this.x-this.radius,
      this.y-this.radius,
      2*this.radius,
      2*this.radius
    );
  }

  update() {
    this.x += this.x_velocity
    this.y += this.y_velocity
    this.y_velocity += this.gravity

  //   switch (keycode) {
  //     case 37:


  //     console.log('left')
    

  //       break;
  //   case 38:
  //     console.log('jump')

  //       break;
  //   case 39:
  //   console.log('right')


  //   break;
  // }




  }

  // If no direction, it stops
  move(direction) {
    this.x_velocity = 0
    if (direction === "right") {
      this.x_velocity = 3
    }
    if (direction === "left") {
      this.x_velocity = -3
    }
    if (direction === "up") {
      this.y_velocity = -10
    }
  }


}
