import SubscribeDetailPageLayout from 'components/layout/subscirbe/SubscribeDetailPageLayout/SubscribeDetailPageLayout';
import React from 'react';

function SubscribeDetailPage() {
	return (
		<SubscribeDetailPageLayout>
			{/* 페이지 헤더 */}
			<div>페이지 헤더</div>

			{/* 구독 정보 */}
			<div>구독 정보 제목</div>
			<div>구독 정보 내용</div>

			{/* 컨설팅 정보 */}
			<div>컨설팅 정보 제목</div>
			<div>컨설팅 정보 내용</div>

			{/* 온습도 정보 */}
			<div>온습도 정보 제목</div>
			<div>온습도 정보 내용</div>
		</SubscribeDetailPageLayout>
	);
}

export default SubscribeDetailPage;
