import React from 'react';

function ListItemInfoList({ info }: { info: object }) {
	const keys = Object.keys(info);
	const values = Object.values(info);

	return (
		<div>
			{keys.map((el, idx) => (
				<div className="flex-row">
					<span>{`${el} ${values[idx]}`}</span>
				</div>
			))}
		</div>
	);
}

export default ListItemInfoList;
