import React from 'react';
import LoadingPageLayout from 'components/layout/page/Consulting/LoadingPageLayout/LoadingPageLayout';
import Header from 'components/organisms/common/Header/Header';
import LoadingImg from 'components/atoms/consulting/LoadingImg/LoadingImg';
import Button from 'components/atoms/common/Button/Button';
import CustomAlert from 'components/organisms/common/CustomAlert/CustomAlert';
import { useRecoilState } from 'recoil';
import { consultingSessionState } from 'recoil/store';

function LoadingPage() {
	const [, setConsultingSession] = useRecoilState(consultingSessionState);

	const onCancel = () => {
		const onConfirm = () => {
			setConsultingSession(null);
			window.location.href = '/admin';
		};

		CustomAlert({
			title: '컨설팅 요청 취소하기',
			desc: '요청 중인 컨설팅을 취소하시겠습니까?',
			btnTitle: '취소하기',
			onAction: onConfirm,
			params: {},
		});
	};

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
			<Button text="취소하기" isActive handleClick={onCancel} />
		</LoadingPageLayout>
	);
}

export default LoadingPage;
