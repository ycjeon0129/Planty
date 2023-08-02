import React from 'react';
import SubscribeItemLayout from 'components/layout/subscirbe/SubscribeListItemLayout/SubscribeListItemLayout';
import ListItemTitle from 'components/atoms/common/ListItemTitle/ListItemTitle';
import SubscribeStateBadge from 'components/atoms/subscribe/SubscribeStateBadge/SubscribeStateBadge';
import Button from 'components/atoms/common/Button/Button';
import InfoList from 'components/organisms/common/InfoList/InfoList';
import { ISubscribe } from 'types/dummy';

/**
 * 구독 목록 아이템의 모음
 * @param subscribe 구독 정보들을 담고 있는 객체
 */
function SubscribeListItem({ subscribe }: { subscribe: ISubscribe }) {
	const testFunc = () => {
		alert('클릭');
	};

	return (
		<SubscribeItemLayout>
			<ListItemTitle title={subscribe.title} url={`subscribe/${subscribe.sid}`} />
			<SubscribeStateBadge stateKey="wait" />
			<img src={subscribe.thumbnail} alt="" />
			<InfoList info={subscribe.info} />
			<Button isActive={false} text="컨설팅 이용하기" handleClick={testFunc} />
		</SubscribeItemLayout>
	);
}

export default SubscribeListItem;
