import React, {Component} from 'react'
import {
	createFragmentContainer,
	graphql
} from 'react-relay'

import Course from './Course'

class Resturant extends Component {

	render() {
		return(
			<div>
				<h2>{this.props.resturant.name}</h2>
				{this.props.resturant.courses.map((node) =>
					<Course key={node.__id} course={node} />
				)}
			</div>
		);
	}

}

export default createFragmentContainer(Resturant,{resturant:  graphql`
	fragment Resturant_resturant on Resturant {
		name
		courses {
			...Course_course
		}
	}
`})

