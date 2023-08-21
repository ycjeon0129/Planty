import React from 'react';
import ConsultingInfoLayout from 'components/layout/subscirbe/ConsultingInfoLayout/ConsultingInfoLayout';
import InfoList from 'components/organisms/common/InfoList/InfoList';
import Button from 'components/atoms/common/Button/Button';
import useMovePage from 'hooks/common/useMovePage';
import { CONSULTING_INFO_LABELS } from 'constants/common/Labels';
import { ISubscribeDetail } from 'types/domain/subscribe';
import CustomAlert from 'components/organisms/common/CustomAlert/CustomAlert';
import { IConsultingParticipateInfo } from 'types/domain/consulting';
import toast from 'react-hot-toast';
import ConsultingStickerList from '../ConsultingStickerList/ConsultingStickerList';

function ConsultingInfo({ subscribe }: { subscribe: ISubscribeDetail }) {
	const { movePage } = useMovePage();
	const tmpInfo = {
		'총 횟수': `${subscribe.consultingCnt} 회`,
		'잔여 횟수': `${subscribe.consultingRemainCnt} 회`,
		'컨설팅 일정': subscribe.nearConsulting.date === null ? '-' : subscribe.nearConsulting.date,
	};
	const consultingStatus = subscribe && [
		...new Array(subscribe.consultingCnt - subscribe.consultingRemainCnt).fill(0),
		...new Array(subscribe.consultingRemainCnt).fill(2),
	];

	/**
	 * 컨설팅으로 연결
	 */
	const toConsulting = () => {
		const onConfirm = async () => {
			try {
				toast.success('화상 컨설팅으로 이동합니다.');
				const consultingParticipateInfo: IConsultingParticipateInfo = {
					cid: subscribe.nearConsulting.cid,
					date: subscribe.nearConsulting.date,
					time: subscribe.nearConsulting.time,
					title: subscribe.title,
					greenmate: subscribe.greenmate,
				};
				movePage('/consulting/participate', { consultingParticipateInfo });
			} catch (error) {
				console.error(error);
			}
		};

		CustomAlert({
			title: `${subscribe.title}`,
			desc: `${subscribe.nearConsulting.date}에 진행되는 컨설팅을 정말 진행하시겠습니까?`,
			btnTitle: '컨설팅하러 가기',
			params: {},
			onAction: onConfirm,
		});
	};

	/**
	 * 예약하기로 이동
	 */
	const toBooking = () => {
		CustomAlert({
			title: `예약하기`,
			desc: `${subscribe.title}, 예약을 진행하시겠습니까?`,
			btnTitle: '예약하기',
			params: {},
			onAction: () => {
				movePage(`/subscribe/${subscribe.sid}/booking`, null);
			},
		});
	};

	return (
		<ConsultingInfoLayout>
			<ConsultingStickerList consultingStatus={consultingStatus} />
			<InfoList info={tmpInfo} labels={CONSULTING_INFO_LABELS} />
			<>
				{subscribe.state === 'done' && <Button isActive text="컨설팅 이용하기" handleClick={toConsulting} />}
				{subscribe.state === 'end' && (
					<Button
						isActive
						text="구독 종료"
						handleClick={() => {
							toast('구독 종료된 상품입니다.', { icon: '🌾' });
						}}
					/>
				)}
				{subscribe.state === 'wait' &&
					(subscribe.consultingRemainCnt === 0 ? (
						<Button
							isActive={false}
							text="컨설팅 종료"
							handleClick={() => {
								toast.error('컨설팅 횟수를 모두 소진하였습니다.');
							}}
						/>
					) : (
						<Button isActive={false} text="예약하기" handleClick={toBooking} />
					))}
			</>

			<Button
				isActive={false}
				text="컨설팅 내역보기"
				handleClick={() => movePage(`/subscribe/${subscribe.sid}/consulting`, null)}
			/>
		</ConsultingInfoLayout>
	);
}

export default ConsultingInfo;
