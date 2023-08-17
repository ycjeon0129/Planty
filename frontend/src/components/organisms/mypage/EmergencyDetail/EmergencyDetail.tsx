import SubscribeStateBadge from 'components/atoms/subscribe/SubscribeStateBadge/SubscribeStateBadge';
import React, { useState } from 'react';
import { IEmergencyHistory } from 'types/domain/Emergency';
import { ReactComponent as OpenIcon } from 'assets/icons/arrow/DownBlack300.svg';
import { ReactComponent as CloseIcon } from 'assets/icons/arrow/UpBlack300.svg';
// import convertTime from 'utils/common/convertTime';

function EmergencyDetail({ data }: { data: IEmergencyHistory }) {
	const [isOpened, setIsOpened] = useState(false);
	const minutes = data.timeTaken.split(':').map(Number);

	// const totalMinute =
	const toggleIsOpened = () => {
		setIsOpened(!isOpened);
	};

	// 뱃지 상태 리턴
	const getState = () => {
		if (data.type === 0) return 'chat';
		if (data.type === 1) return 'video';
		return 'notJoin';
	};

	return (
		<li className="detail-container">
			<div className="title">
				<div className="flexgrow1">{data.startTime}</div>
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
								<div>식물명</div>
								<div className="mt-5">시작 시간</div>
								<div className="mt-5">종료 시간</div>
								<div className="mt-5">상담 시간</div>
							</div>
							<div className="rightdate">
								<div>{data.plantName}</div>
								<div className="mt-5">{data.startTime ?? '-'}</div>
								<div className="mt-5">{data.endTime ?? '-'}</div>
								<div className="mt-5">총 {minutes[0]}분</div>
							</div>
						</div>
					</div>
					<div className="content-box">
						<div className="h3">그린메이트의 한마디</div>
						<div className="content">{data.content ?? '-'}</div>
					</div>
				</div>
			)}
		</li>
	);
}

export default EmergencyDetail;
