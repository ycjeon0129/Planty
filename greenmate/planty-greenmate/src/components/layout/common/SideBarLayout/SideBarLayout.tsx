import React, { ReactNode } from 'react';
import './SideBarLayout.scss';

// 임시
function SideBarLayout({ children }: { children: ReactNode[] }) {
	return (
		<div className="sidebar-layout-container">
			<div>{children[0]}</div>
			<div>{children[1]}</div>
			<div>{children[2]}</div>
			<div>{children[3]}</div>
			<div>{children[4]}</div>
			<div>{children[5]}</div>
			<div>{children[6]}</div>
			<div>{children[7]}</div>
			<div>{children[8]}</div>
			<div>{children[9]}</div>
			<div>{children[10]}</div>
		</div>
	);
}

export default SideBarLayout;
