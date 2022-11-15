import React from 'react';
import { useState } from 'react';
function Timer(props) {
	const { hour = 0, min = 0, sec = 0 } = props.state;
	console.log('props', hour);
	const [[hours, mins, secs], setTime] = useState([hour, min, sec]);
	console.log('secst', secs);

	const reset = () =>
		setTime([parseInt(hours), parseInt(mins), parseInt(secs)]);
	const runTimer = () => {
		if (hours == 0 && mins == 0 && secs == 0) {
			reset();
		} else if (mins == 0 && secs == 0) {
			setTime([hours - 1, 59, 59]);
		} else if (secs == 0) {
			setTime([hours, mins - 1, 59]);
		} else {
			setTime([hours, mins, secs - 1]);
		}
	};
	React.useEffect(() => {
		const timerId = setInterval(() => runTimer(), 1000);
		return () => clearInterval(timerId);
	});
	return (
		<div>
			<h1>
				Remaining Time is 0{hours}:0{mins}:0{secs}
			</h1>
			<button onClick={() => runTimer()} className="bg-red-500">
				start{' '}
			</button>
		</div>
	);
}

export default Timer;
