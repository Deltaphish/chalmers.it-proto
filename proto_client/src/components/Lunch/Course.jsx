import React from 'react';
import {graphql, createFragmentContainer} from 'react-relay';

class Course extends React.Component {

	render() {
		return(
			<div>
				<h5> {this.props.course.name} </h5>
				<p> {this.props.course.dish} </p>
			</div>
		);
	}
}

export default createFragmentContainer(Course,{course: graphql`
		fragment Course_course on Course {
			name
			dish
		}
`});		
