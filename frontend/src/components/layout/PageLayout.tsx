import React, { ReactNode } from 'react';
import '../../styles/layout/PageLayout.scss';

function PageLayout({ children }: { children: ReactNode }) {
	return (
		<div className="container">
			<div>{children}</div>
		</div>
	);
}

export default PageLayout;
