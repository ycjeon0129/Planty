import React from 'react';
import TabBarItem from 'components/atoms/common/TabBarItem/TabBarItem';
import 'components/organisms/common/TabBarList/TabBarList.scss';

function TabBarList() {
	return (
		<div>
			<div className="tabbar-list">
				<TabBarItem MenuKey="home" />
				<TabBarItem MenuKey="shop" />
				<TabBarItem MenuKey="emergency" />
				<TabBarItem MenuKey="mypage" />
			</div>
		</div>
	);
}

export default TabBarList;
