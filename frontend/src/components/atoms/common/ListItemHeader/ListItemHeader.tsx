import React from 'react';
import NextIcon from 'assets/icons/Next.svg';
import { Link } from 'react-router-dom';
import './ListItemHeader.scss';

function ListItemHeader({ title, url }: { title: string; url: string }) {
	return (
		<Link to={url} className="list-item-header">
			<span>{title}</span>
			<img src={NextIcon} alt="" />
		</Link>
	);
}

export default ListItemHeader;
