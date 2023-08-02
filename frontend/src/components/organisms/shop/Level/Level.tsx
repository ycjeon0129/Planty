import React from 'react';
import LeafFill from 'assets/icons/LeafFill.svg';
import Leaf from 'assets/icons/Leaf.svg';

/**
 * 구독샵 상품의 난이도를 나타내는 나뭇잎.
 * @param level 상품에 포함된 식물의 난이도
 */
function Level({ level }: { level: number }) {
	const filled = new Array(level).fill(<img src={LeafFill} alt="" />);
	const another = new Array(5 - level).fill(<img src={Leaf} alt="" />);

	return (
		<div className="level-container">
			{filled.map((el) => el)}
			{another.map((el) => el)}
		</div>
	);
}

export default Level;
