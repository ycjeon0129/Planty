import './BookingListItemLayout.scss';

import React, { ReactNode } from 'react';

/**
 * 예약 목록 아이템을 구성하는 레이아웃
 * @param children 레이아웃을 구성하는 컴포넌트들 ( ListItemTitle /구독상태뱃지 / img / InfoList / 기본버튼(Button) )
 * @returns
 */
function BookingListItemLayout({ children }: { children: ReactNode[] }) {
	return (
		<div className="booking-list-item-layout">
			{/* 제목 & 상태뱃지 */}
			<div id="top">
				{children[0]}
				{children[1]}
			</div>
			<div id="bottom">
				{/* 이미지 */}
				{children[2]}
				<div id="right">
					{/* 예약 정보 */}
					<div>{children[3]}</div>
					{/* 버튼 */}
					{children[4]}
				</div>
			</div>
		</div>
	);
}

export default BookingListItemLayout;
