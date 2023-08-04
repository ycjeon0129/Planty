import React, { ReactNode } from 'react';
import './TabBarLayout.scss';
import useTabbarRender from 'hooks/useTabbarRender';

function TabBarLayout({ children }: { children: ReactNode }) {
	if (useTabbarRender()) {
		return <div className="tab-bar-layout-container">{children}</div>;
	}
	return <div />;
}

export default TabBarLayout;
