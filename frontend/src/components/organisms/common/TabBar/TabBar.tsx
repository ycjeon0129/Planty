import React from 'react';
import TabBarItem from 'components/atoms/common/TabBarItem/TabBarItem';
import 'components/organisms/common/TabBar/TabBar.scss';

function TabBar() {
	return (
		<div className="tabbar-list">
			<TabBarItem MenuKey="home" />
			<TabBarItem MenuKey="shop" />
			<TabBarItem MenuKey="emergency" />
			<TabBarItem MenuKey="mypage" />
		</div>
	);
}

export default TabBar;
