import React from 'react';
import './GreenmateInfo.scss';

import PlantyLogo from 'assets/icons/logo/PlantyLogo.svg';

interface GreenmateInfoProps {
	img: string;
	text: string;
}

function GreenmateInfo({ img, text }: GreenmateInfoProps) {
	return (
		<div className="greenmate-info-outer-box">
			<div className="planty-logo-box">
				<img src={PlantyLogo} alt="planty" />
			</div>
			<div className="greenmate-img-box">
				<div>
					<img src={img} alt="그린메이트 사진" />
				</div>
				<div>
					<div>{text}</div>
					<div className="gray-text">그린메이트</div>
				</div>
			</div>
		</div>
	);
}

export default GreenmateInfo;
