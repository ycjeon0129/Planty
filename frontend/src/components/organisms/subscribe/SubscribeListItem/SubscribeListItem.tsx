import './SubscribeListItem.scss';

import React from 'react';
import SubscribeItemLayout from 'components/layout/subscirbe/SubscribeListItemLayout/SubscribeListItemLayout';
import ListItemHeader from 'components/atoms/common/ListItemHeader/ListItemHeader';
import SubscribeStateBadge from 'components/atoms/subscribe/SubscribeStateBadge/SubscribeStateBadge';
import ListItemInfoList from 'components/organisms/common/ListItemInfoList/ListItemInfoList';
import Button from 'components/atoms/common/Button/Button';

function SubscribeListItem() {
	// dumy
	const test = {
		menu: 'ㅎㅇ',
		menu1: 'ㅎㅇ1',
		menu2: 'ㅎㅇ2',
	};

	return (
		<SubscribeItemLayout>
			<ListItemHeader title="누구나 쉽게 키우는 몬스테라 클래스" url="url" />
			<SubscribeStateBadge stateKey="wait" />
			<img
				src="https://i.ytimg.com/vi/xeCsFtwVozo/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhWIGAoZTAP&rs=AOn4CLDonoxD_GnPWvni23yD6jOIMWIKuQ"
				alt=""
			/>
			<ListItemInfoList info={test} />
			<Button />
		</SubscribeItemLayout>
	);
}

export default SubscribeListItem;
