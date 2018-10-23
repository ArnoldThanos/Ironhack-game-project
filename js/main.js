var canvas = document.querySelector('canvas')

var ctx = canvas.getContext('2d')

class Game {
  constructor(ctx, grid, platformColor) {
    this.ctx = ctx
    this.grid = grid
    this.object = platformColor
    this.pixelWidth = canvas.width / 20
    this.bricks = [];
  }
  
  createLevel() {
    let x = 0
    let y = 0
    let nr = 0;
    for (let iRow = 0; iRow < this.grid[0].length; iRow++) {
      x = x + this.pixelWidth
      for (let iCol = 0; iCol < this.grid.length; iCol++) {
        if(this.grid[iCol][iRow] === 0) {
          
          this.bricks.push(new Object (this.ctx, 'red', this.pixelWidth, x, y));
          
          console.log()
          nr++
        } 
        
        // console.log(canvas.width)
        // console.log(this.pixelWidth)
        
        // console.log(this.grid[iRow][iCol])
        // console.log({x})
        // console.log({y})
        
        
      }
      y+= this.pixelWidth
    }
  }
  
  start() {
    this.createLevel()
    // this.intervalId = setInterval(()=>{
      this.draw()
      
    // }, )
  }
  
  update() {
    
  }
  
  draw() {
 
    // this.ctx.clearRect(0,0,this.ctx.canvas.width,this.ctx.canvas.height)
    for (let i = 0; i < this.bricks.length; i++) {

      console.log(this.bricks[i])


      this.bricks[i].draw()
      
    }

    
  }
}


var levelOne = new Game(ctx, levels[0].grid, 'green')

levelOne.start()

