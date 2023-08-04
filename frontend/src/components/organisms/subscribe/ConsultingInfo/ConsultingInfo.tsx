import React from 'react';
import ConsultingInfoLayout from 'components/layout/subscirbe/ConsultingInfoLayout/ConsultingInfoLayout';
import InfoList from 'components/organisms/common/InfoList/InfoList';
import Button from 'components/atoms/common/Button/Button';
import { IConsultingSummary } from 'types/dummy';
import useMovePage from 'hooks/useMovePage';
import ConsultingStickerList from '../ConsultingStickerList/ConsultingStickerList';

const testFunc = () => {
	alert('클릭');
};

function ConsultingInfo({ sid, consulting }: { sid: number; consulting: IConsultingSummary }) {
	const { movePage } = useMovePage();
	const consultingCnt = consulting.consultCount.split('/');
	const info = {
		'총 횟수': consultingCnt[0].trim(),
		'잔여 횟수': consultingCnt[1].trim(),
		'컨설팅 일정': consulting.consultDate,
	};

	return (
		<ConsultingInfoLayout>
			<ConsultingStickerList consultingStatus={[0, 1, 0, 0, 2, 2]} />
			<InfoList info={info} />
			<Button isActive text="예약하기" handleClick={testFunc} />
			<Button isActive={false} text="컨설팅 내역보기" handleClick={() => movePage(`/subscribe/${sid}/booking`)} />
		</ConsultingInfoLayout>
	);
}

export default ConsultingInfo;
