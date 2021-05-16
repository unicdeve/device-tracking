import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';
import App from './app/app.comp';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import DataProvider from './utils/contexts/data';
// import reportWebVitals from './reportWebVitals';

ReactDOM.render(
	<React.StrictMode>
		<DataProvider>
			<App />
		</DataProvider>
	</React.StrictMode>,
	document.getElementById('root')
);

serviceWorkerRegistration.unregister();

// reportWebVitals();
