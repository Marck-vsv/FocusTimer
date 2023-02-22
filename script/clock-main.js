control.play.addEventListener('click', function () {
  control.play.classList.add('hide');
  control.setTimer.classList.add('hide');

  control.pause.classList.remove('hide');
  control.stop.classList.remove('hide');  

  countdownTimerSeconds();
});

control.pause.addEventListener('click', function () {
  control.pause.classList.add('hide');
  control.play.classList.remove('hide');
  clearTimeout(timerCountdownTimeout);
});

control.stop.addEventListener('click', function () {
  clearTimeout(timerCountdownTimeout);
  resetTimerControls();
  resetTimerDisplay();
});

function resetTimerControls() {
  control.play.classList.remove('hide');
  control.pause.classList.add('hide');
  control.setTimer.classList.remove('hide');
  control.stop.classList.add('hide');
}

control.setTimer.addEventListener('click', function () {
  let minutesSettingMaintain = prompt('Quantos minutos quer adicionar?');
  if (!minutesSettingMaintain) {
    resetTimerDisplay();
    return
  };

  minutesSetting = minutesSettingMaintain;
  updateTimerDisplay(minutesSetting, 0);
});