import React from 'react';
import './ConsultingLoadingPageLayout.scss';
import LoadingSpinner from 'components/atoms/consulting/LoadingSpinner/LoadingSpinner';
import { ReactComponent as BackIcon } from 'assets/icons/Back.svg';
import useMovePage from 'hooks/common/useMovePage';

function ConsultingLoadingPageLayout() {
	const { movePage } = useMovePage();
	return (
		<div className="loading-page-layout">
			<div className="text">그린메이트와 연결 중이예요</div>
			<LoadingSpinner />
			<button type="button" className="consulting-loading-footer" onClick={() => movePage('/home', null)}>
				<BackIcon fill="#a7a7a7" />
				<span>홈으로 돌아가기</span>
			</button>
		</div>
	);
}

export default ConsultingLoadingPageLayout;
