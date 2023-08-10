import React from 'react';
import SideBarLayout from 'components/layout/common/SideBarLayout/SideBarLayout';
import useSidebarRender from 'hooks/useSidebarRender';
import MenuItem from 'components/atoms/sidebar/menuItem/MenuItem';
import setting from 'assets/icons/menu/Setting.svg';
import Ing from 'assets/icons/greenmatesidebar/Ing.svg';
import classImg from 'assets/icons/greenmatesidebar/Class.svg';
import dashboard from 'assets/icons/greenmatesidebar/Dashboard.svg';
import counsulting from 'assets/icons/greenmatesidebar/Consulting.svg';
import GreenmateInfo from 'components/atoms/sidebar/greenmateinfo/GreenmateInfo';
import greenmateImg from 'assets/icons/Greenmate.svg';
import CheckOnline from 'components/atoms/sidebar/checkOnline/CheckOnlineItem';
import RequestItem from 'components/atoms/sidebar/requestItem/RequestItem';
import PlantyLogo from 'assets/icons/logo/PlantyLogo.svg';
import './SideBar.scss';
import useMovePage from 'hooks/useMovePage';

function SideBar() {
	// 컨설팅 종류가 채팅이면 /chatting
	// 컨설팅 종류가 화상이면 /video
	const type = 'chat'; // 추후에는 recoil에서 불러오도록
	const { movePage } = useMovePage();

	if (useSidebarRender()) {
		return (
			<SideBarLayout>
				<div className="sidebar-container">
					<div id="logo">
						<img src={PlantyLogo} alt="planty" onClick={() => movePage('/dashboard')} role="presentation" />
					</div>
					<div id="profile">
						<GreenmateInfo img={greenmateImg} text="영국남자" />
					</div>
					<div id="menu">
						<MenuItem
							img={Ing}
							text="현재 진행중인 컨설팅"
							handleClick={() => movePage(type === 'chat' ? '/consulting/video' : '/consulting/video')}
							isIng
						/>
						<MenuItem img={dashboard} text="대시보드" handleClick={() => movePage('/dashboard')} pathname="dashboard" />
						<MenuItem
							img={classImg}
							text="구독 관리"
							handleClick={() => movePage('/subscribes/list')}
							pathname="subscribes"
						/>
						<MenuItem
							img={counsulting}
							text="컨설팅 내역 조회"
							handleClick={() => movePage('/history/emergency')}
							pathname="history"
						/>
						<MenuItem img={setting} text="설정" handleClick={() => movePage('/settings')} pathname="settings" />
					</div>
					<div id="active-manage">
						<CheckOnline />
						<RequestItem type="채팅" greenmate="영국여자" service="응급실" />
					</div>
				</div>
			</SideBarLayout>
		);
	}
	return <div />;
}

export default SideBar;
