// ToolMenuBar.tsx
import React, { useState } from 'react';
import './TabBarItem.scss';
import TabBar from 'constants/tabbar/TabBar'; // types 파일
// import { ReactComponent as Home } from '../../../../assets/icons/tabbar/HomeImg.svg';

// import { ReactComponent as HomeLogo } from '../../../../assets/icons/tabbar/HomeImg.svg';
// import { ReactComponent as SubscribeLogo } from '../../../../assets/icons/tabbar/SubscribeImg.svg';
// import { ReactComponent as EmergencyLogo } from '../../../../assets/icons/tabbar/EmergencyImg.svg';
// import { ReactComponent as MypageLogo } from '../../../../assets/icons/tabbar/MypageImg.svg';

function TabBarItem({ MenuKey }: { MenuKey: string }) {
	const Menu = TabBar[`${MenuKey}`];
	const MenuImg = Menu.imgSrc;
	// const { imgSrc, imgName } = props;
	const [homeToggle, setHomeToggle] = useState(false);
	const isClicked = () => {
		setHomeToggle(!homeToggle);
		console.log(homeToggle);
	};

	return (
		// <img src={`${MenuImg} `} alt={Menu.imgName} /> else if (
		// 			{Menu.imgName} === 홈 && homeToggle) <Home fill="green" /> }
		<button type="button" className="menuBox" onClick={isClicked}>
			<div>
				<div className="iconBox">
					{/* <HomeLogo fill="" /> */}
					<img src={` ${MenuImg} `} alt={Menu.imgName} />
				</div>
				<span>{Menu.imgName}</span>
			</div>
		</button>
	);
}

export default TabBarItem;
