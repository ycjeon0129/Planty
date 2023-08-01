import React from 'react';
import SUBSCRIBE_STATES from 'constants/subscribe/SubscribeState';
import './SubscribeStateBadge.scss';

/**
 * 구독의 상태에 따른 뱃지
 * @param stateKey 뱃지의 상태를 나타내는 변수 (wait | done | end | join | notJoin)
 */
function SubscribeStateBadge({ stateKey }: { stateKey: string }) {
	const state = SUBSCRIBE_STATES[`${stateKey}`];

	return (
		<div className="badge-container">
			<span className={state.color}>{state.message}</span>
		</div>
	);
}

export default SubscribeStateBadge;
