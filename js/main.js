var canvas = document.querySelector('canvas')

var ctx = canvas.getContext('2d')

// ctx.fillRect(40, 40, 40, 40)

console.log('Height: ' + canvas.height)
console.log('Width: ' + canvas.width)



/// first level
var firstPlayerImg = new Image();
firstPlayerImg.src="../images/flares/extend.png"
var playerOne = new Player (ctx, 100, 120, 20, firstPlayerImg)
var levelOne = new Game(ctx, levels[0].grid, '#8e44ad', playerOne)



levelOne.start()




// function movePLayerHandler(player) {

//   document.


// }

window.addEventListener("keydown", function(event) {
  switch(event.keyCode) {
    case 39: // right
      playerOne.move("right")
      break
    case 37: // left
      playerOne.move("left")
      break
    case 38: // up
      playerOne.move("up")
      break
  }
});
window.addEventListener("keyup", function(event) {
  playerOne.move()
});



function keyListener(e) {


  playerOne.update(true, e.keyCode )
  pl

}