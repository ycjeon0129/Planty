import React from 'react';
import './Title.scss';

function Title({ title }: { title: string }) {
	return (
		<div className="title-box">
			<div className="title-text">{title}</div>
		</div>
	);
}

export default Title;
