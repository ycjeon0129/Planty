import React from 'react';
import './CurrentProgress.scss';
import GreenmateImg from 'assets/icons/Greenmate.svg';
import ProgressImg from 'assets//icons/CurrentProgress.svg';
import Title from 'components/atoms/title/Title';
// 받아야하는 인자
// 컨설턴트 사진, 컨설턴트 이름, 서비스 유형, 컨설팅 방식, 시작 시간
function CurrentProgress() {
	return (
		<div className="current-progress-outer-box">
			<div className="current-progress-top-box">
				<Title title="현재 진행 중인 컨설팅" />
			</div>
			<div className="current-progress-button-box">
				<div className="current-progress-bt-box1">
					<div className="current-progress-left-box">
						<br />
						<div className="greenmate-img-box">
							<img src={GreenmateImg} alt="사진" />
						</div>
						<Title title="컨설턴트 이름" />
					</div>
					<div className="current-progress-text-box">
						<div className="current-progress-right-box">
							<div className="gray-text"> 서비스 유형</div>
							<div>응급실</div>
						</div>
						<div className="current-progress-right-box">
							<div className="gray-text">컨설팅 방식</div>
							<div>응급실</div>
						</div>
						<div className="current-progress-right-box">
							<div className="gray-text">시작시간</div>
							<div>응급실</div>
						</div>
					</div>
				</div>
				<div className="current-progress-bt-right-box">
					<div>
						<img src={ProgressImg} alt="" />
					</div>
					{/* <div className="primary-text">24분째 진행중</div> */}
				</div>
			</div>
		</div>
	);
}

export default CurrentProgress;
