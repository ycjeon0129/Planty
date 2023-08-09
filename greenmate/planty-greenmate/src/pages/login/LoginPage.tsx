import React from 'react';
import LoginPageLayout from 'components/layout/page/loginpagelayout/LoginPageLayout';
import LoginLogo from 'components/atoms/loginlogo/LoginLogo';
import LoginForm from 'components/atoms/loginform/LoginForm';
// import { Button } from '@mui/material';

function LoginPage() {
	return (
		<LoginPageLayout>
			<LoginLogo />
			<LoginForm />
		</LoginPageLayout>
	);
}

export default LoginPage;
