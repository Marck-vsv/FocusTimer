const bgMusic = new Audio("./assets/sounds/GerudoValley.mp3");
const controlClick = new Audio("./assets/sounds/audioControlButton.wav");
const timerEndAlarm = new Audio("./assets/sounds/timerEnd.mp3");

bgMusic.loop = true;

control.soundOn.addEventListener('click', function () {
  controlClick.play();
  bgMusic.pause();
  control.soundOn.classList.add('hide');
  control.soundOff.classList.remove('hide');
});

control.soundOff.addEventListener('click', function () {
  controlClick.play();
  bgMusic.play();
  control.soundOff.classList.add('hide');
  control.soundOn.classList.remove('hide');
});