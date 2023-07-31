import './SubscribeListItem.scss';

import React from 'react';
import SubscribeItemLayout from 'components/layout/subscirbe/SubscribeListItemLayout/SubscribeListItemLayout';
import ListItemHeader from 'components/atoms/common/ListItemHeader/ListItemHeader';
import SubscribeStateBadge from 'components/atoms/subscribe/SubscribeStateBadge/SubscribeStateBadge';
import Button from 'components/atoms/common/Button/Button';
import InfoList from 'components/organisms/common/ListItemInfoList/InfoList';

function SubscribeListItem() {
	// dumy
	const test = {
		구독시작일: '2022-07-23',
		menu1: 'ㅎㅇ1',
		menu2: 'ㅎㅇ2',
	};

	return (
		<SubscribeItemLayout>
			<ListItemHeader title="누구나 쉽게 키우는 몬스테라 클래스" url="url" />
			<SubscribeStateBadge stateKey="done" />
			<img
				src="https://i.ytimg.com/vi/xeCsFtwVozo/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhWIGAoZTAP&rs=AOn4CLDonoxD_GnPWvni23yD6jOIMWIKuQ"
				alt=""
			/>
			<InfoList info={test} />
			<Button isActive message="컨설팅 이용하기" />
		</SubscribeItemLayout>
	);
}

export default SubscribeListItem;
