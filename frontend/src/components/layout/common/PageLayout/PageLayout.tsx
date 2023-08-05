import React, { ReactNode } from 'react';
import './PageLayout.scss';

function PageLayout({ children }: { children: ReactNode }) {
	return (
		<div className="page-layout">
			<div>{children}</div>
		</div>
	);
}

export default PageLayout;
