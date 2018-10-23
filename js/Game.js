class Game {
  constructor(ctx, grid, levelColor, player) {
    this.ctx = ctx
    this.grid = grid
    this.bricks = []
    this.intervalId
    this.player = player
    this.gameOver = false
    this.levelColor = levelColor
  }
  
  createLevel() {
    let pixelSide = 40;
    let xPos = 0;
    let yPos = 0;
    for (let y = 0; y < this.grid.length; y++) {
      for(let x = 0; x < this.grid[y].length; x++) {
        if(this.grid[y][x] === 1) {
          this.bricks.push(new Object(
          this.ctx,
          this.levelColor,
          pixelSide,
          xPos,
          yPos));
        }
        if (this.grid[y][x] === 2) {
          this.bricks.push(new Goal(
            this.ctx,
            pixelSide,
            xPos,
            yPos));
        }
        xPos+= pixelSide
      }
      // Resets the x position
      xPos = 0
      yPos+= pixelSide
    }
  }
  
  start() {
    this.createLevel()
    this.intervalId = setInterval(()=>{
      this.update()
      this.draw()
    }, 1000/60)
  }
  
  update() {
    playerOne.update()
    this.checkColision()
  }
  
  draw() {
    this.ctx.clearRect(0,0,this.ctx.canvas.width,this.ctx.canvas.height)
    for (let i = 0; i < this.bricks.length; i++) {
      // console.log(this.bricks[i])
      this.bricks[i].draw()
    }
    this.player.draw()
  }

  checkColision() {
    // this.collison = false;
    for (let i = 0; i < levelOne.bricks.length; i++) {

      // Check bottom collision for the player
      if (
        levelOne.bricks[i].top() < this.player.bottom() 
        && this.player.bottom() < levelOne.bricks[i].bottom() 
        && levelOne.bricks[i].left() < this.player.x
        && this.player.x < levelOne.bricks[i].right()
      ) {

        if (levelOne.bricks[i].type === 'goal') {
          this.nextLevel()

        } else {
          this.player.y = levelOne.bricks[i].top() - this.player.radius
          this.player.y_velocity = 0
        }
      }
      // Check top collision for the player
      if (
        levelOne.bricks[i].top() < this.player.top() 
        && this.player.top() < levelOne.bricks[i].bottom() 
        && levelOne.bricks[i].left() < this.player.x
        && this.player.x < levelOne.bricks[i].right()
      ) {

        if (levelOne.bricks[i].type === 'goal') {
          this.nextLevel()

        } else {
          this.player.y = levelOne.bricks[i].bottom() + this.player.radius
          this.player.y_velocity = 0
        }
      }
      // Check left collision for the player
      if (
        levelOne.bricks[i].left() < this.player.left() 
        && this.player.left() < levelOne.bricks[i].right() 
        && levelOne.bricks[i].top() < this.player.y
        && this.player.y < levelOne.bricks[i].bottom()
      ) {

        if (levelOne.bricks[i].type === 'goal') {
          this.nextLevel()

        } else {
          // different corerction for left and right for smother movement
          this.player.x+=1
          // this.player.x = levelOne.bricks[i].right() + this.player.radius
          this.player.x_velocity = 0
        }
      }
      // Check right collision for the player
      if (
        levelOne.bricks[i].left() < this.player.right() 
        && this.player.right() < levelOne.bricks[i].right() 
        && levelOne.bricks[i].top() < this.player.y
        && this.player.y < levelOne.bricks[i].bottom()
      ) {

        if (levelOne.bricks[i].type === 'goal') {
          this.nextLevel()

        } else {
          // different corerction for left and right for smother movement
          this.player.x-=1
          // this.player.x = levelOne.bricks[i].left() - this.player.radius
          this.player.x_velocity = 0
        }
      }
    }
    // check if outside left of screen
    if (this.player.x - this.player.radius < 0) {
      console.log('outside')
      this.player.x = 20
    }
    // check if outside right of screen
    if (this.player.x + this.player.radius > canvas.width) {
      this.player.x = canvas.width - 20
      console.log('outside')
    }

    // check if outside top of screen
    if (this.player.y - this.player.radius < 0) {
      console.log('outside')
      this.player.y_velocity = 2
    }

    // check if outside bottom of screen
    if (this.player.y + this.player.radius > canvas.height + 200) {
      this.gameOver = true
    
    }
  }

  nextLevel() {
    // playsound
    
    console.log('goal')

  }
}