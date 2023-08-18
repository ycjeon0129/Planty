import React, { ReactNode } from 'react';
import './LoginPageLayout.scss';

function LoginPageLayout({ children }: { children: ReactNode[] }) {
	return (
		<div className="login-outer-box">
			<div className="login-logo">{children[0]}</div>
			<div className="login-form">{children[1]}</div>
			<div className="login-button">{children[2]}</div>
		</div>
	);
}

export default LoginPageLayout;
