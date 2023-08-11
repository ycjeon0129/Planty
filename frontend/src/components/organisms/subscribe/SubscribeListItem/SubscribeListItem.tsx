import React from 'react';
import SubscribeItemLayout from 'components/layout/subscirbe/SubscribeListItemLayout/SubscribeListItemLayout';
import ListItemTitle from 'components/atoms/common/ListItemTitle/ListItemTitle';
import SubscribeStateBadge from 'components/atoms/subscribe/SubscribeStateBadge/SubscribeStateBadge';
import Button from 'components/atoms/common/Button/Button';
import InfoList from 'components/organisms/common/InfoList/InfoList';
import { SUBSCRIBE_LIST_ITEM_LABELS } from 'constants/common/Labels';
import { ISubscribe } from 'types/subscribe';

/**
 * 구독 목록 아이템
 * @param subscribe 구독 정보 1건
 */
function SubscribeListItem({ subscribe }: { subscribe: ISubscribe }) {
	const { sid, startDate, title, info, state, thumbnail } = subscribe;
	const newInfo = {
		startDate,
		consultingCnt: info.consultingCnt,
		consultingDate: info.consultingDate,
	};

	const testFunc = () => {
		alert('클릭');
	};

	return (
		<SubscribeItemLayout>
			<ListItemTitle title={title} url={`/subscribe/${sid}`} />
			<SubscribeStateBadge stateKey={state} />
			<img src={thumbnail} alt="" />
			<InfoList info={newInfo} labels={SUBSCRIBE_LIST_ITEM_LABELS} />
			<Button isActive={false} text="컨설팅 이용하기" handleClick={testFunc} />
		</SubscribeItemLayout>
	);
}

export default SubscribeListItem;
