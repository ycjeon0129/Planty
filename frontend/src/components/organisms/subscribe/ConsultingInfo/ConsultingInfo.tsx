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
		'총 횟수': info?.consultingCnt,
		'잔여 횟수': info?.consultingRemainCnt,
		'컨설팅 일정': info?.consultingDate,
	};

	return (
		<ConsultingInfoLayout>
			<ConsultingStickerList consultingStatus={[0, 1, 0, 0, 2, 2]} />
			<InfoList info={tmpInfo} labels={CONSULTING_INFO_LABELS} />
			<Button isActive text="예약하기" handleClick={() => movePage('booking')} />
			<Button isActive={false} text="컨설팅 내역보기" handleClick={() => movePage(`/subscribe/${sid}/consulting`)} />
		</ConsultingInfoLayout>
	);
}

export default ConsultingInfo;
