import React from 'react';
import SubscribePageLayout from 'components/layout/subscirbe/SubscribePageLayout/SubscribePageLayout';
import HeaderButton from 'components/atoms/common/HeaderButton/HeaderButton';
import SubscribeList from 'components/organisms/subscribe/SubscribeList/SubscribeList';
import BadgeDescription from 'components/organisms/common/BadgeDescription/BadgeDescription';
import SubscribeStateBadge from 'components/atoms/subscribe/SubscribeStateBadge/SubscribeStateBadge';
import CONSULTING_STATUS_DESC_LIST from 'constants/common/BadgeDescriptionList';

function SubscribePage() {
	const badgeList = [
		<SubscribeStateBadge stateKey="wait" />,
		<SubscribeStateBadge stateKey="done" />,
		<SubscribeStateBadge stateKey="end" />,
	];

	return (
		<SubscribePageLayout>
			{/* 페이지 헤더 */}
			<HeaderButton type="back" text="구독 목록" />

			{/* 상태 설명 */}
			<BadgeDescription title="컨설팅 상태" descriptionList={CONSULTING_STATUS_DESC_LIST} badgeList={badgeList} />

			{/* 구독 목록 */}
			<SubscribeList />
		</SubscribePageLayout>
	);
}

export default SubscribePage;
