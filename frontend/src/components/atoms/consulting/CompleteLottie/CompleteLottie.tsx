import React from 'react';
import Lottie, { Options } from 'react-lottie'; // 타입을 가져옵니다.
import CompleteAnimation from './CompleteLottie.json';

function CompleteLottie() {
	const defaultOptions: Options = {
		loop: true,
		autoplay: true,
		animationData: CompleteAnimation,
	};

	return <Lottie options={defaultOptions} height={500} width={500} />;
}

export default CompleteLottie;
