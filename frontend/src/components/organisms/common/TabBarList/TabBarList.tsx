import React, { useEffect } from 'react';
import TabBarItem from 'components/atoms/common/TabBarItem/TabBarItem';
import 'components/organisms/common/TabBarList/TabBarList.scss';
import TabMenu from 'constants/tabbar/TabBar';

function TabBarList() {
	useEffect(() => {
		console.log(TabMenu);
	}, []);

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
