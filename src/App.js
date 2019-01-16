import React from 'react';
import Button from './components/Button';
import Input from './components/Input';
import ClearButton from './components/ClearButton';
import './App.css';

class App extends React.Component {
	state = {
		input: '',
		answer: 0,
	};

	handleClear = () => {
		this.setState({ input: '', answer: 0 });
	};

	handleEquals = () => {
		this.setState({ input: this.state.answer, answer: 0 });
	};

	isOperator = value => {
		return value === '+' || value === '*' || value === '/' || value === '-';
	};

	checkOperator = string => {
		return [...string]
			.map(val => this.isOperator(val))
			.reduce((acc, cur) => acc || cur);
	};

	addToInput = value => {
		let input = (' ' + this.state.input).slice(1);
		if (this.isOperator(input.substr(-1)) && this.isOperator(value)) {
			this.setState({ input: input.slice(0, input.length - 1) + value });
		} else {
			input += value;
			const evaluation =
				this.checkOperator(input) && !isNaN(input.substr(-1))
					? eval(input)
					: '--';
			this.setState({
				input: this.state.input + value,
				answer: evaluation,
			});
		}
	};

	render() {
		return (
			<div className="App">
				<div className="calc-wrapper">
					<Input input={this.state.input} answer={this.state.answer} />

					<div className="row">
						<Button handleClick={this.addToInput}>7</Button>
						<Button handleClick={this.addToInput}>8</Button>
						<Button handleClick={this.addToInput}>9</Button>
						<Button handleClick={this.addToInput}>/</Button>
					</div>

					<div className="row">
						<Button handleClick={this.addToInput}>4</Button>
						<Button handleClick={this.addToInput}>5</Button>
						<Button handleClick={this.addToInput}>6</Button>
						<Button handleClick={this.addToInput}>*</Button>
					</div>

					<div className="row">
						<Button handleClick={this.addToInput}>1</Button>
						<Button handleClick={this.addToInput}>2</Button>
						<Button handleClick={this.addToInput}>3</Button>
						<Button handleClick={this.addToInput}>+</Button>
					</div>

					<div className="row">
						<Button handleClick={this.addToInput}>.</Button>
						<Button handleClick={this.addToInput}>0</Button>
						<Button handleClick={this.handleEquals}>=</Button>
						<Button handleClick={this.addToInput}>-</Button>
					</div>

					<div className="row">
						<ClearButton handleClear={this.handleClear}>Clear</ClearButton>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
