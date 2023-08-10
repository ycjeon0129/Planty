import React from 'react';
import './RequestItem.scss';
import x from 'assets/icons/Close.svg';

/**
 * 사용자가 요청보낸 것(*수락버튼 + x버튼 눌렀을 떄 로직 미완*)
 * @param param0 Type : 채팅 or 화상, greenmate: 그린메이트 닉네임, service: 응급실, 정기 컨설팅
 * @returns
 */
function RequestItem({ type, user, category }: { type: number; user: string; category: number }) {
	return (
		<div>
			<div className="request-outer-box">
				<div className="request-left-box">
					<div className="bold-text">{type ? '화상' : '구독'}</div>
					<div>
						<div>{user}님</div>
						<div>{category ? '구독 컨설팅' : '응급실 컨설팅'} 요청</div>
					</div>
				</div>
				<div>
					<div className="request-right-box">
						<div className="right-end">
							<img src={x} alt="" />
						</div>
						<div className="green-text">요청수락</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default RequestItem;
