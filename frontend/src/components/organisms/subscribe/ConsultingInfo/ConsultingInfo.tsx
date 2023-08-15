import React from 'react';
import ConsultingInfoLayout from 'components/layout/subscirbe/ConsultingInfoLayout/ConsultingInfoLayout';
import InfoList from 'components/organisms/common/InfoList/InfoList';
import Button from 'components/atoms/common/Button/Button';
import useMovePage from 'hooks/useMovePage';
import { CONSULTING_INFO_LABELS } from 'constants/common/Labels';
import { IConsultingSummary } from 'types/domain/subscribe';
import ConsultingStickerList from '../ConsultingStickerList/ConsultingStickerList';

function ConsultingInfo({ sid, info }: { sid: number; info: IConsultingSummary }) {
	const { movePage } = useMovePage();
	const tmpInfo = {
		'총 횟수': `${info?.consultingCnt} 회`,
		'잔여 횟수': `${info?.consultingRemainCnt} 회`,
		'컨설팅 일정': info?.consultingDate === null ? '-' : info.consultingDate,
	};
	const consultingStatus = info && [
		...new Array(info.consultingCnt - info.consultingRemainCnt).fill(0),
		...new Array(info.consultingRemainCnt).fill(2),
	];

	return (
		<ConsultingInfoLayout>
			<ConsultingStickerList consultingStatus={consultingStatus} />
			<InfoList info={tmpInfo} labels={CONSULTING_INFO_LABELS} />
			<Button isActive text="예약하기" handleClick={() => movePage('booking', null)} />
			<Button
				isActive={false}
				text="컨설팅 내역보기"
				handleClick={() => movePage(`/subscribe/${sid}/consulting`, null)}
			/>{' '}
		</ConsultingInfoLayout>
	);
}

export default ConsultingInfo;
