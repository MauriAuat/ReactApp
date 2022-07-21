import React from 'react';
import Logo from '../header/logo.png';

const Header = () => {
	return (
		<div className='App'>
			<header className='App-header'>
				<img src={Logo} className='App-logo' alt='Logo' />
				<h1 className='App-title'>Welcome to Pomodoro Clock</h1>
			</header>
		</div>
	);
};

export default Header;
