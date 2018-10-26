
var canvas = document.querySelector('canvas')
var startScreen = document.querySelector('.startScreen')
var aboutPage = document.querySelector('.aboutPage')
var highScorePage = document.querySelector('.highScorePage')
var gameOverScreen = document.querySelector('.gameOver')
var betweenLevel = document.querySelector('.betweenLevel')
var highScorePage = document.querySelector('.highScorePage')

gameOverScreen.style.transform = 'translate(1500px, 0px)';
betweenLevel.style.transform = 'translate(1500px, 0px)';
aboutPage.style.transform = 'translate(1500px, 0px)';
highScorePage.style.transform = 'translate(1500px, 0px)';

var ctx = canvas.getContext('2d')

/// first level
var player = new Image();
player.src = "./images/player2.png";

var playerOne = new Player(ctx, 20, 120, 20, player)
var levelOne = new Game(ctx, playerOne)

function startGame() {
  canvas.style.visibility = 'visible'
}

var playerDirection = {
  left: false,
  right: false,
  up: false,
}

function keyListener(event) {
  // event.preventDefault()
  var key_state = event.type === "keydown" ? true : false;
  switch (event.keyCode) {
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

document.querySelectorAll('li').forEach((li) => li.addEventListener('click', function (e) {

  e.preventDefault()
  if (e.target.innerHTML === 'Play') {
    startGame()
    togglePlay()
  }
  if (e.target.innerHTML === 'Home Screen') {
    console.log('home')
    translateAwayAllPages()
    startScreen.style.transform = 'translate(0px, 0px)';
  }

  if (e.target.innerHTML === 'About') {
    translateAwayAllPages()
    aboutPage.style.transform = 'translate(0px, 0px)';
  }

  if (e.target.innerHTML === 'High Score') {
    translateAwayAllPages()
    highScorePage.style.transform = 'translate(0px, 0px)';
  }
}))

function startGame(element) {
  canvas.focus()
  translateAwayAllPages()
  levelOne.start()
}

var marsImages = []
var request = new XMLHttpRequest();

request.open('GET', 'https://mars-photos.herokuapp.com/api/v1/rovers/curiosity/photos?sol=1000&page=2', true);
request.onload = function () {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response);
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
  console.log('hey')
  const randomIndex = Math.floor(Math.random() * marsImages.length)
  const thisImg = marsImages[randomIndex]
  betweenLevel.style.backgroundImage = `url(${thisImg.img_src})`;
  document.querySelector('#photoId').innerHTML = `Photo ID: ${thisImg.id}`
  betweenLevel.appendChild(photoId);
}

function translateAwayAllPages() {
  gameOverScreen.style.transform = 'translate(1500px, 10000px)';
  startScreen.style.transform = 'translate(1500px, 0px)';
  gameOverScreen.style.transform = 'translate(1500px, 0px)';
  betweenLevel.style.transform = 'translate(1500px, 0px)';
  aboutPage.style.transform = 'translate(1500px, 0px)';
  highScorePage.style.transform = 'translate(1500px, 0px)';
}