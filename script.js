const main_view = document.getElementById('main_view');
const timer_sound = document.getElementById('timer_sound');
const SECONDS_IN_MINUTE = 60;
let duration = parseFloat(prompt('Enter the timer duration in minutes:', '5'));
const TIMER_DURATION = duration * SECONDS_IN_MINUTE;
let height = 100;
let alerted = false;
main_view.addEventListener('click', function() {
  main_view.style.backgroundColor = 'blue';
  setInterval(() => {
    if (height > 0) {
      height -= 0.1;
      main_view.style.height = height + 'vh';
    } else if (!alerted) {
      main_view.style.backgroundColor = 'red';
      main_view.style.height = '100vh';
      timer_sound.play();
      setTimeout(() => {
	timer_sound.pause();
	timer_sound.currentTime = 0;
	alerted = true;
      }, 5000);
    }
  }, TIMER_DURATION);
});
main_view.style.backgroundColor = 'green';
