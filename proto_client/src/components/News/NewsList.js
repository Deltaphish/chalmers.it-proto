import React, {Component} from 'react'
import {
	createFragmentContainer,
	graphql
} from 'react-relay'

import News from './News'

class NewsList extends Component {

	render() {
		return(
			<div>
				{this.props.newslist.articles.map((node) =>
					<News key={node.__id} news={node} />
				)}
			</div>
		);
	}

}

export default createFragmentContainer(NewsList,{newslist:  graphql`
	fragment NewsList_newslist on ArticleRecords {
		articles {
			...News_news
		}
	}
`})

