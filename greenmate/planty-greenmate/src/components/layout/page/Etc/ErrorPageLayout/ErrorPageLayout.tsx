import React, { ReactNode } from 'react';
import './ErrorPageLayout.scss';

function ErrorPageLayout({ children }: { children: ReactNode[] }) {
	return (
		<div className="error-page-layout-container">
			{children[0]}
			{children[1]}
			{children[2]}
		</div>
	);
}

export default ErrorPageLayout;
