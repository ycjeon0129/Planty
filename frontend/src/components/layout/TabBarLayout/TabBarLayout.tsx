import React from 'react';
import TabBarList from 'components/organisms/common/TabBarList/TabBarList';
import 'components/layout/TabBarLayout/TabBarLayout.scss';

function TabBarLayout() {
	return (
		<div>
			<div className="ToolBarLayout">
				<TabBarList />
			</div>
		</div>
	);
}

export default TabBarLayout;
