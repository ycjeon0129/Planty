import React from 'react';
import TabBarItem from 'components/atoms/common/TabBarItem/TabBarItem';
import 'components/organisms/common/TabBarList/TabBarList.scss';
// import HomeImg from '../../../../assets/icons/ToolBar/HomeImg.svg';

function TabBarList() {
	return (
		<div>
			<div>TabBarList</div>
			<div className="ToolBarOrgBox">
				<TabBarItem MenuKey="Home" />
				<TabBarItem MenuKey="Subscribe" />
				<TabBarItem MenuKey="Emergency" />
				<TabBarItem MenuKey="Mypage" />
			</div>
		</div>
	);
}

export default TabBarList;
