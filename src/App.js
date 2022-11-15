import './App.css';
import { useEffect, useState } from 'react';
import Timer from './Timer';
function App() {
	const [timer, setTimer] = useState({ hour: 0, min: 0, sec: 60 });
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

	console.log('runner');
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
				// onClick={() => runTimer()}
				className="absolute  bg-red-500 px-2 py-2 top-24 right-1/2 rounded-lg w-16 text-white"
			>
				Start
			</button>
			<Timer state={timer} />
		</div>
	);
}

export default App;
