import React from 'react';
import BackIcon from '../../../../assets/icons/Back.svg';
import './BackButton.scss';

function BackButton({ text }: { text: string }) {
	return (
		<div className="backbtn-container">
			<img src={BackIcon} alt={text} />
			<h1>{text}</h1>
		</div>
	);
}

export default BackButton;
