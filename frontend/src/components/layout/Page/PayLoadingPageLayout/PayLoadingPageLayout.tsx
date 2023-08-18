import React from 'react';
import './PayLoadingPageLayout.scss';
import { HashLoader } from 'react-spinners';

// import LoadingSpinner from 'components/atoms/consulting/LoadingSpinner/LoadingSpinner';

function PayLoadingPageLayout({ desc }: { desc: string }) {
	return (
		<div className="loading-page-layout">
			<div className="text">{desc}</div>
			<HashLoader color="#36d7b7" />
		</div>
	);
}

export default PayLoadingPageLayout;
