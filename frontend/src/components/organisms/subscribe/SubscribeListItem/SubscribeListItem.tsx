import React from 'react';
import SubscribeItemLayout from 'components/layout/subscirbe/SubscribeListItemLayout/SubscribeListItemLayout';
import ListItemTitle from 'components/atoms/common/ListItemTitle/ListItemTitle';
import SubscribeStateBadge from 'components/atoms/subscribe/SubscribeStateBadge/SubscribeStateBadge';
import Button from 'components/atoms/common/Button/Button';
import InfoList from 'components/organisms/common/InfoList/InfoList';
import { SUBSCRIBE_LIST_ITEM_LABELS } from 'constants/common/Labels';
import { ISubscribe } from 'types/domain/subscribe';
import useMovePage from 'hooks/common/useMovePage';
import CustomAlert from 'components/organisms/common/CustomAlert/CustomAlert';
import toast from 'react-hot-toast';
import convertTime from 'utils/common/convertTime';
import { IConsultingParticipateInfo } from 'types/domain/consulting';

/**
 * 구독 목록 아이템
 * @param subscribe 구독 정보 1건
 */
function SubscribeListItem({ subscribe }: { subscribe: ISubscribe }) {
	const { movePage } = useMovePage();
	const newInfo = {
		endDate: `${subscribe.endDate}`,
		startDate: `${subscribe.consultingRemainCnt}회 / ${subscribe.consultingCnt}회`,
		consultingDate: subscribe.nearConsulting.date
			? `${subscribe.nearConsulting.date} / ${convertTime(subscribe.nearConsulting.time)}`
			: '-',
	};

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
	 * 예약하기로 연결
	 */
	const toBooking = () => {
		movePage(`/subscribe/${subscribe.sid}/booking`, null);
	};

	/**
	 *  구독 종료된 것은 TOAST로 알림
	 */

	const toAlert = () => {
		toast('구독 종료된 상품입니다', {
			icon: '🌾',
		});
	};

	return (
		<SubscribeItemLayout>
			<ListItemTitle title={subscribe.title} isFull={false} url={`/subscribe/${subscribe.sid}`} />
			<SubscribeStateBadge stateKey={subscribe.state} />
			<img src={subscribe.thumbnail} alt="썸내일" />
			<InfoList info={newInfo} labels={SUBSCRIBE_LIST_ITEM_LABELS} />
			<>
				{subscribe.state === 'done' && <Button isActive text="컨설팅 받기" handleClick={toConsulting} />}
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
				{subscribe.state === 'end' && <Button isActive={false} text="구독종료" handleClick={toAlert} />}
			</>
		</SubscribeItemLayout>
	);
}

export default SubscribeListItem;
