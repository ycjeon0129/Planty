import React from 'react';
import GreenMate from 'assets/icons/Greenmate.svg';
import './title.scss';
import { IProductDetail } from 'types/domain/product';

// eslint-disable-next-line @typescript-eslint/no-shadow
function title({ title }: { title: IProductDetail }) {
	return (
		<div>
			<div className="big-box">
				<img src={GreenMate} alt="그린메이트" className="img-box" />
				{/* greenmate데이터에서 이름 가져오기 */}
				<div className="gm-name">Kate</div>
			</div>
			<div className="title-font">{title.title}</div>
		</div>
	);
}

export default title;
