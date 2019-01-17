const bgMusic = document.querySelector('#bgMusic')
const goalSound = document.querySelector('#goalSound')
const blastSound = document.querySelector('#blastSound')
var isPlaying = false;
function togglePlay() {
  if (isPlaying) {
    bgMusic.pause()
  } else {
    bgMusic.play();
  }
};
bgMusic.onplaying = function() {
  isPlaying = true;
};
bgMusic.onpause = function() {
  isPlaying = false;
};
bgMusic.addEventListener('ended', function() {
  this.currentTime = 0;
  this.play();
}, false);