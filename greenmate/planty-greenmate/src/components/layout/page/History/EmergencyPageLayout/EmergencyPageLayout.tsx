import React, { ReactNode } from 'react';
import './EmergencyPageLayout.scss';
import ContentsLayout from 'components/layout/common/ContentsLayout/ContentsLayout';

function EmergencyPageLayout({ children }: { children: ReactNode[] }) {
	return (
		<ContentsLayout id="emergency-list-contents-layout">
			<div className="emergency-page-layout-container">
				<div id="emergency-list">{children[0]}</div>
				<div id="emergency-list">{children[1]}</div>
			</div>
		</ContentsLayout>
	);
}

export default EmergencyPageLayout;
