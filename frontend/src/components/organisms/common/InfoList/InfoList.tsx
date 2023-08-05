import React from 'react';
import InfoListItem from 'components/atoms/common/InfoListItem/InfoListItem';

/**
 * 구독, 상품 등의 정보를 나타내는 아이템의 모음
 * @param info 정보들을 담고 있는 객체
 */
function InfoList({ info }: { info: object }) {
	const keys = Object.keys(info);
	const values = Object.values(info);

	return (
		<div className="info-list-container">
			{keys.map((title, idx) => (
				<InfoListItem key={title}>
					<span>{title}</span>
					<span>{values[idx]}</span>
				</InfoListItem>
			))}
		</div>
	);
}

export default InfoList;
