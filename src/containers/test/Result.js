import React, { Component } from 'react';

class Result extends Component {
	render() {
		return (
			<div className='test__result'>
				А вы у нас самый настоящий {this.props.title}!
			</div>
		);
	}
}

export default Result;