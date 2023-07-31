import React from 'react';
import InfoListItem from 'components/atoms/common/InfoListItem/InfoListItem';

function InfoList({ info }: { info: object }) {
	const keys = Object.keys(info);
	const values = Object.values(info);

	return (
		<div className="info-list-container">
			{keys.map((title, idx) => (
				<InfoListItem title={title} idx={idx} values={values} />
			))}
		</div>
	);
}

export default InfoList;
