import React from 'react';
import PageTitleButton from 'components/atoms/common/PageTitleButton/PageTitleButton';
import SubscribeDetailPageLayout from 'components/layout/subscirbe/SubscribeDetailPageLayout/SubscribeDetailPageLayout';
import AreaTitle from 'components/atoms/common/AreaTitle/AreaTitle';
import { dummySubscribeDetail } from 'dummy';
import ConsultingInfo from 'components/organisms/subscribe/ConsultingInfo/ConsultingInfo';
import SubscribeDetailItem from 'components/organisms/subscribe/SubscribeDetailItem/SubscribeDetailItem';

const sid = 0;

function SubscribeDetailPage() {
	return (
		<SubscribeDetailPageLayout>
			{/* 페이지 헤더 */}
			<PageTitleButton type="back" text="구독 상세조회" />

			{/* 구독 정보 */}
			<AreaTitle title="구독 정보" url="#" />
			<SubscribeDetailItem subscribe={dummySubscribeDetail} />

			{/* 컨설팅 정보 */}
			<AreaTitle title="컨설팅 정보" url="#" />
			<ConsultingInfo sid={sid} consulting={dummySubscribeDetail.info} />

			{/* 온습도 정보 */}
			<AreaTitle title="온습도 정보" url="#" />
			<div>온습도 정보 내용</div>
		</SubscribeDetailPageLayout>
	);
}

export default SubscribeDetailPage;
