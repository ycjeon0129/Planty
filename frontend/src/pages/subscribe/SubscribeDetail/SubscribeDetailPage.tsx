import React from 'react';
import PageTitleButton from 'components/atoms/common/PageTitleButton/PageTitleButton';
import SubscribeDetailPageLayout from 'components/layout/subscirbe/SubscribeDetailPageLayout/SubscribeDetailPageLayout';
import AreaTitle from 'components/atoms/common/AreaTitle/AreaTitle';
import ConsultingInfo from 'components/organisms/subscribe/ConsultingInfo/ConsultingInfo';
import SubscribeDetailItem from 'components/organisms/subscribe/SubscribeDetailItem/SubscribeDetailItem';
import PlantChart from 'components/organisms/subscribe/PlantChart/PlantChart';
import { useLocation } from 'react-router-dom';
import useSubscribe from 'hooks/subscribes/useSubscribe';
import { IConsultingSummary, IEmbeddedInfo, ISubscribeDetail } from 'types/domain/subscribe';

function SubscribeDetailPage() {
	const sid = +useLocation().pathname.split('/')[2];
	const subscribe = useSubscribe(sid);

	return (
		<SubscribeDetailPageLayout>
			{/* 페이지 헤더 */}
			<PageTitleButton type="back" text="구독 상세조회" />

			{/* 구독 정보 */}
			<AreaTitle title="구독 정보" url="#" />
			{subscribe ? <SubscribeDetailItem subscribe={subscribe as ISubscribeDetail} /> : <div />}

			{/* 컨설팅 정보 */}
			<AreaTitle title="컨설팅 정보" url="#" />
			<ConsultingInfo sid={sid} info={subscribe?.info as IConsultingSummary} />

			{/* 온습도 정보 */}
			<AreaTitle title="온습도 정보" url="#" />
			<PlantChart embeddedInfo={subscribe?.embeddedInfo as IEmbeddedInfo[]} />
		</SubscribeDetailPageLayout>
	);
}

export default SubscribeDetailPage;
