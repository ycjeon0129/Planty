import React from 'react';
import './CurrentConsulting.scss';
import GreenmateImg from 'assets/icons/Greenmate.svg';
import ProgressImg from 'assets/icons/CurrentProgress.svg';
import AreaTitle from 'components/atoms/common/AreaTitle/AreaTitle';
import { useRecoilState } from 'recoil';
import authState from 'recoil/auth';
import InfoRow from 'components/atoms/common/InfoRow/InfoRow';

function CurrentConsulting() {
	const [auth] = useRecoilState(authState);

	console.log(auth);
	if (auth?.currentConsulting)
		return (
			<div>
				<AreaTitle title="현재 진행중인 컨설팅" url="/consulting/video" />
				<div className="current-consulting-container">
					<div id="profile">
						<img src={GreenmateImg} alt="사진" />
						<h3>그린메이트명</h3>
					</div>
					<div id="info">
						<InfoRow title="서비스 유형" content={auth?.currentConsulting.category ? '구독' : '응급실'} />
						<InfoRow title="컨설팅 방식" content={auth?.currentConsulting.type ? '화상' : '채팅'} />
						<InfoRow title="컨설팅 방식" content={auth?.currentConsulting.startTime as string} />
					</div>
					<div id="short-cut">
						<img src={ProgressImg} alt="" />
						<h3>{auth?.currentConsulting.time}분째 진행 중</h3>
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
