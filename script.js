const main_view = document.getElementById('main_view');
const SECONDS_IN_MINUTE = 60;
let duration =
    parseFloat(prompt('Enter the timer duration in minutes:', '5'));
const TIMER_DURATION = duration * SECONDS_IN_MINUTE;
let height = 100;
console.log(TIMER_DURATION);
setInterval(() => {
  if (height > 0) {
    height -= 0.1;
    main_view.style.height = height + 'vh';
  } else {
    main_view.style.backgroundColor = 'red';
    main_view.style.height = '100vh';
  }
}, TIMER_DURATION);
