import React, { useState } from 'react';
import './FilterToggleBar.scss';
import FilterToggle from 'components/atoms/common/FilterToggle/FilterToggle';

/**
 * 구독샵 상품 필터
 * @param isActive 활성화상태[초록or회색]
 * @param handleClick 클릭함수
 */
function FilterToggleBar({ clickFunc }: { clickFunc: (idx: number) => void }) {
	const [activeIndex, setActiveIndex] = useState(0);
	const textbox = ['실내', '실외', '식용', '비식용'];
	const setNumber = (idx: number) => {
		setActiveIndex(idx); // 클릭시 activeIndex
		clickFunc(idx);
	};

	return (
		<div className="filter-box">
			<FilterToggle
				isActive={activeIndex === 0}
				text="전체"
				handleClick={() => setNumber(0)} // 클릭 시 handleToggleClick 함수
			/>
			{textbox.map((item, index) => (
				<FilterToggle
					key={item}
					isActive={activeIndex === index + 1} // activeIndex가 해당 컴포넌트의 인덱스 + 1이면 true, 아니면 false
					text={item}
					handleClick={() => setNumber(index + 1)} // 클릭 시 setNumber 함수 호출
				/>
			))}
		</div>
	);
}

export default FilterToggleBar;
