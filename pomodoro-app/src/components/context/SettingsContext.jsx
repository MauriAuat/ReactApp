import React, { createContext, useState } from 'react';

export const SettingsContext = createContext(); //constante que será pasada como parametro a traves de useContext en otros componentes y permitira desestructurar todo lo que sea pasado a traves de value

const SettingsContextProvider = (props) => {
	const [pomodoro, setPomodoro] = useState(1); //variable que ejecuta la app configurado en 0 de forma predeterminada
	const [executing, setExecuting] = useState({}); //objeto que tiene las configuraciones provenientes del componente setPomodoro
	const [startAnimate, setStartAnimate] = useState(false);

	function setCurrentTimer(active_state) {
		//recibe el valor activo de work, short o long; tambien
		updateExecute({
			...executing,
			active: active_state,
		});
		setTimerTime(executing);
	}

	function startTimer() {
		setStartAnimate(true);
	}
	function pauseTimer() {
		setStartAnimate(false);
	}
	function stopTimer() {
		setStartAnimate(false);
	}
	const settingBtn = () => {
		setExecuting({});
		setPomodoro(0);
	};

	const updateExecute = (updatedSettings) => {
		//el parametro pasado viene de setPomodoro cada vez que el valor de los cronometros es seteado
		setExecuting(updatedSettings);
		setTimerTime(updatedSettings);
	};

	const setTimerTime = (evaluate) => {
		switch (evaluate.active) {
			case 'work':
				setPomodoro(evaluate.work);
				break;

			case 'short':
				setPomodoro(evaluate.short);
				break;

			case 'long':
				setPomodoro(evaluate.long);
				break;

			default:
				setPomodoro(0);
				break;
		}
	};

	const children = ({ remainingTime }) => {
		const minutes = Math.floor(remainingTime / 60);
		const seconds = remainingTime % 60;

		return `${minutes}: ${seconds}`;
	};

	return (
		<SettingsContext.Provider
			value={{
				stopTimer,
				pomodoro,
				executing,
				setCurrentTimer,
				settingBtn,
				children,
				startAnimate,
				startTimer,
				pauseTimer,
				updateExecute,
			}}>
			{props.children}
		</SettingsContext.Provider>
	);
};

export default SettingsContextProvider;
