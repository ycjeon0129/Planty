import React from 'react';
import SideBarLayout from 'components/layout/common/SideBarLayout/SideBarLayout';
import useSidebarRender from 'hooks/useSidebarRender';
import { Link } from 'react-router-dom';

function SideBar() {
	// 컨설팅 종류가 채팅이면 /chatting
	// 컨설팅 종류가 화상이면 /video
	const type = 'chat'; // 추후에는 recoil에서 불러오도록

	if (useSidebarRender()) {
		return (
			<SideBarLayout>
				<Link to={type === 'chat' ? '/consulting/video' : '/consulting/video'}>현재 진행중인 컨설팅</Link>
				<Link to="/dashboard">대시보드</Link>
				<Link to="/subscribes/list">구독 관리(목록)</Link>
				<Link to="/subscribes/calendar">구독 관리(캘린더)</Link>
				<Link to="/history/emergency">이용 내역(응급실)</Link>
				<Link to="/history/consulting">이용 내역(컨설팅)</Link>
				<Link to="/settings">설정</Link>
			</SideBarLayout>
		);
	}
	return <div />;
}

export default SideBar;
