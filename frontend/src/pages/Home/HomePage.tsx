import HomePageLayout from 'components/layout/HomePageLayout/HomePageLayout';
import React from 'react';

function HomePage() {
	return (
		<HomePageLayout>
			<div>banner</div>
			<div>내 구독 정보</div>
			<div>구독 아이템</div>
			<div>예약관리</div>
			<div>채팅 응급실</div>
			<div>화상 응급실</div>
		</HomePageLayout>
	);
}

export default HomePage;
