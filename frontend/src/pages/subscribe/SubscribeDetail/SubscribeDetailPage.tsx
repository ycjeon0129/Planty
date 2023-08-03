import React from 'react';
import PageTitleButton from 'components/atoms/common/PageTitleButton/PageTitleButton';
import SubscribeDetailPageLayout from 'components/layout/subscirbe/SubscribeDetailPageLayout/SubscribeDetailPageLayout';
import AreaTitle from 'components/atoms/common/AreaTitle/AreaTitle';

function SubscribeDetailPage() {
	return (
		<SubscribeDetailPageLayout>
			{/* 페이지 헤더 */}
			<PageTitleButton type="back" text="상세조회" />

			{/* 구독 정보 */}
			<AreaTitle title="구독 정보" url="/shop/product/0" />
			<div>구독 정보 내용</div>

			{/* 컨설팅 정보 */}
			<AreaTitle title="컨설팅 정보" url="/subscribe/0/booking" />
			<div>컨설팅 정보 내용</div>

			{/* 온습도 정보 */}
			<AreaTitle title="온습도 정보" url="#" />
			<div>온습도 정보 내용</div>
		</SubscribeDetailPageLayout>
	);
}

export default SubscribeDetailPage;
