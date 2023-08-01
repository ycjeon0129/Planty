import HomePageLayout from 'components/layout/HomePageLayout/HomePageLayout';
import AreaTitle from 'components/atoms/common/AreaTitle/AreaTitle';
import SubscribeSlider from 'components/organisms/subscribe/SubscribeSlider/SubscribeSlider';
import React from 'react';
import BannerSlider from 'components/organisms/common/BannerSlider/BannerSlider';

function HomePage() {
	return (
		<HomePageLayout>
			<BannerSlider />
			<AreaTitle title="내 구독 정보" url="subscribe" />
			<SubscribeSlider />
			<div>예약관리</div>
			<div>채팅 응급실</div>
			<div>화상 응급실</div>
		</HomePageLayout>
	);
}

export default HomePage;
