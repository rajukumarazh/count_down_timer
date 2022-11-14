import './App.css';
import { useEffect, useState } from 'react';

function App() {
	const [timer, setTimer] = useState({ hour: '', min: '', sec: 0 });
	const [time, setTime] = useState();
	const [runner, setRunner] = useState({ hour: null, min: null, sec: null });
	// console.log('timer', timer);

	function convert() {
		let hour = Number(timer.hour * 3600 * 1000);
		let min = Number(timer.min * 60 * 1000);
		let sec = Number(timer.sec * 1000);
		console.log('hllll', hour + min + sec);
		let totalTime = hour + min + sec;
		console.log('total', totalTime);
		setTime(totalTime);
		setRunner(timer);
	}
	// console.log('runner', runner);
	useEffect(convert, [timer]);
	console.log('set', time);
	// setTimeout(() => {
	// 	setInterval(() => {
	// 		console.log('timer is on');
	// 		setRunner({ ...runner, sec: runner.sec + 1 });
	// 	}, 2000);
	// }, time);
	function runTimer() {
		console.log('runner called');
		setInterval(() => {
			console.log('timer is on');
			// let h=timer.hour/600

			setRunner(() => ({
				// ...runner,
				// hour: runner.min == 0 ? runner.hour-- : runner.hour == 0 ? 59 : '',
				min:
					runner.sec > 0 ? runner.min-- : runner.min == 0 ? runner.min - 1 : 0,
				sec: runner.sec >= 0 ? runner.sec-- : runner.sec == 0 ? 59 : 0,
			}));

			// if (runner.sec == 10) {
			// 	setRunner({
			// 		...runner,
			// 		sec: runner.sec++,
			// 		hour: Number(timer.hour - 1),
			// 	});
			// }
		}, 1000);
	}
	console.log('runner', runner);
	return (
		<div className="relative">
			<div className="flex justify-center mt-10 ">
				<div className="bg-green-400 flex justify-center border-spacing-2 border-red-700 shadow-lg max-w-lg shadow-slate-500 ">
					<input
						type="text"
						value={runner.hour}
						placeholder="Hour"
						onChange={(e) => setTimer({ ...timer, hour: e.target.value })}
						className="rounded-md p-2 border-collapse border-spacing-1 hower-green-500 mt-5 border-red-600 w-12 mb-5 ml-2 mr-2"
					></input>
					<input
						type="text"
						onChange={(e) => setTimer({ ...timer, min: e.target.value })}
						value={runner.min}
						placeholder="Min"
						className="rounded-md  p-2 border-collapse border-spacing-1 hower-green-500 mt-5 border-red-600 w-12 mb-5 ml-2 mr-2"
					></input>
					<input
						type="text"
						onChange={(e) => setTimer({ ...timer, sec: e.target.value })}
						value={runner.sec}
						//  placeholder={time.sec}
						className="rounded-md  p-2 border-collapse border-spacing-1 hower-green-500 mt-5 border-red-600 w-12 mb-5 ml-2 mr-2"
					></input>
				</div>
			</div>
			<button
				onClick={() => runTimer()}
				className="absolute  bg-red-500 px-2 py-2 top-24 right-1/2 rounded-lg w-16 text-white"
			>
				Start
			</button>
		</div>
	);
}

export default App;
