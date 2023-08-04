import React from 'react';
import BadgeDescriptionLayout from 'components/layout/common/StatusDescriptionLayout/StatusDescriptionLayout';

function BadgeDescription({
	title,
	descriptionList,
	badgeList,
}: {
	title: string;
	descriptionList: string[];
	badgeList: JSX.Element[];
}) {
	return (
		<BadgeDescriptionLayout>
			{/* 타이틀 */}
			<h3>{title}</h3>

			{/* 설명 */}
			<ul>
				{descriptionList.map((v) => (
					<li>{v}</li>
				))}
			</ul>

			{/* 뱃지 목록 */}
			<ul>
				{badgeList.map((v) => (
					<li>{v}</li>
				))}
			</ul>
		</BadgeDescriptionLayout>
	);
}

export default BadgeDescription;
