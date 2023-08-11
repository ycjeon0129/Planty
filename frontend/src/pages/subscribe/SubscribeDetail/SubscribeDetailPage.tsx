import React from 'react';
import PageTitleButton from 'components/atoms/common/PageTitleButton/PageTitleButton';
import SubscribeDetailPageLayout from 'components/layout/subscirbe/SubscribeDetailPageLayout/SubscribeDetailPageLayout';
import AreaTitle from 'components/atoms/common/AreaTitle/AreaTitle';
import ConsultingInfo from 'components/organisms/subscribe/ConsultingInfo/ConsultingInfo';
import SubscribeDetailItem from 'components/organisms/subscribe/SubscribeDetailItem/SubscribeDetailItem';
import PlantChart from 'components/organisms/subscribe/PlantChart/PlantChart';
import { useParams } from 'react-router-dom';
import useSubscribe from 'hooks/subscribes/useSubscribe';
import { IConsultingSummary, IEmbeddedInfo, ISubscribeDetail } from 'types/subscribe';
import useIsLoading from 'hooks/useIsLoading';

function SubscribeDetailPage() {
	const { sid = 0 } = useParams();
	const subscribe = useSubscribe(Number(sid));
	const isLoading = useIsLoading(subscribe);

	if (isLoading) {
		return <div>로딩중</div>;
	}

	return (
		<SubscribeDetailPageLayout>
			{/* 페이지 헤더 */}
			<PageTitleButton type="back" text="구독 상세조회" />

			{/* 구독 정보 */}
			<AreaTitle title="구독 정보" url="#" />
			{subscribe ? <SubscribeDetailItem subscribe={subscribe as ISubscribeDetail} /> : <div />}

			{/* 컨설팅 정보 */}
			<AreaTitle title="컨설팅 정보" url="#" />
			<ConsultingInfo sid={Number(sid)} info={subscribe?.info as IConsultingSummary} />

			{/* 온습도 정보 */}
			<AreaTitle title="온습도 정보" url="#" />
			<PlantChart embeddedInfo={subscribe?.embeddedInfo as IEmbeddedInfo[]} />
		</SubscribeDetailPageLayout>
	);
}

export default SubscribeDetailPage;
