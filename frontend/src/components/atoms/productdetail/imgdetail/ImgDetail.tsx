import React, { useState } from 'react';
import './ImgDetail.scss';
// import Img2 from 'assets/icons/Leaf.svg';
import Img1 from 'assets/icons/product/productimg.svg';

function ImgDetail() {
	const [expanded, setExpanded] = useState(false);

	const toggleDescription = () => {
		setExpanded(!expanded);
	};

	return (
		<div className="img-detail">
			<div className="text-box">상품정보 이미지</div>
			<hr />
			<div className={`img-add-box ${expanded ? 'expanded' : ''}`} onClick={toggleDescription} role="presentation">
				<img src={Img1} alt="상품 이미지" className={`img-size ${expanded ? 'hide' : ''}`} />
				<button className="button-box" type="button" onClick={toggleDescription}>
					{expanded ? '상세보기 접기' : '상품소개 더보기'}
				</button>
			</div>
		</div>
	);
}

export default ImgDetail;
