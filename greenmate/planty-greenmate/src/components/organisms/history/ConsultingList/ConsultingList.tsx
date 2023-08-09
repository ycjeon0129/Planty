/* eslint-disable react/require-default-props */
import React from 'react';
import './ConsultingList.scss';
import { Value } from 'types/base/global';
import ConsultingListItem from 'components/atoms/history/ConsultingListItem/ConsultingListItem';
import useAllConsulting from 'hooks/api/useAllConsulting';
import { IConsulting } from 'types/subscribe';
import useConsultingList from 'hooks/api/useConsultingList';

function ConsultingList({ date }: { date?: Value }) {
	const consultingsInDate = useConsultingList(date as Value);
	const consultings = useAllConsulting();

	if (date ? consultingsInDate.length : consultings.length)
		return (
			<div className="consluting-list-container">
				{date
					? consultingsInDate?.map((c: IConsulting) => <ConsultingListItem consulting={c} />)
					: consultings?.map((c: IConsulting) => <ConsultingListItem consulting={c} />)}
			</div>
		);

	return (
		<div className="consluting-list-container no-content">
			<h2>예약된 컨설팅이 없습니다.</h2>
		</div>
	);
}

export default ConsultingList;
