import React, { useContext } from 'react';
import { CountDownCircleTimer } from 'react-countdown-circle-timer';
import { SettingContext } from '../context/SettingsContext';
const CountDownAnimation = ({
	key = 1,
	timer = 20,
	animate = false,
	children,
}) => {
	const { stopTimer } = useContext(SettingContext);

	return (
		<CountDownCircleTimer
			key={key}
			isPlaying={animate}
			duration={timer * 60}
			color={[
				['#fe6f6b', 0.33],
				['#fe6f6b', 0.33],
				['#fe6f6b', 0.33],
			]}
			strokeWidth={6}
			size={220}
			trailColor='#151932'
			onComplete={() => {
				stopTimer();
			}}>
			{children}
		</CountDownCircleTimer>
	);
};

export default CountDownAnimation;
