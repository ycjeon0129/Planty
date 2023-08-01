import React from 'react';
import './IconButton.scss';
import ICON_LIST from 'constants/menu/MypageMenuState';

function IconButton({ text }: { text: string }) {
	return (
		<div className="icon-button">
			<button
				type="button"
				onClick={() => {
					alert('클릭');
				}}
			>
				<img src={ICON_LIST[text]} alt={text} height={14} width={14} />
			</button>
			<p className="text">{text}</p>
		</div>
	);
}

export default IconButton;
