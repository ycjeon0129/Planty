import React from 'react';
import TabBarItem from 'components/atoms/common/TabBarItem/TabBarItem';
import 'components/organisms/common/TabBar/TabBar.scss';

function TabBar() {
	return (
		<div className="tabbar-list">
			<TabBarItem menuKey="home" />
			<TabBarItem menuKey="shop" />
			<TabBarItem menuKey="emergency" />
			<TabBarItem menuKey="mypage" />
		</div>
	);
}

export default TabBar;
