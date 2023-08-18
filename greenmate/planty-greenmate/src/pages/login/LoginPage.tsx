import React from 'react';
import LoginPageLayout from 'components/layout/page/loginpagelayout/LoginPageLayout';
import LoginLogo from 'components/atoms/login/LoginLogo/LoginLogo';
import LoginForm from 'components/atoms/login/LoginForm/LoginForm';

function LoginPage() {
	return (
		<LoginPageLayout>
			<LoginLogo />
			<LoginForm />
		</LoginPageLayout>
	);
}

export default LoginPage;
