import React from 'react';
import SideBarLayout from 'components/layout/common/SideBarLayout/SideBarLayout';
import useSidebarRender from 'hooks/useSidebarRender';
import { Link } from 'react-router-dom';
import MenuItem from 'components/atoms/sidebar/menuItem/MenuItem';
import setting from 'assets/icons/menu/Setting.svg';
import Ing from 'assets/icons/greenmatesidebar/Ing.svg';
import classImg from 'assets/icons/greenmatesidebar/Class.svg';
import dashboard from 'assets/icons/greenmatesidebar/Dashboard.svg';
import profile from 'assets/icons/greenmatesidebar/Profile.svg';
import counsulting from 'assets/icons/greenmatesidebar/Consulting.svg';
import GreenmateInfo from 'components/atoms/sidebar/greenmateinfo/GreenmateInfo';
import greenmateImg from 'assets/icons/Greenmate.svg';
import CheckOnline from 'components/atoms/sidebar/checkOnline/CheckOnlineItem';
import RequestItem from 'components/atoms/sidebar/requestItem/RequestItem';

function SideBar() {
	// 컨설팅 종류가 채팅이면 /chatting
	// 컨설팅 종류가 화상이면 /video
	const type = 'chat'; // 추후에는 recoil에서 불러오도록

	if (useSidebarRender()) {
		return (
			<SideBarLayout>
				<GreenmateInfo img={greenmateImg} text="영국남자" />
				<hr />
				<Link to={type === 'chat' ? '/consulting/video' : '/consulting/video'}>
					<MenuItem img={Ing} text="현재 진행중인 컨설팅" />
				</Link>
				<Link to="/dashboard">
					<MenuItem img={dashboard} text="대시보드" />
				</Link>
				<Link to="/subscribes/list">
					<MenuItem img={profile} text="프로필 관리" />
				</Link>
				<Link to="/subscribes/calendar">
					<MenuItem img={classImg} text="구독 관리" />
				</Link>
				<Link to="/history/consulting">
					<MenuItem img={counsulting} text="컨설팅 이용내역 조회" />
				</Link>
				<Link to="/settings">
					<MenuItem img={setting} text="설정" />
				</Link>
				<CheckOnline />
				<RequestItem type="채팅" greenmate="영국여자" service="응급실" />
			</SideBarLayout>
		);
	}
	return <div />;
}

export default SideBar;
