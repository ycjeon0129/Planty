import React from 'react';
import GreenMate from 'assets/icons/Greenmate.svg';
import './title.scss';

function title({ name, greenmate }: { name: string; greenmate: string }) {
	return (
		<div>
			<div className="big-box">
				<img src={GreenMate} alt="그린메이트" className="img-box" />
				{/* greenmate데이터에서 이름 가져오기 */}
				<div className="gm-name">{greenmate}</div>
			</div>
			<div className="title-font">{name}</div>
		</div>
	);
}

export default title;
