control.soundOn.addEventListener('click', function () {
  control.soundOn.classList.add('hide');
  control.soundOff.classList.remove('hide');
});

control.soundOff.addEventListener('click', function () {
  control.soundOff.classList.add('hide');
  control.soundOn.classList.remove('hide');
});