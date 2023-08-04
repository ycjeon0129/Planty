import React from 'react';
import './ConsultingDetailList.scss';
import IConsultingHistory from 'types/consulting';
import ConsultingDetail from '../ConsultingDetail/ConsultingDetail';

function ConsultingDetailList({ list }: { list: IConsultingHistory[] }) {
	return (
		<ul className="consultin-detail-list-container">
			{list.map((v) => (
				<ConsultingDetail key={v.consultingDate} data={v} />
			))}
		</ul>
	);
}

export default ConsultingDetailList;
