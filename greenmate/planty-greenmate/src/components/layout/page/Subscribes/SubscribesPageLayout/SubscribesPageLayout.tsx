import React, { ReactNode } from 'react';
import PageLayout from 'components/layout/common/PageLayout/PageLayout';

function SubscribesPageLayout({ children }: { children: ReactNode[] }) {
	return (
		<PageLayout>
			{children[0]}
			<div>{children[1]}</div>
		</PageLayout>
	);
}

export default SubscribesPageLayout;
