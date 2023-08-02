import React from 'react';
import './DetailButton.scss';
import { ReactComponent as DetailArrow } from 'assets/icons/NextGrey.svg';

/** 기본 버튼
 * @param text 버튼에 들어갈 텍스트
 * @param handleClick 버튼을 클릭했을 때의 동작
 */
function DetailButton({ text, handleClick }: { text: string; handleClick: () => void }) {
	return (
		<button type="button" className="detail-button" onClick={handleClick}>
			{text}
			<div className="margin-left">
				<DetailArrow />
			</div>
		</button>
	);
}

export default DetailButton;
