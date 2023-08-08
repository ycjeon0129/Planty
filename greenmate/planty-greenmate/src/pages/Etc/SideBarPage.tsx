import React from 'react';
import SideBarLayout from 'components/layout/common/SideBarLayout/SideBarLayout';
import SideBar from 'components/organisms/common/SideBar/SideBar';
import GreenmateInfo from 'components/atoms/sidebar/greenmateInfo/GreenmateInfo';
import greenmateImg from 'assets/icons/Greenmate.svg';
import CheckOnline from 'components/atoms/sidebar/checkOnline/CheckOnlineItem';
import RequestItem from 'components/atoms/sidebar/requestItem/RequestItem';

function SideBarPage() {
	// axios로 그린메이트 정보를 가져와서 그린메이트 사진, 이름을 가져온다.
	return (
		<SideBarLayout>
			<GreenmateInfo img={greenmateImg} text="그린메이트" />
			<SideBar />
			<CheckOnline />
			<div>1</div>
			<RequestItem type="채팅" greenmate="영국남자" service="응급실" />
		</SideBarLayout>
	);
}

export default SideBarPage;
