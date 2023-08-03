import React, { useState } from 'react';
import './ConsultingDetails.scss';
import { ReactComponent as OpenIcon } from 'assets/icons/arrow/DownBlack300.svg';
import { ReactComponent as CloseIcon } from 'assets/icons/arrow/UpBlack300.svg';
import SubscribeStateBadge from 'components/atoms/subscribe/SubscribeStateBadge/SubscribeStateBadge';

/**
 * 컨설팅 내역 box
 * @param consultingDate	컨설팅일시
 * @param endDate 			컨설팅 종료일시
 * @param bookingState 		예약상황 (wait | done | end | join | notJoin)
 * @param recommendDate		권장상담일
 * @param consultingComment 상담코멘트
 * @param isOpened 			상세정보 활성화상태
 */

function ConsultingDetails({
	consultingDate,
	endDate,
	bookingState,
	recommendDate,
	consultingComment,
}: {
	consultingDate: string;
	endDate: string;
	bookingState: string;
	recommendDate: string;
	consultingComment: string;
}) {
	const [isOpened, setIsOpened] = useState(false);

	const toggleIsOpened = () => {
		setIsOpened(!isOpened);
	};

	return (
		<div className="detail-container">
			<div className="title">
				<div className="flexgrow1">{consultingDate}</div>
				<div className="flexgrow2">
					<SubscribeStateBadge stateKey={bookingState} />
				</div>
				<button type="button" className="flexgrow3" onClick={toggleIsOpened}>
					{isOpened ? <CloseIcon /> : <OpenIcon />}
				</button>
			</div>

			{isOpened && (
				<div className="grey-box">
					<div className="content-box">
						<span className="h3">컨설팅일시</span>
						<div className="dates">
							<div className="leftdate">
								<div>시작일시</div>
								<div className="mt-5">종료일시</div>
								<div className="mt-5">다음 권장 상담일</div>
							</div>
							<div className="rightdate">
								<div>{consultingDate}</div>
								<div className="mt-5">{endDate}</div>
								<div className="mt-5">{recommendDate}</div>
							</div>
						</div>
					</div>
					<div className="content-box">
						<div className="h3">상담내용</div>
						<div className="content">{consultingComment}</div>
					</div>
				</div>
			)}
		</div>
	);
}

export default ConsultingDetails;
