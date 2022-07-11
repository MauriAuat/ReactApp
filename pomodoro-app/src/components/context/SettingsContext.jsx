import React, { createContext, useState } from 'react';

export const SettingContext = createContext(); //constante que será pasada como parametro a traves de useContext en otros componentes y permitira desestructurar todo lo que sea pasado a traves de value

const SettingsContextProvider = (props) => {
	const [pomodoro, setPomodoro] = useState(0); //variable que ejecuta la app configurado en 0 de forma predeterminada
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

	const children = ({ remainingTimer }) => {
		const minutes = Math.floor(remainingTimer / 60);
		const seconds = remainingTimer % 60;

		return `${minutes}m: ${seconds}s`;
	};

	return (
		<SettingContext.Provider
			value={{
				stopTimer,
				updateExecute,
				pomodoro,
				executing,
				startAnimate,
				startTimer,
				pauseTimer,
				settingBtn,
				setCurrentTimer,
				updateExecute,
				children,
			}}>
			{props.children}
		</SettingContext.Provider>
	);
};

export default SettingsContextProvider;
