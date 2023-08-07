import React from 'react';
import LoginPageLayout from 'components/layout/page/loginpagelayout/LoginPageLayout';
import LoginLogo from 'components/atoms/loginlogo/LoginLogo';

function LoginPage() {
	return (
		<LoginPageLayout>
			<LoginLogo />
			<div>로그인</div>
			<div>로그인버튼</div>
		</LoginPageLayout>
	);
}

export default LoginPage;
