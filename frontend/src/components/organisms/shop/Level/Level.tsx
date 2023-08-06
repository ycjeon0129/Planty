import React from 'react';
import LeafFill from 'assets/icons/LeafGreenFill.svg';
import LeafGray from 'assets/icons/LeafGray.svg'; // Update the import path for LeafGray
import './Level.scss';

/**
 * 구독샵 상품의 난이도를 나타내는 나뭇잎.
 * @param level 상품에 포함된 식물의 난이도
 */
function Level({ level }: { level: number }) {
	const filledLeaves = Array.from({ length: level }, (_, index) => (
		<img key={`filled-${index}`} src={LeafFill} alt="" />
	));

	const grayLeaves = Array.from({ length: 5 - level }, (_, index) => (
		<img key={`gray-${index}`} src={LeafGray} alt="" width="26" height="26" />
	));

	return (
		<div className="level-container">
			{filledLeaves}
			{grayLeaves}
		</div>
	);
}

export default Level;
