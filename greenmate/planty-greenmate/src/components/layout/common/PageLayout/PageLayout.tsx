import React, { ReactNode } from 'react';
import classnames from 'classnames';
import './PageLayout.scss';

// eslint-disable-next-line react/require-default-props
function PageLayout({ children, isFullPage }: { children: ReactNode; isFullPage?: boolean }) {
	const className = classnames('page-layout', { full: isFullPage });
	return <div className={className}>{children}</div>;
}

export default PageLayout;
