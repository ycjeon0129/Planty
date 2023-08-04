import React from 'react';
import PageTitleButton from 'components/atoms/common/PageTitleButton/PageTitleButton';
import SubscribeDetailPageLayout from 'components/layout/subscirbe/SubscribeDetailPageLayout/SubscribeDetailPageLayout';
import AreaTitle from 'components/atoms/common/AreaTitle/AreaTitle';
import SubscribeListItem from 'components/organisms/subscribe/SubscribeListItem/SubscribeListItem';
import { dummySubscribeDetail } from 'dummy';
import ConsultingInfo from 'components/organisms/subscribe/ConsultingInfo/ConsultingInfo';

const sid = 0;

function SubscribeDetailPage() {
	return (
		<SubscribeDetailPageLayout>
			{/* 페이지 헤더 */}
			<PageTitleButton type="back" text="상세조회" />

			{/* 구독 정보 */}
			<AreaTitle title="구독 정보" url="/shop/product/0" />
			<SubscribeListItem subscribe={dummySubscribeDetail} />

			{/* 컨설팅 정보 */}
			<AreaTitle title="컨설팅 정보" url="/subscribe/0/booking" />
			<ConsultingInfo sid={sid} consulting={dummySubscribeDetail.info} />

			{/* 온습도 정보 */}
			<AreaTitle title="온습도 정보" url="#" />
			<div>온습도 정보 내용</div>
		</SubscribeDetailPageLayout>
	);
}

export default SubscribeDetailPage;
