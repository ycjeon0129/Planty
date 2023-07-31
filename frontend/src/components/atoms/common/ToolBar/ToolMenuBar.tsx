import React from 'react';
import './ToolMenuBar.scss';
import homeImg from 'assets/icons/ToolBar/HomeImg.svg';

function ToolMenuBar() {
	return (
		<div className="menuBox">
			<div>
				<div className="iconBox">
					<img src={homeImg} alt="홈" />
				</div>
				<span>홈</span>
			</div>
		</div>
	);
}

export default ToolMenuBar;
