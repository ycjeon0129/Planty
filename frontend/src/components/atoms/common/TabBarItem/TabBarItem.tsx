// ToolMenuBar.tsx
import React, { useState } from 'react';
import './TabBarItem.scss';
// import { ReactComponent as Home } from '../../../../assets/icons/ToolBar/HomeImg.svg';
import TabBar from 'constants/TabBar/TabBar';

// interface ToolMenuBarProps {
// 	imgSrc: string;
// 	imgName: string;
// }

function TabBarItem({ MenuKey }: { MenuKey: string }) {
	const Menu = TabBar[`${MenuKey}`];
	const MenuImg = Menu.imgSrc;
	// const { imgSrc, imgName } = props;
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
					<img src={MenuImg} alt={Menu.imgName} />
				</div>
				<span>{Menu.imgName}</span>
				{/* <span>{Menu.imgSrc}</span> */}
				{/* <Home fill="blue" /> */}
			</div>
		</div>
	);
}

export default TabBarItem;
