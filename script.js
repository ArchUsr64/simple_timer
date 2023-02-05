const MAIN_VIEW = document.getElementById('main_view');
const TIMER_SOUND = document.getElementById('timer_sound');
const DEFAULT_DURATION_IN_MINUTES = 5;

const States = {
	Alerted: 0,
	Ready: 1,
	Running: 2,
}

let timer = 0;
let duration = DEFAULT_DURATION_IN_MINUTES
let program_state = States.Alerted

main_view.addEventListener('click', function() {
	switch (program_state) {
		case States.Running:
			program_state = States.Alerted
		case States.Alerted:
			duration =
				parseFloat(prompt('Enter the timer duration in minutes:', duration))
			program_state = States.Ready
			break;
		case States.Ready:
			program_state = States.Running
			break;
	}
});

function lerp(val, in_min, in_max, out_min, out_max) {
	val -= in_min;
	val /= (in_max - in_min);
	val *= (out_max - out_min);
	val += out_min;
	return val
}

function update_frame_state() {
	//Set window height
	let height = lerp(timer, 0, duration * 60 * 1000, 100, 0)
	main_view.style.height = height + 'vh';

	//Mutate timer if program is running
	if (program_state == States.Running) {
		//Check if timer has expired
		if (timer > duration * 60 * 1000) {
			timer_sound.play();
			program_state = States.Alerted
		} else {
			timer += 10
		}
	} else {
		timer = 0;
	}

	//Set window background color
	let background_color
	switch (program_state) {
		case States.Running:
			background_color = "blue"
			break;
		case States.Ready:
			background_color = "green"
			break;
		case States.Alerted:
			background_color = "red"
			break;
	}
	main_view.style.backgroundColor = background_color;
}

setInterval(update_frame_state, 10);
