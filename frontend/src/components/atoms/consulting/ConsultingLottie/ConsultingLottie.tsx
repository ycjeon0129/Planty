import React from 'react';
import Lottie, { Options } from 'react-lottie'; // 타입을 가져옵니다.
import LoadingAnimation from './ConsultingLottie.json';

function ConsultingLottie() {
	const defaultOptions: Options = {
		loop: true,
		autoplay: true,
		animationData: LoadingAnimation,
	};

	return <Lottie options={defaultOptions} height={500} width={500} />;
}

export default ConsultingLottie;
