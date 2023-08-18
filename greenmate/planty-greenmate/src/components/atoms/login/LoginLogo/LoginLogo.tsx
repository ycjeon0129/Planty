import React from 'react';
import './LoginLogo.scss';
import Img from 'assets/icons/logo/PlantyLogo.svg';

function LoginLogo() {
	return (
		<div className="login-log-box">
			<img src={Img} alt="로고" />
			<div className="login-intro-text">그린메이트 로그인</div>
		</div>
	);
}

export default LoginLogo;
