import HomePageLayout from 'components/layout/HomePageLayout/HomePageLayout';
import AreaTitle from 'components/atoms/common/AreaTitle/AreaTitle';
import SubscribeSlider from 'components/organisms/subscribe/SubscribeSlider/SubscribeSlider';
import React from 'react';
import BannerSlider from 'components/organisms/common/BannerSlider/BannerSlider';
import SquareShortcutButton from 'components/atoms/common/SquareShortcutButton/SquareShortcutButton';

function HomePage() {
	return (
		<HomePageLayout>
			<BannerSlider />
			<AreaTitle title="내 구독 정보" url="subscribe" />
			<SubscribeSlider />
			<AreaTitle title="서비스 바로가기" url="#" />
			<SquareShortcutButton
				message="예약관리"
				onClick={() => {
					alert('예약관리로 이동');
				}}
				type="booking"
			/>
			<div>채팅 응급실</div>
			<div>화상 응급실</div>
		</HomePageLayout>
	);
}

export default HomePage;
