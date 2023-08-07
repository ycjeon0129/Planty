import React, { ReactNode } from 'react';
import './SideBarLayout.scss';
// import useTabbarRender from 'hooks/useTabbarRender';

function SideBarLayout({ children }: { children: ReactNode }) {
	// if (useTabbarRender()) {
	return <div className="sidebar-layout-container">{children}</div>;
	// }
	// return <div />;
}

export default SideBarLayout;
