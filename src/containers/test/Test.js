import React, { Component } from 'react';
import Question from './Question.js';
import Result from './Result.js';
import questions from './questions.js';
import './Test.css';

class Test extends Component {
	constructor(props) {
		super(props);
		this.state = {
			questions: questions,
			count: 0,
			notChosen: true,
			resultAnswers: []
		};
		this.onChooseHandler = this.onChooseHandler.bind(this);
	}

	onNextBtnHandler() {
		this.setState({count: ++this.state.count, notChosen: true});
	}

	onChooseHandler(value) {
		var chosenAnsewers = this.state.resultAnswers;
		chosenAnsewers[this.state.count] = value;
		this.setState({
			notChosen: false,
			resultAnswers: chosenAnsewers
		});
	}

	findResolt() {
		var modern = 0, future = 0, omniscient = 0;
		this.state.resultAnswers.forEach(function(val) {
			switch(val) {
				case 'modern':
					++modern;
					break;
				case 'future':
					++future;
					break;
				case 'omniscient':
					++omniscient;
					break;
			}
		});
		var max = 'Марти МакФлай';
		if(modern > future && modern !== future){
			max = 'современный родитель';
		}
		if(future > omniscient && future !== omniscient){
			max = 'родитель из будущего';
		}
		if(omniscient > modern && omniscient !== modern){
			max = 'всезнающий родитель';
		}
		return max;
	}

	render() {
		var count = this.state.count;
		var questions = this.state.questions;
		var notChosen = this.state.notChosen;
		var content, hide;
		var style = {cursor: (notChosen)? 'auto' : 'pointer'};
		if (count < questions.length) {
			content = <Question key={count+1} question={questions[count]} onChoose={this.onChooseHandler.bind(this)} />;
			hide = false;

		} else {
			content = <Result title={this.findResolt()}/>;
			hide = true;
		}
		return (
			<div className='test'>
				<h1>Тест</h1>
				{content}
				<button
				className='test__next-btn'
				onClick={this.onNextBtnHandler.bind(this)}
				disabled={notChosen}
				style={style}
				hidden={hide}
				>Далее</button>
			</div>
		);
	}
}

export default Test;