import html from './index.html';

import React from 'react';
import ReactDOM from 'react-dom';

import NewsBlock from './components/NewsBlock.jsx'

import App from './app.jsx'

const title = "Webpack with react and sutch"

ReactDOM.render(
	<App/>,
	document.getElementById('app')
);
