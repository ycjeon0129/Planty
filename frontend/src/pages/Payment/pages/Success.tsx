import React from 'react';
import PayComplete from 'components/atoms/pay/paycomplete/PayComplete';
import { dummyProduct } from 'dummy';
import './Success.scss';

function Success() {
	return (
		<div className="complete-container">
			<PayComplete product={dummyProduct[0]} />
		</div>
	);
}

export default Success;
