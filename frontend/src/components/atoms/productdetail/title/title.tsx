import React from 'react';
import GreenMate from 'assets/icons/Greenmate.svg';
import './title.scss';

function title() {
	return (
		<div>
			<div className="big-box">
				<img src={GreenMate} alt="그린메이트" className="img-box" />
				{/* greenmate데이터에서 이름 가져오기 */}
				<div className="gm-name">Kate</div>
			</div>
			<div className="title-font">누구나 쉽게 키우는 몬스테라 클래스</div>
		</div>
	);
}

export default title;
