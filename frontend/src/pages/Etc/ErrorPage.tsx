import ErrorPageLayout from 'components/layout/Page/ErrorPageLayout/ErrorPageLayout';
import React from 'react';
import { Link } from 'react-router-dom';

function ErrorPage() {
	return (
		<ErrorPageLayout>
			<Link to="/home">home</Link>
		</ErrorPageLayout>
	);
}

export default ErrorPage;
