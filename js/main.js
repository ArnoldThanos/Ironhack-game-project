var canvas = document.querySelector('canvas')

var ctx = canvas.getContext('2d')


/// first level
var firstPlayerImg = new Image();
firstPlayerImg.src="../images/player2.png"

var playerOne = new Player (ctx, 20, 120, 20, firstPlayerImg)
var levelOne = new Game(ctx, playerOne)


function startGame() {
  console.log('game started')
  canvas.style.visibility = 'visible'
  
}

levelOne.start()


window.addEventListener("keydown", function(event) {
  switch(event.keyCode) {
    case 39: // right
      playerOne.move("right")
      break
    case 37: // left
      playerOne.move("left")
      break
    case 32: // up
      playerOne.move("up")
      break
  }
});
window.addEventListener("keyup", function(event) {
  playerOne.move()
});


