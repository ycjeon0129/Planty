import React from 'react';

function Prodcut({ imgUrl }: { imgUrl: string }) {
	return (
		<div className="product-detail-photo">
			<div className="img-wrap">
				<img src={imgUrl} alt="사진" style={{ width: '100%' }} />
			</div>
		</div>
	);
}

export default Prodcut;
