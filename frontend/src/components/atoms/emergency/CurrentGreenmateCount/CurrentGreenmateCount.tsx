import React from 'react';
import './CurrentGreenmateCount.scss';

function CurrentGreenmateCount({ greenmateCount }: { greenmateCount: number }) {
	return (
		<div className="current-greenmate-count-container">
			<h4>현재 활동중인 그린메이트 {greenmateCount}명</h4>
		</div>
	);
}

export default CurrentGreenmateCount;
