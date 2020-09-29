import React, { Component } from 'react'
import {
	QueryRenderer,
	graphql,
} from 'react-relay'

import environment from "../Environment.js"

import NewsList from "./NewsList"

const NewsListPageQuery = graphql`
	query NewsListPageQuery {
		articleRecords {
			...NewsList_newslist
		}
	}
`

class NewsListPage extends Component {
	render() {
		return (
			<QueryRenderer
				environment={environment}
				query={NewsListPageQuery}
				render={({error, props}) => {
					if(error) {
						return <div>{error.message}</div>;
					}
					else if(props) {
						return(
							<div>
								<h1>News</h1>
								<NewsList newslist={props.articleRecords} />
							</div>
						);
					}
					return <div>Loading</div>
				}}
			/>
		)
	}
}

export default NewsListPage;
