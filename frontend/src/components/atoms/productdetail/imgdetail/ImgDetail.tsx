import React, { useState } from 'react';
import './ImgDetail.scss';

function ImgDetail({ descImgUrl }: { descImgUrl: string }) {
	const [expanded, setExpanded] = useState(false);

	const toggleDescription = () => {
		setExpanded(!expanded);
	};

	return (
		<div className="img-detail">
			<div className={`img-add-box ${expanded ? 'expanded' : ''}`} role="presentation">
				<img src={descImgUrl} alt="상품 정보 이미지" className={`img-size ${expanded ? 'hide' : ''}`} />
				<button className="button-box" type="button" onClick={toggleDescription}>
					{expanded ? '상세보기 접기' : '상품소개 더보기'}
				</button>
			</div>
		</div>
	);
}

export default ImgDetail;
