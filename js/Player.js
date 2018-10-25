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
    this.gravity = 0.9,
    this.jumping = false
  }
  top() { return this.y-this.radius }
  bottom() { return this.y+this.radius }
  left() { return this.x-this.radius }
  right() { return this.x+this.radius }

  draw() {
    // this.gravity()
      this.ctx.drawImage(
      this.image,
      this.x-this.radius,
      this.y-this.radius,
      2*this.radius,
      2*this.radius,
    );
  }

  update() {
    this.x_velocity*=0.9
    this.y_velocity*=0.9

    if (playerDirection.right) {
      this.x_velocity+=0.5
    }

    if (playerDirection.left) {
      this.x_velocity-=0.5
    }

    if (playerDirection.up && !this.jumping) {
      this.jumping = true
      this.y_velocity=-20
    }

    this.x += this.x_velocity
    this.y += this.y_velocity
    this.y_velocity += this.gravity  
  }
}
