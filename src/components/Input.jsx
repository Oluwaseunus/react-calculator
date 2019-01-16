import React from 'react';
import '../css/Input.css';

const Input = ({ input, answer }) => (
	<div className="input">
		<div className="inputValue">{input}</div>
		<div className="answer">{answer}</div>
	</div>
);

export default Input;
