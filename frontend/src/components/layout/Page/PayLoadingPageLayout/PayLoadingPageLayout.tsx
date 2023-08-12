import React from 'react';
import './PayLoadingPageLayout.scss';
import { HashLoader } from 'react-spinners';

// import LoadingSpinner from 'components/atoms/consulting/LoadingSpinner/LoadingSpinner';

function PayLoadingPageLayout() {
	return (
		<div className="loading-page-layout">
			<div className="text">상품을 구입 중이예요</div>
			<HashLoader color="#36d7b7" />
		</div>
	);
}

export default PayLoadingPageLayout;
