import React from 'react';
import '../css/ClearButton.css';

const ClearButton = ({ children, handleClear }) => {
	return (
		<a href="#root" className="clear-btn" onClick={handleClear}>
			{children}
		</a>
	);
};

export default ClearButton;
