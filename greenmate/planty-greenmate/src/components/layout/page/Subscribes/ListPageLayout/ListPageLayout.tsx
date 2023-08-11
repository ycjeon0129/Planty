import React, { ReactNode } from 'react';
import './ListPageLayout.scss';
import ContentsLayout from 'components/layout/common/ContentsLayout/ContentsLayout';

function ListPageLayout({ children }: { children: ReactNode[] }) {
	return (
		<ContentsLayout id="subscribe-list-contents-layout">
			<div className="list-page-layout-container">
				<div id="subscribe-list">{children[0]}</div>
				<div id="subscribe-detail">{children[1]}</div>
			</div>
		</ContentsLayout>
	);
}

export default ListPageLayout;
