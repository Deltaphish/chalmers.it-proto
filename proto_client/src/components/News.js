import React from 'react';
import {graphql, createFragmentContainer} from 'react-relay';
import environment from './Environment.js';

class News extends React.Component {

	render() {
		return(
			<p> Current news: {this.props.news.title} </p>
		);
	}
}

export default createFragmentContainer(News,{news: graphql`
		fragment News_news on News {
			title
		}
`});		
