import React, { ReactNode } from 'react';
import './TabBarLayout.scss';

function TabBarLayout({ children }: { children: ReactNode }) {
	return <div className="tab-bar-layout-container">{children}</div>;
}

export default TabBarLayout;
