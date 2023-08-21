import React from 'react';
import InfoListItem from 'components/atoms/common/InfoListItem/InfoListItem';
import Level from 'components/organisms/shop/Level/Level';
/**
 * 구독, 상품 등의 정보를 나타내는 아이템의 모음
 * @param info 정보들을 담고 있는 객체
 */
function InfoList({ info, labels }: { info: object; labels: string[] }) {
	// const keys = Object.keys(info);
	const values = Object.values(info);

	return (
		<div className="info-list-container">
			{labels.map((title, idx) => {
				let content;
				if (title === '난이도') {
					content = <Level level={values[idx]} />;
				} else {
					const value = parseInt(values[idx], 10);
					if (title === '구독기간') {
						content = <span>{value} 주</span>;
					} else if (title === '가격') {
						content = <span>{value.toLocaleString()} 원</span>;
					} else if (title === '컨설팅 횟수') {
						content = <span>{value} 회</span>;
					} else {
						content = <span>{values[idx]}</span>;
					}
				}

				return (
					<InfoListItem key={title}>
						<span>{title}</span>
						{content}
					</InfoListItem>
				);
			})}
		</div>
	);
}

export default InfoList;
