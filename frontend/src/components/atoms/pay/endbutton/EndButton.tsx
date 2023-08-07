import React from 'react';
import './EndButton.scss';

function EndButton() {
	return (
		<div className="btn-outer-container">
			<div className="btn-inner-container">
				<button type="button">
					<span className="text-button">구매하기</span>
				</button>
			</div>
		</div>
	);
}

export default EndButton;
