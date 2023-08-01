import React from 'react';
import './HeaderButton.scss';

function HeaderButton({ icon, text }: { icon: string; text: string }) {
	return (
		<div className="header-button">
			<button
				type="button"
				onClick={() => {
					alert('클릭');
				}}
			>
				<img src={icon} alt={text} height={14} width={14} />
			</button>
			<h1>{text}</h1>
		</div>
	);
}

export default HeaderButton;
