import React, { ReactNode } from 'react';
import PageLayout from 'components/layout/common/PageLayout/PageLayout';

function HistoryPageLayout({ children }: { children: ReactNode[] }) {
	return (
		<PageLayout>
			{children[0]}
			{children[1]}
			{children[2]}
		</PageLayout>
	);
}

export default HistoryPageLayout;
