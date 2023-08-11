import React from 'react';
import BadgeDescriptionLayout from 'components/layout/common/StatusDescriptionLayout/StatusDescriptionLayout';
import SubscribeStateBadge from 'components/atoms/subscribe/SubscribeStateBadge/SubscribeStateBadge';

function BadgeDescription({
	title,
	descriptionList,
	stateKeyList,
}: {
	title: string;
	descriptionList: string[];
	stateKeyList: string[];
}) {
	return (
		<BadgeDescriptionLayout>
			{/* 타이틀 */}
			<h3>{title}</h3>

			{/* 설명 */}
			<ul>
				{descriptionList.map((v) => (
					<li key={v}>{v}</li>
				))}
			</ul>

			{/* 뱃지 목록 */}
			<ul>
				{stateKeyList.map((v) => (
					<li key={v}>
						<SubscribeStateBadge stateKey={v} />
					</li>
				))}
			</ul>
		</BadgeDescriptionLayout>
	);
}

export default BadgeDescription;
