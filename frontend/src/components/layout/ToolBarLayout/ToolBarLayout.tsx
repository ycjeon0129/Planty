import React from 'react';
// import ToolMenuBar from 'components/atoms/common/ToolBar/ToolMenuBar';
import TabBarList from 'components/organisms/common/TabBarList/TabBarList';
import 'components/layout/ToolBarLayout/ToolBarLayout.scss';

function ToolBarLayout() {
	return (
		<div>
			<div className="ToolBarLayout">
				<TabBarList />
			</div>
		</div>
	);
}

export default ToolBarLayout;
