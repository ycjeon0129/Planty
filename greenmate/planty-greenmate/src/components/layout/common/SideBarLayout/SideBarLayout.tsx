import React, { ReactNode } from 'react';
import './SideBarLayout.scss';

// 임시
function SideBarLayout({ children }: { children: ReactNode }) {
	return <div className="sidebar-layout-container">{children}</div>;
}

export default SideBarLayout;
