import React from 'react';
import NextIcon from 'assets/icons/Next.svg';
import { Link } from 'react-router-dom';
import './ListItemTitle.scss';
import sliceText from 'utils/common/formatText';

/**
 * 구독, 상품 등의 리스트를 구성하는 아이템
 * @param title : 아이템의 제목
 * @param url : 클릭 시 이동할 경로
 */
function ListItemTitle({ title, url }: { title: string; url: string }) {
	return (
		<h5 className="list-item-title">
			<Link to={url}>
				<span>{sliceText(title)}</span>
				<img src={NextIcon} alt="" />
			</Link>
		</h5>
	);
}

export default ListItemTitle;
