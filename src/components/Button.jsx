import React from 'react';
import '../css/Button.css';

const isOperator = value => {
	return !isNaN(value) || value === '.' || value === '=';
};

const Button = ({ children, handleClick }) => (
	<a
		href="#root"
		className={`button-wrapper ${isOperator(children) ? null : 'operator'}`}
		onClick={() => handleClick(children)}
	>
		{children}
	</a>
);

export default Button;
