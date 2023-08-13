import React, { useState } from 'react';
import './MypageConsultingDetail.scss';
import { ReactComponent as OpenIcon } from 'assets/icons/arrow/DownBlack300.svg';
import { ReactComponent as CloseIcon } from 'assets/icons/arrow/UpBlack300.svg';
import SubscribeStateBadge from 'components/atoms/subscribe/SubscribeStateBadge/SubscribeStateBadge';
import { IConsulting } from 'types/domain/consulting';

/**
 * 컨설팅 내역 box
 * @param consultingDate	컨설팅일시
 * @param endDate 			컨설팅 종료일시
 * @param bookingState 		예약상황 (join | notJoin)
 * @param recommendDate		권장상담일
 * @param consultingComment 상담코멘트
 * @param isOpened 			상세정보 활성화상태
 */
function MypageConsultingDetail({ data }: { data: IConsulting }) {
	const [isOpened, setIsOpened] = useState(false);

	const toggleIsOpened = () => {
		setIsOpened(!isOpened);
	};

	// 뱃지 상태 리턴
	const getState = () => {
		if (data.active) return 'join';
		if (data.cancel) return 'cancelConsult';
		return 'notJoin';
	};

	return (
		<li className="detail-container">
			<div className="title">
				<div className="flexgrow1">{data.subscribeProductName}</div>
				<div className="flexgrow2">
					<SubscribeStateBadge stateKey={getState()} />
				</div>
				<button type="button" className="flexgrow3" onClick={toggleIsOpened}>
					{isOpened ? <CloseIcon /> : <OpenIcon />}
				</button>
			</div>

			{isOpened && (
				<div className="grey-box">
					<div className="content-box">
						<span className="h3">컨설팅 상세정보</span>
						<div className="dates">
							<div className="leftdate">
								<div>컨설팅 받은 날</div>
								<div>시작 시간</div>
								<div className="mt-5">종료 시간</div>
								<div className="mt-5">다음 컨설팅 권장일</div>
							</div>
							<div className="rightdate">
								<div>{data.date}</div>
								<div>{data.startTime ?? '-'}</div>
								<div className="mt-5">{data.endTime ?? '-'}</div>
								<div className="mt-5">
									{data.recommendedStartDate ?? '-'} ~ {data.recommendedEndDate ?? '-'}
								</div>
							</div>
						</div>
					</div>
					<div className="content-box">
						<div className="h3">그린메이트의 한마디</div>
						<div className="content">{data.advice ?? '-'}</div>
					</div>
				</div>
			)}
		</li>
	);
}

export default MypageConsultingDetail;
