/* eslint-disable global-require */
import React from 'react';
import './SubScribeDetail.scss';
import useSubscribe from 'hooks/api/useSubscribe';
import useLocationIdx from 'hooks/common/useSid';
import InfoRow from 'components/atoms/common/InfoRow/InfoRow';

function SubScribeDetail() {
	const sid = useLocationIdx(3);
	const subscribe = useSubscribe(sid);

	return (
		<div className="subscribe-detail-container">
			<div id="thumbnail-container">
				{/* <img src={subscribe?.thumbnail} alt="img" /> */}
				<img src={subscribe?.thumbnail ?? require('assets/images/defaultImage.png')} alt="img" />
			</div>
			<div id="info">
				<InfoRow title="- 구독 상품명" content={subscribe?.name as string} />
				<InfoRow title="- 구독 상품 가격" content={subscribe?.price as number} />
				<InfoRow title="- 포함된 구독 기간" content={`${subscribe?.period} 개월`} />
				<InfoRow title="- 포함된 작물/식물" content={subscribe?.plant as string} />
				<InfoRow title="- 난이도" content={`${subscribe?.level as number}/5`} />
				<InfoRow title="- 포함된 컨설팅 횟수" content={subscribe?.consultingCnt as number} />
				<InfoRow title="- 구독자 수" content={subscribe?.subscriberCnt as number} />
			</div>
		</div>
	);
}

export default SubScribeDetail;
