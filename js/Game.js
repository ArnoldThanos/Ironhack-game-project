class Game {
  constructor(ctx,  player) {
    this.ctx = ctx
    this.bricks = []
    this.intervalId
    this.player = player
    this.gameOver = false
    this.currentLevel = 0
  }
  
  createLevel() {
    let pixelSide = 40;
    let xPos = 0;
    let yPos = 0;
    // console.log(levels[0].grid)
    for (let y = 0; y < levels[this.currentLevel].grid.length; y++) {
      for(let x = 0; x < levels[this.currentLevel].grid[y].length; x++) {
        if(levels[this.currentLevel].grid[y][x] === 1) {
          this.bricks.push(new Object(
          this.ctx,
          levels[this.currentLevel].color,
          pixelSide,
          xPos,
          yPos));
        }
        if (levels[this.currentLevel].grid[y][x] === 2) {
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

    this.player.x = levels[this.currentLevel].playerStart_x
    this.player.y = levels[this.currentLevel].playerStart_y

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
    let firedOnce = true



    if (firedOnce) {
     
        
        clearInterval(this.intervalId);
        this.bricks = [];
        this.currentLevel++
        console.log(this.currentLevel, 'COUNTER')
        console.log(levels[this.currentLevel].grid)


  
        this.start()


        firedOnce = false
    


    }


   


    
  }
}