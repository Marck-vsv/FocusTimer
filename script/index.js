let control = {
  play: document.querySelector('.playButton'),
  pause: document.querySelector('.pauseButton'),
  stop: document.querySelector('.stopButton'),
  setTimer: document.querySelector('.setTimerButton'),

  soundOn: document.querySelector('.soundOn'),
  soundOff: document.querySelector('.soundOff'),

  timerMinutes: document.querySelector('.timerMinutes'),
  timerSeconds: document.querySelector('.timerSeconds'),
};

let minutesSetting = Number(control.timerMinutes.textContent);
let secondsSetting;
let timerCountdownTimeout;

function updateTimerDisplay(minutes, seconds) {
  control.timerMinutes.textContent = String(minutes).padStart(2, "0");
  control.timerSeconds.textContent = String(seconds).padStart(2, "0");
};

function resetTimerDisplay() {
  updateTimerDisplay(minutesSetting, 0);
};

function countdownTimerSeconds() {
  timerCountdownTimeout = setTimeout(function() {
    let seconds = Number(control.timerSeconds.textContent);
    let minutes = Number(control.timerMinutes.textContent);
    
    updateTimerDisplay(minutes, 0);
    
    if (minutes === 0 && seconds === 0) {
      resetTimerControls()      
      return
    };
    if (seconds <= 0) {
      seconds = 60;
      
      --minutes
    };
    updateTimerDisplay(minutes, String(seconds - 1));

    countdownTimerSeconds();
  }, 1000)
};