// ToolMenuBar.tsx
import React, { useState } from 'react';
import './TabBarItem.scss';
import TabBar from 'constants/TabBar/TabBar';
// import { ReactComponent as Home } from '../../../../assets/icons/tabbar/HomeImg.svg';

// import { ReactComponent as HomeLogo } from '../../../../assets/icons/tabbar/HomeImg.svg';
// import { ReactComponent as SubscribeLogo } from '../../../../assets/icons/tabbar/SubscribeImg.svg';
// import { ReactComponent as EmergencyLogo } from '../../../../assets/icons/tabbar/EmergencyImg.svg';
// import { ReactComponent as MypageLogo } from '../../../../assets/icons/tabbar/MypageImg.svg';

function TabBarItem({ MenuKey }: { MenuKey: string }) {
	// const Target = MenuKey;
	const Menu = TabBar[`${MenuKey}`];
	const MenuImg = Menu.imgSrc;
	// const { imgSrc, imgName } = props;
	// 0 이면 홈 1이면 구독샵 2이면 응급실 3이면 마이페이지
	const [homeToggle, setHomeToggle] = useState(false);
	const isClicked = () => {
		setHomeToggle(!homeToggle);
		console.log(homeToggle);
	};

	// if (Target === 'Home') {
	// 	return <HomeLogo />;
	// }
	// if (Target === 'Subscribe') {
	// 	return <SubscribeLogo />;
	// }

	return (
		// <img src={`${MenuImg} `} alt={Menu.imgName} /> else if (
		// 			{Menu.imgName} === 홈 && homeToggle) <Home fill="green" /> }
		<div className="menuBox" onClick={isClicked} aria-hidden="true">
			<div>
				<div className="iconBox">
					{/* <HomeLogo fill="" /> */}
					<img src={`${MenuImg} `} alt={Menu.imgName} />
				</div>
				<span>{Menu.imgName}</span>
			</div>
		</div>
	);
}

export default TabBarItem;
