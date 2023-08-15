import React from 'react';
import ConsultingInfoLayout from 'components/layout/subscirbe/ConsultingInfoLayout/ConsultingInfoLayout';
import InfoList from 'components/organisms/common/InfoList/InfoList';
import Button from 'components/atoms/common/Button/Button';
import useMovePage from 'hooks/common/useMovePage';
import { CONSULTING_INFO_LABELS } from 'constants/common/Labels';
import { ISubscribeDetail } from 'types/domain/subscribe';
import ConsultingStickerList from '../ConsultingStickerList/ConsultingStickerList';

function ConsultingInfo({ subscribe }: { subscribe: ISubscribeDetail }) {
	const { movePage } = useMovePage();
	const tmpInfo = {
		'총 횟수': `${subscribe.consultingCnt} 회`,
		'잔여 횟수': `${subscribe.consultingRemainCnt} 회`,
		'컨설팅 일정': subscribe.info.consultingDate === null ? '-' : subscribe.info.consultingDate,
	};
	const consultingStatus = subscribe && [
		...new Array(subscribe.consultingCnt - subscribe.consultingRemainCnt).fill(0),
		...new Array(subscribe.consultingRemainCnt).fill(2),
	];

	return (
		<ConsultingInfoLayout>
			<ConsultingStickerList consultingStatus={consultingStatus} />
			<InfoList info={tmpInfo} labels={CONSULTING_INFO_LABELS} />
			<Button isActive text="예약하기" handleClick={() => movePage('booking', null)} />
			<Button
				isActive={false}
				text="컨설팅 내역보기"
				handleClick={() => movePage(`/subscribe/${subscribe.sid}/consulting`, null)}
			/>{' '}
		</ConsultingInfoLayout>
	);
}

export default ConsultingInfo;
