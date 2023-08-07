import React from 'react';
import './JoinButton.scss';
import classnames from 'classnames';

/**
 * 컨설팅 참여하기 버튼
 * @param handleClick 버튼을 클릭했을 때의 동작
 * @param isActive [활성:primary/비활성:black-200]
 */
function JoinButton({ isActive, handleClick }: { isActive: boolean; handleClick: () => void }) {
	const className = classnames('button-boxx', { primary: isActive, default: !isActive });
	return (
		<button type="button" className={className} onClick={handleClick}>
			참여하기
		</button>
	);
}

export default JoinButton;
