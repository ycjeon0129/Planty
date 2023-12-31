import React from 'react';
import PageTitle from 'components/atoms/common/PageTitle/PageTitle';
import MypagePageLayout from 'components/layout/Page/MypagePageLayout/MypagePageLayout';
import MypageIcon from 'assets/icons/tabbar/Mypage.svg';
import MypageSubmenuList from 'components/organisms/mypage/MypageSubmenuList/MypageSubmenuList';
import UserProfile from 'components/organisms/mypage/UserProfile/UserProfile';
import MiniShortcutButton from 'components/atoms/common/MiniShortcutButton/MiniShortcutButton';
import useMovePage from 'hooks/common/useMovePage';

function MypagePage() {
	const { movePage } = useMovePage();

	return (
		<MypagePageLayout>
			{/* 페이지 헤더 */}
			<PageTitle icon={MypageIcon} text="마이페이지" />

			{/* 내 정보(img, 닉네임) */}
			<UserProfile />

			{/* 마이페이지 메뉴 목록 */}
			{/* 메인 메뉴 */}
			<MiniShortcutButton handleClick={() => movePage('/subscribe', null)} text="내 구독 목록" type="subscribeList" />
			<MiniShortcutButton handleClick={() => movePage('/mypage/booking', null)} text="예약 관리" type="booking" />

			{/* 서브 메뉴 */}
			<MypageSubmenuList />
		</MypagePageLayout>
	);
}

export default MypagePage;
