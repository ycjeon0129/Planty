import React from 'react';
import PageTitle from 'components/atoms/common/PageTitle/PageTitle';
import MypagePageLayout from 'components/layout/Page/MypagePageLayout/MypagePageLayout';
import LeafIcon from 'assets/icons/pageTitle/Leaf.svg';
import TabBarList from 'components/organisms/common/TabBarList/TabBarList';
import MypageSubmenuList from 'components/organisms/mypage/MypageSubmenuList/MypageSubmenuList';

function MypagePage() {
	return (
		<MypagePageLayout>
			{/* 페이지 헤더 */}
			<PageTitle icon={LeafIcon} text="마이페이지" />

			{/* 내 정보(img, 닉네임) */}
			<div>이미지/닉네임</div>

			{/* 마이페이지 메뉴 목록 */}
			{/* 메인 메뉴 */}
			<p>구독 목록</p>
			<p>예약 관리</p>
			{/* 서브 메뉴 */}
			<MypageSubmenuList />
			<TabBarList />
		</MypagePageLayout>
	);
}

export default MypagePage;
