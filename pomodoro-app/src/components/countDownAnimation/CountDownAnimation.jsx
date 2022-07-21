import { useContext } from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import { SettingsContext } from '../context/SettingsContext';
const CountDownAnimation = ({ mykey, timer, animate, children }) => {
	const { stopTimer } = useContext(SettingsContext);

	return (
		<CountdownCircleTimer
			key={mykey}
			isPlaying={animate}
			duration={timer * 60}
			colors={[['#C70039'], ['#FFC300', 0.33]]}
			strokeWidth={6}
			size={220}
			trailColor='#151932'
			onComplete={() => {
				stopTimer();
			}}>
			{children}
		</CountdownCircleTimer>
	);
};

export default CountDownAnimation;
