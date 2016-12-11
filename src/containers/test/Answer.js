import React, { Component } from 'react';

class Answer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			meaning: props.mean,
			chosen: props.chosen
		}
	}
	onAnswerClickHandler() {
		this.props.onChoose(this.state.meaning);
	}
	render() {
		var classes = 'test__answer' + (this.state.chosen ? ' test__answer_chosen' : '');
		return (
			<div className={classes} onClick={this.onAnswerClickHandler.bind(this)}>
				{this.props.text}
			</div>
		);
	}
}

export default Answer;