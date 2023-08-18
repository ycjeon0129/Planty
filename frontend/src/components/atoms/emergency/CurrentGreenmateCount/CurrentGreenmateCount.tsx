import React from 'react';
import './CurrentGreenmateCount.scss';
import classNames from 'classnames';
import useGreenmateCount from 'hooks/api/useGreenmateCount';

/**
 * 현재 활동중인 그린메이트의 수를 표시.
 */
function CurrentGreenmateCount() {
	const greenmateCount = useGreenmateCount();
	const className = classNames('current-greenmate-count-container', { red: !greenmateCount });

	return (
		<div className={className}>
			<h4>현재 활동 중인 그린메이트 {greenmateCount}명</h4>
		</div>
	);
}

export default CurrentGreenmateCount;
