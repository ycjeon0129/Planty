import React, { ReactNode } from 'react';
import './LoginPageLayout.scss';

/**
 * LoginPageLayout 구성하는 레이아웃
 * @param children 레이아웃을 구성하는 컴포넌트들 ( Planty로고 / 소셜 로그인 버튼 )
 */
function LoginPageLayout({ children }: { children: ReactNode[] }) {
	return (
		<div className="login-page-layout-container">
			{/* 로고 */}
			<div id="logo">{children[0]}</div>
			{/* 소셜로그인 버튼 */}
			<div id="social-button">{children[1]}</div>
		</div>
	);
}

export default LoginPageLayout;
