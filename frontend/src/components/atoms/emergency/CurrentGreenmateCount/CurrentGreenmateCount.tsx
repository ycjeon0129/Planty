import React from 'react';
import './CurrentGreenmateCount.scss';
import useGreenmateCount from 'hooks/useGreenmateCount';

/**
 * 현재 활동중인 그린메이트의 수를 표시.
 */
function CurrentGreenmateCount() {
	const greenmateCount = useGreenmateCount();

	return (
		<div className="current-greenmate-count-container">
			<h4>현재 활동중인 그린메이트 {greenmateCount}명</h4>
		</div>
	);
}

export default CurrentGreenmateCount;
