import React from 'react';
import TabBarItem from 'components/atoms/common/TabBarItem/TabBarItem';
import 'components/organisms/common/TabBar/TabBar.scss';
import useTabbarRender from 'hooks/useTabbarRender';

function TabBar() {
	if (useTabbarRender()) {
		return (
			<div className="tabbar-list">
				<TabBarItem MenuKey="home" />
				<TabBarItem MenuKey="shop" />
				<TabBarItem MenuKey="emergency" />
				<TabBarItem MenuKey="mypage" />
			</div>
		);
	}
	return <div />;
}

export default TabBar;
