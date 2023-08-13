import React, { useState, useEffect } from 'react';
import PayComplete from 'components/atoms/pay/paycomplete/PayComplete';
import './Success.scss';
import { useLocation } from 'react-router-dom';
import PayLoadingPageLayout from 'components/layout/Page/PayLoadingPageLayout/PayLoadingPageLayout';

function Success() {
	const { state } = useLocation();
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		// 2초 후에 로딩 상태 변경
		const loadingTimer = setTimeout(() => {
			setIsLoading(false);
		}, 3000);

		// 컴포넌트 언마운트 시 타이머 정리
		return () => clearTimeout(loadingTimer);
	}, []);

	return (
		<div className="complete-container">
			{isLoading ? <PayLoadingPageLayout /> : <PayComplete price={state.price} />}
		</div>
	);
}

export default Success;
