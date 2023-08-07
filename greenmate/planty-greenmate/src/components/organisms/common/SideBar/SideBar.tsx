import React from 'react';
import SideBarLayout from 'components/layout/common/SideBarLayout/SideBarLayout';
import useSidebarRender from 'hooks/useSidebarRender';

function SideBar() {
	if (useSidebarRender()) {
		return <SideBarLayout>사이드바</SideBarLayout>;
	}
	return <div />;
}

export default SideBar;
