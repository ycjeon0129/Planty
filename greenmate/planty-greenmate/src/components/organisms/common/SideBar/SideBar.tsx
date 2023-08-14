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
import PlantyLogo from 'assets/icons/logo/PlantyLogo.svg';
import useMovePage from 'hooks/useMovePage';
import { useRecoilState } from 'recoil';
import './SideBar.scss';
import { authState } from 'recoil/store';
import RequestArea from '../RequestArea/RequestArea';

function SideBar() {
	const [auth] = useRecoilState(authState);
	const { movePage } = useMovePage();

	if (useSidebarRender()) {
		return (
			<SideBarLayout>
				<div className="sidebar-container">
					<div id="logo">
						<img src={PlantyLogo} alt="planty" onClick={() => movePage('/dashboard', null)} role="presentation" />
					</div>
					<div id="profile" onClick={() => movePage('/settings', null)} role="presentation">
						<GreenmateInfo img={(auth?.profilePhoto as string) ?? greenmateImg} text={auth?.nickname as string} />
					</div>
					<div id="menu">
						{/* 현재 진행중인 컨설팅이 있다면, 메뉴 추가 */}
						{auth?.currentConsulting ? (
							<MenuItem
								img={Ing}
								text="현재 진행중인 컨설팅"
								handleClick={() =>
									movePage(auth?.currentConsulting?.type ? '/consulting/video' : '/consulting/chat', null)
								}
								isIng
							/>
						) : (
							<div />
						)}
						<MenuItem
							img={dashboard}
							text="대시보드"
							handleClick={() => movePage('/dashboard', null)}
							pathname="dashboard"
						/>
						<MenuItem
							img={classImg}
							text="구독 관리"
							handleClick={() => movePage('/subscribes/list', null)}
							pathname="subscribes"
						/>
						<MenuItem
							img={counsulting}
							text="컨설팅 내역 조회"
							handleClick={() => movePage('/history/emergency', null)}
							pathname="history"
						/>
						<MenuItem img={setting} text="설정" handleClick={() => movePage('/settings', null)} pathname="settings" />
					</div>
					<div id="active-manage">
						<RequestArea />
					</div>
				</div>
			</SideBarLayout>
		);
	}
	return <div />;
}

export default SideBar;
