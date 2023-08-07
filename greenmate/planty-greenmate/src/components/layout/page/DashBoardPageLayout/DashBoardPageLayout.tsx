import React, { ReactNode } from 'react';
import './DashBoardPageLayout.scss';
import PageLayout from 'components/layout/common/PageLayout/PageLayout';
import ContentsLayout from 'components/layout/common/ContentsLayout/ContentsLayout';

function DashBoardPageLayout({ children }: { children: ReactNode[] }) {
	return (
		<PageLayout>
			<div className="dashboard-page-layout-container">
				<div id="left">
					<ContentsLayout id="now-consulting-area">{children[0]}</ContentsLayout>
					<ContentsLayout id="my-subscribe-area">{children[1]}</ContentsLayout>
				</div>
				<div id="right">
					<ContentsLayout id="soon-booking-area">{children[2]}</ContentsLayout>
				</div>
			</div>
		</PageLayout>
	);
}

export default DashBoardPageLayout;
