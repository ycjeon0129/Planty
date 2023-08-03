import React from 'react';
import TabBarItem from 'components/atoms/common/TabBarItem/TabBarItem';
import 'components/organisms/common/TabBarList/TabBarList.scss';
import useTabbarRender from 'hooks/useTabbarRender';
import { Link } from 'react-router-dom';

function TabBarList() {
	if (useTabbarRender()) {
		return (
			<div className="tabbar-list">
				<TabBarItem MenuKey="home" />
				<TabBarItem MenuKey="shop" />
				<TabBarItem MenuKey="emergency" />
				<TabBarItem MenuKey="mypage" />
				<Link to="/error">error</Link>
			</div>
		);
	}
	return <div />;
}

export default TabBarList;
