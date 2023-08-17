import ErrorPageLayout from 'components/layout/page/Etc/ErrorPageLayout/ErrorPageLayout';
import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Plant } from 'assets/images/SadPlant.svg';

function ErrorPage() {
	return (
		<ErrorPageLayout>
			<Plant />
			<h3>잘못된 페이지 요청입니다</h3>
			<Link to="/admin/dashboard">대시보드로 돌아가기</Link>
		</ErrorPageLayout>
	);
}

export default ErrorPage;
