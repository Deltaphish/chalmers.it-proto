import React from 'react';
import {graphql, createFragmentContainer} from 'react-relay';

class News extends React.Component {

	render() {
		return(
			<div>
				<h3>{this.props.news.title} </h3>
				<p>{this.props.news.details}</p>
			</div>
		);
	}
}

export default createFragmentContainer(News,{news: graphql`
		fragment News_news on Article {
			title
			details
		}
`});		
