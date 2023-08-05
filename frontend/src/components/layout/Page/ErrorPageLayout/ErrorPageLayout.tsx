import React, { ReactNode } from 'react';
import './ErrorPageLayout.scss';
import PageLayout from '../../common/PageLayout/PageLayout';

function ErrorPageLayout({ children }: { children: ReactNode }) {
	return <PageLayout>{children}</PageLayout>;
}

export default ErrorPageLayout;
