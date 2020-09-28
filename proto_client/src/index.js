import html from './index.html';

import React from 'react';
import ReactDOM from 'react-dom';

import NewsBlock from './components/NewsBlock.jsx'

const title = "Webpack with react and sutch"

ReactDOM.render(
	<div>{title}
		<NewsBlock/>
	</div>,
	document.getElementById('app')
);
