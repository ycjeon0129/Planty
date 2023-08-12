import React from 'react';
import PayComplete from 'components/atoms/pay/paycomplete/PayComplete';
import { dummyProduct } from 'dummy';
import './Success.scss';
import { useLocation } from 'react-router-dom';

function Success() {
	const pid = parseInt(useLocation().pathname.split('/')[2], 10);

	return (
		<div className="complete-container">
			<PayComplete product={dummyProduct[pid]} />
		</div>
	);
}

export default Success;
