import HomePageLayout from 'components/layout/Page/HomePageLayout/HomePageLayout';
import AreaTitle from 'components/atoms/common/AreaTitle/AreaTitle';
import SubscribeSlider from 'components/organisms/subscribe/SubscribeSlider/SubscribeSlider';
import React from 'react';
import toast from 'react-hot-toast';
import BannerSlider from 'components/organisms/common/BannerSlider/BannerSlider';
import SquareShortcutButton from 'components/atoms/common/SquareShortcutButton/SquareShortcutButton';
import RectShortcutButton from 'components/atoms/common/RectShortcutButton/RectShortcutButton';
import Header from 'components/organisms/common/Header/Header';
import useMovePage from 'hooks/common/useMovePage';

function HomePage() {
	const { movePage } = useMovePage();

	return (
		<HomePageLayout>
			<Header />
			<BannerSlider />
			<AreaTitle title="내 구독 목록" url="/subscribe" />
			<SubscribeSlider />
			<AreaTitle title="서비스 바로가기" url="#" />
			<SquareShortcutButton
				text="예약 관리"
				handleClick={() => {
					movePage('/mypage/booking', null);
				}}
				type="booking"
			/>
			<RectShortcutButton
				text="채팅 컨설팅"
				handleClick={() => {
					toast('준비 중인 서비스입니다!', {
						icon: '🛠️',
					});
				}}
				type="consulting-chat"
			/>
			<RectShortcutButton
				text="화상 컨설팅"
				handleClick={() => {
					movePage('/emergency/participate/1', null);
				}}
				type="consulting-video"
			/>
		</HomePageLayout>
	);
}

export default HomePage;
