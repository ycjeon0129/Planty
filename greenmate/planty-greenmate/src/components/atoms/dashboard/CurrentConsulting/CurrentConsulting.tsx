import React from 'react';
import './CurrentConsulting.scss';
import GreenmateImg from 'assets/icons/Greenmate.svg';
import ProgressImg from 'assets/icons/CurrentProgress.svg';
import AreaTitle from 'components/atoms/common/AreaTitle/AreaTitle';
import { useRecoilState } from 'recoil';
import InfoRow from 'components/atoms/common/InfoRow/InfoRow';
import { consultingSessionState } from 'recoil/store';

function CurrentConsulting() {
	const [consultingSession] = useRecoilState(consultingSessionState);

	if (consultingSession)
		return (
			<div>
				<AreaTitle title="현재 진행중인 컨설팅" url="/admin/consulting/video" />
				<div className="current-consulting-container">
					<div id="profile">
						<img src={GreenmateImg} alt="사진" />
						<h3>그린메이트명</h3>
					</div>
					<div id="info">
						<InfoRow title="서비스 유형" content={consultingSession.webRTCType === 0 ? '구독' : '응급실'} />
					</div>
					<div id="short-cut">
						<img src={ProgressImg} alt="" />
					</div>
				</div>
			</div>
		);
	return (
		<div>
			<AreaTitle title="현재 진행중인 컨설팅" url="#" />
			<div className="current-consulting-container">
				<h3>현재 진행중인 컨설팅이 없습니다.</h3>
			</div>
		</div>
	);
}

export default CurrentConsulting;
