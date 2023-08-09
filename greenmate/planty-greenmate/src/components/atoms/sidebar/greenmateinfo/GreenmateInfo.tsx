import React from 'react';
import './GreenmateInfo.scss';

interface GreenmateInfoProps {
	img: string;
	text: string;
}

function GreenmateInfo({ img, text }: GreenmateInfoProps) {
	return (
		<div className="greenmate-info-outer-box">
			<div className="greenmate-img-box">
				<img src={img} alt="그린메이트 사진" />
				<div>
					<div>{text}</div>
					<div className="gray-text">그린메이트</div>
				</div>
			</div>
		</div>
	);
}

export default GreenmateInfo;
