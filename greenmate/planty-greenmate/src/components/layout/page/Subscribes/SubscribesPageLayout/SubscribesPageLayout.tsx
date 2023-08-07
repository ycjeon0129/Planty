import React, { ReactNode } from 'react';
import PageLayout from 'components/layout/common/PageLayout/PageLayout';

function SubscribesPageLayout({ children }: { children: ReactNode }) {
	return <PageLayout>{children}</PageLayout>;
}

export default SubscribesPageLayout;
