import React, { ReactNode } from 'react';
import PageLayout from 'components/layout/common/PageLayout/PageLayout';
import './HistoryPageLayout.scss';

function HistoryPageLayout({ children }: { children: ReactNode[] }) {
	return (
		<PageLayout>
			<div className="history-page-layout-container">
				{children[0]}
				{children[1]}
				{children[2]}
			</div>
		</PageLayout>
	);
}

export default HistoryPageLayout;
