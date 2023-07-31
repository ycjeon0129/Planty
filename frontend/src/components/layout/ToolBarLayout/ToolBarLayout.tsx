import React from 'react';
// import ToolMenuBar from 'components/atoms/common/ToolBar/ToolMenuBar';
import ToolBarOrg from 'components/organisms/common/ToolBarOrg/ToolBarOrg';
import 'components/layout/ToolBarLayout/ToolBarLayout.scss';

function ToolBarLayout() {
	return (
		<div>
			<div className="ToolBarLayout">
				<ToolBarOrg />
			</div>
		</div>
	);
}

export default ToolBarLayout;
