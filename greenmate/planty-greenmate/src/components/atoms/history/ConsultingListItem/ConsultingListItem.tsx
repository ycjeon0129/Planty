import React from 'react';
import './ConsultingListItem.scss';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { IConsulting } from 'types/subscribe';
import converTime from 'utils/converTime';
import 'moment/locale/ko';
import InfoRow from 'components/atoms/common/InfoRow/InfoRow';
import formatDate from 'utils/formatDate';
import SubscribeStateBadge from 'components/atoms/subscribes/SubscribeStateBadge/SubscribeStateBadge';

function ConsultingListItem({ consulting }: { consulting: IConsulting }) {
	const getState = (active: boolean) => {
		if (active) return 'join';
		return 'notJoin';
	};
	return (
		<Accordion className="consulting-list-item-container">
			<AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
				<div className="consulting-header">
					<h3>
						{formatDate(consulting.date)} / {converTime(consulting.time)}
					</h3>
					<div id="badge">
						<SubscribeStateBadge stateKey={getState(consulting.active)} />
					</div>
				</div>
			</AccordionSummary>
			<AccordionDetails>
				<div className="consulting-info">
					<div id="detail">
						<h3>컨설팅 상세</h3>
						<InfoRow title="- 컨설팅 시작 시간" content={consulting.startTime} />
						<InfoRow title="- 컨설팅 종료 시간" content={consulting.endTime} />
						<InfoRow
							title="- 다음 컨설팅 권장일"
							content={`${formatDate(consulting.recommendedStartDate)} ~ ${formatDate(
								consulting.recommendedEndDate,
							)} 中`}
						/>
					</div>
					<div id="advice">
						<h3>가드너에게 한마디</h3>
						<p>- {consulting.advice}</p>
					</div>
				</div>
			</AccordionDetails>
		</Accordion>
	);
}

export default ConsultingListItem;
