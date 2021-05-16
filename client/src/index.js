import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';
import App from './app/app.comp';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
// import reportWebVitals from './reportWebVitals';

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root')
);

serviceWorkerRegistration.unregister();

// reportWebVitals();
