import React from 'react';
import SUBSCRIBE_STATES from 'constants/subscribe/SubscribeState';
import './SubscribeStateBadge.scss';

function SubscribeStateBadge({ stateKey }: { stateKey: string }) {
	const state = SUBSCRIBE_STATES[`${stateKey}`];

	return (
		<div className="badge-container">
			<span className={state.color}>{state.message}</span>
		</div>
	);
}

export default SubscribeStateBadge;
