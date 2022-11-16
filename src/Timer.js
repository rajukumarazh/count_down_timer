import React from 'react';
import { useState } from 'react';
function Timer({ hoursMinSecs }) {
	const [start, setStart] = useState(false);
	const [data, setData] = useState({ h: '', m: '', s: 25 });
	const { hours = 0, minutes = 0, seconds = data.s } = hoursMinSecs;
	// console.log('kkkkk', hoursMinSecs);
	// const [start, setStart] = useState(false);
	const [[hrs, mins, secs], setTime] = React.useState([
		hours,
		minutes,
		seconds,
	]);

	const tick = () => {
		if (hrs === 0 && mins === 0 && secs === 0) reset();
		else if (mins === 0 && secs === 0) {
			setTime([hrs - 1, 59, 59]);
		} else if (secs === 0) {
			setTime([hrs, mins - 1, 59]);
		} else {
			setTime([hrs, mins, secs - 1]);
		}
	};

	const reset = () =>
		setTime([parseInt(hours), parseInt(minutes), parseInt(seconds)]);

	React.useEffect(() => {
		if (start == true) {
			const timerId = setInterval(() => tick(), 1000);
			return () => clearInterval(timerId);
		}
	});
	console.log('tick', secs, mins);
	return (
		<div>
			<h1>
				Remaining Time is 0{hours}:0{mins}:0{secs}
			</h1>
			<button
				onClick={() => {
					setStart(() => true);
					console.log('cliekc');
				}}
				className="bg-red-500"
			>
				start{' '}
			</button>
		</div>
	);
}

export default Timer;
