import React, { ReactNode } from 'react';
import './VideoPageLayout.scss';
import PageLayout from 'components/layout/common/PageLayout/PageLayout';
import ContentsLayout from 'components/layout/common/ContentsLayout/ContentsLayout';

function VideoPageLayout({ children }: { children: ReactNode[] }) {
	return (
		<PageLayout isFullPage>
			<div id="header">{children[0]}</div>
			<div id="video-page-layout-container">
				<div id="user-video">{children[1]}</div>
				<div id="greenmate-video">{children[2]}</div>
				<div id="video-consulting-menu">{children[3]}</div>
			</div>
			<div id="chart">
				<ContentsLayout id="chart">{children[4]}</ContentsLayout>
			</div>
		</PageLayout>
	);
}

export default VideoPageLayout;
