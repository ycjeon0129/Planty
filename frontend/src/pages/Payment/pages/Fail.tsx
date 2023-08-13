import React from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

export default function FailPage() {
	const [searchParams] = useSearchParams();
	const navigate = useNavigate();
	const goHome = () => {
		navigate(`/home/`);
	};

	return (
		<div>
			<h1>결제 실패</h1>
			<div>{`사유: ${searchParams.get('message')}`}</div>
			<button type="button" className="pay-complete-footer" onClick={goHome}>
				홈으로 돌아가기
			</button>
		</div>
	);
}
