// ToolMenuBar.tsx
import React, { useState } from 'react';
import './ToolMenuBar.scss';
// import { ReactComponent as Home } from '../../../../assets/icons/ToolBar/HomeImg.svg';

interface ToolMenuBarProps {
	imgSrc: string;
	imgName: string;
}

function ToolMenuBar(props: ToolMenuBarProps) {
	const { imgSrc, imgName } = props;

	const [homeToggle, setHomeToggle] = useState(false);
	const isClicked = () => {
		setHomeToggle(!homeToggle);
	};

	return (
		<div className="menuBox" onClick={isClicked} aria-hidden="true">
			<div>
				<div className="iconBox">
					<img src={imgSrc} alt={imgName} />
				</div>
				<span>{imgName}</span>
			</div>
		</div>
	);
}

export default ToolMenuBar;
