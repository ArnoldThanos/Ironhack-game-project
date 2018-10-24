var canvas = document.querySelector('canvas')
var startScreen = document.querySelector('.startScreen')
var gameOverScreen = document.querySelector('.gameOver')
var betweenLevel = document.querySelector('.betweenLevel')
var betweenImg = document.querySelector('.betweenImg')
gameOverScreen.style.transform = 'translate(1500px, 0px)';
betweenLevel.style.transform = 'translate(1500px, 0px)';



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



var playerDirection = {
  left: false,
  right: false,
  up: false,
}


function keyListener (event) {
  // event.preventDefault()
  var key_state = event.type === "keydown" ? true : false;



  switch(event.keyCode) {
    case 39: // right
      playerDirection.right = key_state
    break
    case 37: // left
      playerDirection.left = key_state
    break
    case 32: // up
      playerDirection.up = key_state
    break
  }
}

window.addEventListener('keydown', keyListener)
window.addEventListener('keyup', keyListener)


// window.addEventListener(“keydown”, keyListener)
// window.addEventListener(“keyup”, keyListener)


document.querySelectorAll('li').forEach((li) => li.addEventListener('click', function(e) {
  // console.log('li!!!')
  e.preventDefault()
  if (e.target.innerHTML === 'Play') {
    startGame()
    togglePlay()
  }
  if (e.target.innerHTML === 'Home Screen') {
    console.log('home')
    gameOverScreen.style.transform = 'translate(1500px, 10000px)';
    startScreen.style.transform = 'translate(0px, 0px)';
    
  }
}))






function startGame(element) {

  console.log('startGame')
  

//   startScreen.style.display = 'none'

  canvas.focus()
  startScreen.style.transform = 'translate(1500px, 0px)';
    levelOne.start()
  

  
}


var marsImages = []

var request = new XMLHttpRequest();

request.open('GET', 'https://mars-photos.herokuapp.com/api/v1/rovers/curiosity/photos?sol=1000&page=2', true);
request.onload = function () {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response);
  console.log(data.photos)
  if (request.status >= 200 && request.status < 400) {
    data.photos.forEach(img => {
      marsImages.push(img)
    })
  } else {
    console.log('error');
  }
}

request.send();

function betweenLevelHandler() {


  const randomIndex = Math.floor(Math.random() * marsImages.length)

  const thisImg = marsImages[randomIndex]


  console.log(thisImg)
  // betweenImg.src = thisImg.img_src

  betweenLevel.style.backgroundImage = `url(${thisImg.img_src})`;
  document.querySelector('#photoId').innerHTML = `Photo ID: ${thisImg.id}`
  







  betweenLevel.appendChild(photoId); 


}
 








