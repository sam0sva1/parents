import React, { Component } from 'react';
import Answer from './Answer.js';

class Question extends Component {
	constructor(props) {
		super(props);
		this.state = {
			question: props.question.question,
			answers: props.question.answers,
			chosenOne: null
		};
		this.key = 0;
		this.onChooseHandler = this.onChooseHandler.bind(this);
	}
	onChooseHandler(mean) {
		this.props.onChoose(mean);
		this.setState({chosenOne: mean});
	}
	render() {
		var answers = this.state.answers;
		var chosenName = this.state.chosenOne;
		var variants = [];
			for(var mean in answers) {
				var variant = <Answer key={++this.key} 
				mean={mean} 
				text={answers[mean]} 
				chosen={(mean === chosenName) ? true : false}
				onChoose={this.onChooseHandler}/>;
				variants.push(variant);
			}

		return (
			<div>
				<span className='test__question'>{this.state.question}</span>
				{variants}
			</div>
		);
	}
}

export default Question;