import React from 'react';
import LoginPageLayout from 'components/layout/Page/LoginPageLayout/LoginPageLayout';
import Logo from 'assets/images/Logo.svg';

function LoginPage() {
	return (
		<LoginPageLayout>
			<img src={Logo} alt="" />
			<button type="button">구글</button>
		</LoginPageLayout>
	);
}

export default LoginPage;
