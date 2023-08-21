import React, { ReactNode } from 'react';
import './SubscribeDetailItemLayout.scss';

function SubscribeDetailItemLayout({ children }: { children: ReactNode[] }) {
	return (
		<div className="subscribe-detail-item-layout">
			{/* 제목 & 구독상태뱃지 */}
			<div id="top">
				{children[0]}
				{children[1]}
			</div>

			<div id="bottom">
				{/* 이미지 */}
				<div id="img-container">{children[2]}</div>

				<div id="right">
					{/* 작물명 */}
					<div>{children[3]}</div>

					{/* 구독 정보(구독 시작일/종료일, 담당 GM, 영양제수) */}
					<div>{children[4]}</div>
				</div>
			</div>
		</div>
	);
}

export default SubscribeDetailItemLayout;
