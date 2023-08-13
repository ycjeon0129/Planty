import React from 'react';
import './title.scss';

function title({ name }: { name: string }) {
	return (
		<div>
			<div className="big-box">{/* greenmate데이터에서 이름 가져오기 */}</div>
			<div className="title-font">{name}</div>
		</div>
	);
}

export default title;
