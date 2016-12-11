import React, { Component } from 'react';
import Person from './Person.js'

class People extends Component {
	render() {
		return (
			<div className='people'>
				<h1>Люди</h1>
				<Person />
				<Person />
				<Person />
			</div>
		);
	}
}

export default People;