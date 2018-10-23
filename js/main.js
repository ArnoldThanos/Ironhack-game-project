var canvas = document.querySelector('canvas')

var ctx = canvas.getContext('2d')

// ctx.fillRect(40, 40, 40, 40)

console.log('Height: ' + canvas.height)
console.log('Width: ' + canvas.width)

class Game {
  constructor(ctx, grid, color, player) {
    this.ctx = ctx
    this.grid = grid
    this.bricks = []
    this.color = color
    this.intervalId
    this.player = player
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
          this.color,
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
    }, )
  }
  
  update() {
    this.draw()
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
    for (let i = 0; i < this.bricks.length; i++) {
      if (this.player.x + 40 > this.bricks[i].x && this.player.x < this.bricks[i].x + 40) {
        if (this.player.y + 40 > this.bricks[i].y) {
          // return true;
          console.log('touch')

        }


      }
    }


  }
}

/// first level
var firstPlayerImg = new Image();
firstPlayerImg.src="../images/flares/extend.png"
var playerOne = new Player (ctx, 100, 520, 40, firstPlayerImg)
var levelOne = new Game(ctx, levels[0].grid, '#8e44ad', playerOne)



levelOne.start()




// function movePLayerHandler(player) {

//   document.


// }

window.addEventListener("keydown", function(e) {
  switch (e.keyCode) {
    case 37:
    

      playerOne.moveLeft()
        break;
    case 38:
      playerOne.jump()

        break;
    case 39:
      playerOne.moveRight()

    break;
  }
});