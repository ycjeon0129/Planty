import React from 'react';
import SubscribeItemLayout from 'components/layout/subscirbe/SubscribeListItemLayout/SubscribeListItemLayout';
import ListItemTitle from 'components/atoms/common/ListItemTitle/ListItemTitle';
import SubscribeStateBadge from 'components/atoms/subscribe/SubscribeStateBadge/SubscribeStateBadge';
import Button from 'components/atoms/common/Button/Button';
import InfoList from 'components/organisms/common/InfoList/InfoList';
import { SUBSCRIBE_LIST_ITEM_LABELS } from 'constants/common/Labels';
import { ISubscribe } from 'types/domain/subscribe';
import useMovePage from 'hooks/useMovePage';
import CustomAlert from 'components/organisms/common/CustomAlert/CustomAlert';
import toast from 'react-hot-toast';

/**
 * 구독 목록 아이템
 * @param subscribe 구독 정보 1건
 */
function SubscribeListItem({ subscribe }: { subscribe: ISubscribe }) {
	const { movePage } = useMovePage();
	const { sid, startDate, title, info, state, thumbnail } = subscribe;
	const newInfo = {
		startDate,
		consultingCnt: info.consultingCnt,
		consultingDate: info.consultingDate,
	};

	/**
	 * 컨설팅으로 연결
	 */
	const linkToConsult = () => {
		const onConfirm = async () => {
			try {
				toast.success('화상 컨설팅으로 이동합니다.');
				movePage('/consulting/participate', { subscribe });
			} catch (error) {
				console.error(error);
			}
		};

		CustomAlert({
			title: `${subscribe.title}`,
			desc: `${subscribe.info.consultingDate}에 진행되는 컨설팅을 정말 진행하시겠습니까?`,
			btnTitle: '컨설팅하러 가기',
			params: {},
			onAction: onConfirm,
		});
	};

	/**
	 * 예약하기로 연결
	 */
	const linkToBook = () => {
		movePage(`/subscribe/${sid}/booking`, null);
	};

	return (
		<SubscribeItemLayout>
			<ListItemTitle title={title} url={`/subscribe/${sid}`} />
			<SubscribeStateBadge stateKey={state} />
			<img src={thumbnail} alt="" />
			<InfoList info={newInfo} labels={SUBSCRIBE_LIST_ITEM_LABELS} />
			{state === 'done' ? (
				<Button isActive text="컨설팅 이용하기" handleClick={linkToConsult} />
			) : (
				<Button isActive={false} text="예약 하러가기" handleClick={linkToBook} />
			)}
		</SubscribeItemLayout>
	);
}

export default SubscribeListItem;
