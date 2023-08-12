import React from 'react';
import './ConsultingDetailList.scss';
import { IConsulting } from 'types/domain/consulting';
import ConsultingDetail from '../ConsultingDetail/ConsultingDetail';

function ConsultingDetailList({ list }: { list: IConsulting[] }) {
	return (
		<ul className="consultin-detail-list-container">
			{list.map((c) => (
				<ConsultingDetail key={c.cid} data={c} />
			))}
		</ul>
	);
}

export default ConsultingDetailList;
