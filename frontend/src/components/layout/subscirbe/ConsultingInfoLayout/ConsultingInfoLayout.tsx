import React, { ReactNode } from 'react';
import './ConsultingInfoLayout.scss';

function ConsultingInfoLayout({ children }: { children: ReactNode[] }) {
	return (
		<div className="consulting-info-layout">
			{/* 컨설팅 상태 스티커 */}
			<div id="left">{children[0]}</div>

			<div id="right">
				{/* 정보(총 횟수, 잔여 횟수, 컨설팅 일정) */}
				<div id="right-top">{children[1]}</div>

				{/* 버튼(예약하기, 내역보기) */}
				<div id="right-bottom">
					{children[2]}
					{children[3]}
				</div>
			</div>
		</div>
	);
}

export default ConsultingInfoLayout;
