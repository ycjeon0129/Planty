import React from 'react';
import './ConsultingLoadingPageLayout.scss';
import LoadingSpinner from 'components/atoms/consulting/LoadingSpinner/LoadingSpinner';

function ConsultingLoadingPageLayout() {
	return (
		<div className="loading-page-layout">
			<div className="text">그린메이트와 연결 중이예요</div>
			<LoadingSpinner />
		</div>
	);
}

export default ConsultingLoadingPageLayout;
