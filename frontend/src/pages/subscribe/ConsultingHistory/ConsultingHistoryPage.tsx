import React, { useEffect, useState } from 'react';
import PageTitleButton from 'components/atoms/common/PageTitleButton/PageTitleButton';
import ConsultingHistoryPageLayout from 'components/layout/Page/ConsultingHistoryPageLayout/ConsultingHistoryPageLayout';
import { CONSULTING_HISTORY_STATUS_DESC_LIST } from 'constants/common/StatusDescList';
import { findAllConsultingBySidApi } from 'utils/api/consulting';
import { useParams } from 'react-router-dom';
import { IConsulting } from 'types/domain/consulting';
import BadgeDescription from '../../../components/organisms/common/BadgeDescription/BadgeDescription';
import ConsultingDetailList from '../../../components/organisms/mypage/ConsultingDetailList/ConsultingDetailList';

function ConsultingHistoryPage() {
	const stateKeyList = ['join', 'notJoin'];
	const [consultingList, setConsultingList] = useState<IConsulting[]>([]);
	const params = useParams();

	const fetchData = async (reqSid: number) => {
		try {
			const response = await findAllConsultingBySidApi(reqSid);
			if (response.status === 200) {
				setConsultingList(response.data);
				console.log(response);
			} else {
				console.log(`ConsultingHistoryPage fetch fail`);
			}
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		fetchData(+(params.sid as string));
	}, [params]);

	return (
		<ConsultingHistoryPageLayout>
			{/* 페이지 헤더 */}
			<PageTitleButton type="back" text="컨설팅 내역" />

			{/* 구독 상품명 */}
			<h2>방울방울 방울 토마토 클래스</h2>

			{/* 진행 내역 뱃지 설명 */}
			<BadgeDescription
				title="진행 내역"
				descriptionList={CONSULTING_HISTORY_STATUS_DESC_LIST}
				stateKeyList={stateKeyList}
			/>

			{/* 컨설팅 내역 */}
			<ConsultingDetailList list={consultingList} />
		</ConsultingHistoryPageLayout>
	);
}

export default ConsultingHistoryPage;
