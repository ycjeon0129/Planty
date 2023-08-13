import React from 'react';
import './MypageConsultingDetailList.scss';
import { IConsulting } from 'types/domain/consulting';
import MypageConsultingDetail from '../MypageConsultingDetail/MypageConsultingDetail';

function MypageConsultingDetailList({ list }: { list: IConsulting[] | null }) {
	if (list) {
		return (
			<ul className="consultin-detail-list-container">
				{list.map((c) => (
					<MypageConsultingDetail key={c.cid} data={c} />
				))}
			</ul>
		);
	}
	return null;
}

export default MypageConsultingDetailList;
