import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {
	store,
} from "./redux/storeConfig/store";
import './index.css';
import App from './app';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
	<Provider store={store}>
		<App/>
	</Provider>,
	document.getElementById('root')
);
serviceWorker.unregister();
