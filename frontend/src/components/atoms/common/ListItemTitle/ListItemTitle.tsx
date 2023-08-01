import React from 'react';
import NextIcon from 'assets/icons/Next.svg';
import { Link } from 'react-router-dom';
import './ListItemTitle.scss';

function ListItemTitle({ title, url }: { title: string; url: string }) {
	return (
		<h5 className="list-item-title">
			<Link to={url}>
				<span>{title}</span>
				<img src={NextIcon} alt="" />
			</Link>
		</h5>
	);
}

export default ListItemTitle;
