import { useState } from 'react';

/**
 * 토글버튼 상태 변수와 토글 함수를 생성하고, 이를 반환하는 커스텀 훅
 * @returns state : 토글버튼 상태 변수
 * @returns toggle : 토글함수 (토글 상태변수를 반대로 바꿔줌.)
 */
const useToggle = (init: boolean): [boolean, () => void] => {
	const [state, setState] = useState(init);

	const toggle = () => {
		setState(!state);
	};

	return [state, toggle];
};

export default useToggle;
