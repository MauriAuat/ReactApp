import { useContext } from 'react';
import SetPomodoro from './components/set/SetPomodoro';
import { SettingsContext } from './components/context/SettingsContext';
import Button from './components/button/Button';
import CountDownAnimation from './components/countDownAnimation/CountDownAnimation';

const App = () => {
	const {
		pomodoro,
		executing,
		startAnimate,
		children,
		startTimer,
		pauseTimer,
		updateExecute,
		setCurrentTimer,
		settingBtn,
	} = useContext(SettingsContext);

	console.log('Hola' + pomodoro);
	return (
		<div className='container'>
			<h1>Pomodoro</h1>
			{0 !== pomodoro ? (
				<>
					<ul className='labels'>
						<li>
							<Button
								title='Work'
								activeClass={
									executing.active === 'work' ? 'active-label' : undefined
								}
								_callback={() => setCurrentTimer('work')}
							/>
						</li>
						<li>
							<Button
								title='Short Break'
								activeClass={
									executing.active === 'short' ? 'active-label' : undefined
								}
								_callback={() => setCurrentTimer('short')}
							/>
						</li>
						<li>
							<Button
								title='Long Break'
								activeClass={
									executing.active === 'long' ? 'active-label' : undefined
								}
								_callback={() => setCurrentTimer('long')}
							/>
						</li>
					</ul>
					<Button title='Settings' _callback={settingBtn} />
					<div className='time-container'>
						<div className='time-wrapper'>
							<CountDownAnimation
								mykey={pomodoro}
								timer={pomodoro}
								animate={startAnimate}>
								{children}
							</CountDownAnimation>
						</div>
					</div>
					<div className='button-swrapper'>
						<Button
							title='Start'
							className={!startAnimate ? 'active' : undefined}
							_callback={startTimer}
						/>
						<Button
							title='Pause'
							className={startAnimate ? 'active' : undefined}
							_callback={pauseTimer}
						/>
					</div>
				</>
			) : (
				<>
					<SetPomodoro />
				</>
			)}
		</div>
	);
};

export default App;
