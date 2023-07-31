import React from 'react';
import ToolMenuBar from 'components/atoms/common/ToolBar/ToolMenuBar';
import 'components/organisms/common/ToolBarOrg/ToolBarOrg.scss';

function ToolBarOrg() {
	return (
		<div>
			<div>ToolBarorganism</div>
			<div className="ToolBarOrgBox">
				<ToolMenuBar />
			</div>
		</div>
	);
}

export default ToolBarOrg;
