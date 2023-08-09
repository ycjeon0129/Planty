import React from 'react';
import LoginPageLayout from 'components/layout/page/loginpagelayout/LoginPageLayout';
import LoginLogo from 'components/atoms/loginlogo/LoginLogo';
import LoginForm from 'components/atoms/loginform/LoginForm';
// import { Button } from '@mui/material';
import Button from 'components/atoms/button/Button';

function LoginPage() {
	return (
		<LoginPageLayout>
			<LoginLogo />
			<LoginForm />
			<Button text="로그인" />
		</LoginPageLayout>
	);
}

export default LoginPage;
