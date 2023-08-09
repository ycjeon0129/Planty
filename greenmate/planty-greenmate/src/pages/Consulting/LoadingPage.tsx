import React from 'react';
import LoadingPageLayout from 'components/layout/page/Consulting/LoadingPageLayout/LoadingPageLayout';
import Header from 'components/organisms/common/Header/Header';
import LoadingImg from 'components/atoms/consulting/LoadingImg/LoadingImg';

function LoadingPage() {
	return (
		<LoadingPageLayout>
			{/* 로고 */}
			<Header />
			{/* 상단텍스트 */}
			<div>1:1 화상 컨설팅</div>
			{/* 상단텍스트 */}
			<div>영국남자 님의 요청</div>
			{/* 움직이는 이미지 */}
			<LoadingImg />

			{/* 하단 텍스트 */}
			<div>카메라와 마이크의 정상 작동을 확인하세요</div>
			<div>사용자와 연결 중입니다</div>
		</LoadingPageLayout>
	);
}

export default LoadingPage;
