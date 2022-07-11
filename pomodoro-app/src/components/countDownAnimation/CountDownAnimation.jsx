import React from 'react';
import { CountDownCircleTimer } from 'react-countdown-circle-timer';
const CountDownAnimation = ({
	key = 1,
	timer = 20,
	animate = false,
	children,
}) => {
	return (
		<CountDownCircleTimer
			key={key}
			isPlaying={animate}
			duration={timer * 60}
			color={['#fe6f6b', 0.33]}
			strokeWidth={6}
			trailColor='#151932'
			onComplete={() => {
				//stopAnimate();
			}}>
			{children}
		</CountDownCircleTimer>
	);
};

export default CountDownAnimation;
