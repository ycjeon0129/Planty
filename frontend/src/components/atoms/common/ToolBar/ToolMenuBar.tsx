// ToolMenuBar.tsx
import React, { useState } from 'react';
import './ToolMenuBar.scss';
import { ReactComponent as Home } from '../../../../assets/icons/ToolBar/HomeImg.svg';

interface ToolMenuBarProps {
	imgSrc: string;
	imgName: string;
}

function ToolMenuBar(props: ToolMenuBarProps) {
	const { imgSrc, imgName } = props;
	// 0 이면 홈 1이면 구독샵 2이면 응급실 3이면 마이페이지
	const [homeToggle, setHomeToggle] = useState(false);
	const isClicked = () => {
		setHomeToggle(!homeToggle);
		console.log(homeToggle);
	};

	return (
		<div className="menuBox" onClick={isClicked} aria-hidden="true">
			<div>
				<div className="iconBox">
					<img src={imgSrc} alt={imgName} />
				</div>
				<span>{imgName}</span>
				<Home fill="blue" />
			</div>
		</div>
	);
}

export default ToolMenuBar;
