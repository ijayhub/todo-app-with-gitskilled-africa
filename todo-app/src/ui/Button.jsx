import React from 'react';
import './../../styles/UI/Button.css';

const Button = ({ children, ...props }) => (
	<button className='ui-btn' {...props}>
		{children}
	</button>
);

export default Button;
