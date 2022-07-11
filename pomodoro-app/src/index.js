import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import SettingsContextProvider from './components/context/SettingsContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<SettingsContextProvider>
		<App />
	</SettingsContextProvider>
);
