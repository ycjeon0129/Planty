import React, { useState } from 'react';
import './ImgDetail.scss';
import Img1 from 'assets/icons/product/productimg.svg';

function ImgDetail() {
	const [expanded, setExpanded] = useState(false);

	const toggleDescription = () => {
		setExpanded(!expanded);
	};

	const handleDragStart = (e: { preventDefault: () => void }) => {
		e.preventDefault();
	};

	return (
		<div className="img-detail">
			<div className="text-box">상품정보 이미지</div>
			<div className={`img-add-box ${expanded ? 'expanded' : ''}`} onDragStart={handleDragStart} draggable="false">
				<img src={Img1} alt="상품 이미지" draggable="false" />
			</div>
			<button type="button" onClick={toggleDescription}>
				{expanded ? '상세보기 접기' : '더보기'}
			</button>
		</div>
	);
}

export default ImgDetail;
