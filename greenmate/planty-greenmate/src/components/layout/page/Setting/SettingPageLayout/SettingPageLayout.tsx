import React, { ReactNode } from 'react';
import './SettingPageLayout.scss';
import PageLayout from 'components/layout/common/PageLayout/PageLayout';
import ContentsLayout from 'components/layout/common/ContentsLayout/ContentsLayout';

function SettingPageLayout({ children }: { children: ReactNode[] }) {
	return (
		<PageLayout>
			{children[0]}
			<div className="setting-page-layout-container">
				<div id="center">
					<ContentsLayout id="now-consulting-area settins-content">{children[1]}</ContentsLayout>
					<ContentsLayout id="my-subscribe-area">{children[2]}</ContentsLayout>
				</div>
			</div>
		</PageLayout>
	);
}

export default SettingPageLayout;
