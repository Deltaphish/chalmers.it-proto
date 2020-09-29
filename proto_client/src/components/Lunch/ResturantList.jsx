import React, { Component } from 'react'
import {
	QueryRenderer,
	graphql,
} from 'react-relay'

import environment from "../Environment.js"

import Resturant from "./Resturant"

const ResturantListQuery = graphql`
	query ResturantListQuery {
		lunch {
			...Resturant_resturant
		}
	}
`

class ResturantList extends Component {
	render() {
		return (
			<QueryRenderer
				environment={environment}
				query={ResturantListQuery}
				render={({error, props}) => {
					if(error) {
						return <div>{error.message}</div>;
					}
					else if(props) {
						return(
							<div>
								<h1>Lunch</h1>
								{props.lunch.map((node) =>
									<Resturant key={node.__id} resturant={node} />
								)}								
							</div>
						);
					}
					return <div>Loading</div>
				}}
			/>
		)
	}
}

export default ResturantList;
