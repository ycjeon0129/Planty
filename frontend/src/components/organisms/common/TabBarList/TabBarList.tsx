import React from 'react';
import TabBarItem from 'components/atoms/common/TabBarItem/TabBarItem';
import 'components/organisms/common/TabBarList/TabBarList.scss';
// import HomeImg from '../../../../assets/icons/ToolBar/HomeImg.svg';

function TabBarList() {
	// const ImgLst = [
	// 	'assets/icons/ToolBar/HomeImg.svg',
	// 	'assets/icons/ToolBar/SubscribeImg.svg',
	// 	'assets/icons/ToolBar/EmergencyImg.svg',
	// 	'assets/icons/ToolBar/MypageImg.svg',
	// ]

	// const handleMenuBar: string[] = [0, 1, 2, 3];
	// const ImgName: string = ['홈', '구독샵', '응급실', '마이페이지'];
	return (
		<div>
			<div>TabBarList</div>
			<div className="ToolBarOrgBox">
				{/* <img src={HomeImg} alt="왜안나와" /> */}
				<TabBarItem MenuKey="Home" />
				<TabBarItem MenuKey="Subscribe" />
				<TabBarItem MenuKey="Emergency" />
				<TabBarItem MenuKey="Mypage" />
			</div>
		</div>
	);
}

export default TabBarList;
