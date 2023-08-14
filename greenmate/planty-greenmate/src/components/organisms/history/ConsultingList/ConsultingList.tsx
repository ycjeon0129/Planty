/* eslint-disable react/require-default-props */
import React from 'react';
import './ConsultingList.scss';
import ConsultingListItem from 'components/atoms/history/ConsultingListItem/ConsultingListItem';
import { IConsulting } from 'types/subscribe';
import useLocationIdx from 'hooks/common/useSid';
import useAllConsultingBySpid from 'hooks/api/useAllConsultingBySpid';

function ConsultingList() {
	const spid = useLocationIdx(4);
	const consultings = useAllConsultingBySpid(spid)
		.filter((el) => el.active)
		.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

	if (consultings.length)
		return (
			<div className="consluting-list-container">
				{consultings?.map((c: IConsulting) => <ConsultingListItem consulting={c} />)}
			</div>
		);

	return (
		<div className="consluting-list-container no-content">
			<h2>예약된 컨설팅이 없습니다.</h2>
		</div>
	);
}

export default ConsultingList;
