import React from 'react';
import LoginPageLayout from 'components/layout/Page/LoginPageLayout/LoginPageLayout';
import Logo from 'assets/images/Logo.svg';
import SocialLoginButton from 'components/atoms/user/GoogleLoginButton/GoogleLoginButton';

function LoginPage() {
	return (
		<LoginPageLayout>
			<img src={Logo} alt="" />
			<div id="social-login">
				<SocialLoginButton />
			</div>
		</LoginPageLayout>
	);
}

export default LoginPage;
