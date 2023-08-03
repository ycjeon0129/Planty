import React from 'react';
import PageTitle from 'components/atoms/common/PageTitle/PageTitle';
import MypagePageLayout from 'components/layout/Page/MypagePageLayout/MypagePageLayout';
import LeafIcon from 'assets/icons/pageTitle/Leaf.svg';
import MypageSubmenuList from 'components/organisms/mypage/MypageSubmenuList/MypageSubmenuList';
import UserProfile from 'components/organisms/mypage/UserProfile/UserProfile';
import MiniShortcutButton from 'components/atoms/common/MiniShortcutButton/MiniShortcutButton';
import useMovePage from 'hooks/useMovePage';

function MypagePage() {
	const { movePage } = useMovePage();

	return (
		<MypagePageLayout>
			{/* 페이지 헤더 */}
			<PageTitle icon={LeafIcon} text="마이페이지" />

			{/* 내 정보(img, 닉네임) */}
			<UserProfile />

			{/* 마이페이지 메뉴 목록 */}
			{/* 메인 메뉴 */}
			<MiniShortcutButton handleClick={() => movePage('/subscribe')} text="구독목록" type="subscribeList" />
			<MiniShortcutButton handleClick={() => movePage('/mypage/booking')} text="예약관리" type="booking" />

			{/* 서브 메뉴 */}
			<MypageSubmenuList />
		</MypagePageLayout>
	);
}

export default MypagePage;
