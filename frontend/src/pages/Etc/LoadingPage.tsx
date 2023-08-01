import React from 'react';
import Logo from 'assets/images/Logo.svg';
import LoadingPageLayout from 'components/layout/Page/LoadingPageLayout/LoadingPageLayout';

function LoadingPage() {
	return (
		<LoadingPageLayout>
			<img src={Logo} alt="로딩. Planty Logo가 보여집니다." />
		</LoadingPageLayout>
	);
}

export default LoadingPage;
