import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './fonts/NeoSansPro-Bold.woff';
import './fonts/NeoSansPro-Light.woff';
import './fonts/NeoSansPro-Regular.woff';
import './fonts/Segoe UI Bold.woff';
import './fonts/Segoe UI.woff';
ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
