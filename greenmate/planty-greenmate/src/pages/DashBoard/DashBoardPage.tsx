import PageHeader from 'components/organisms/common/PageHeader/PageHeader';
import DashBoardPageLayout from 'components/layout/page/DashBoard/DashBoardPageLayout/DashBoardPageLayout';
import React from 'react';
import ClassInfo from 'components/atoms/classinfo/ClassInfo';
import Title from 'components/atoms/title/Title';
import CurrentProgress from 'components/atoms/currentProgress/CurrentProgress/CurrentProgress';
import NotingCurrentProgress from 'components/atoms/currentProgress/NotingCurrentProgress/NotingCurrentProgress';
import useAllSubscribe from 'hooks/api/useAllSubscribe';
import ConsultingReservationList from 'components/organisms/consulting/ConsultingReservationList/ConsultingReservationList';

// Axios로 ISubscribe 타입의 데이터 가져와서 map으로 하나하나 ClassInfo로 뿌려주기
function DashBoardPage() {
	const subscribes = useAllSubscribe();

	// 현재 진행중인 컨설팅이 있는지 확인하는 상수 필요
	const DoingConsult = 1;
	return (
		<DashBoardPageLayout>
			<PageHeader text="대시보드" />
			{DoingConsult ? <CurrentProgress /> : <NotingCurrentProgress />}
			<Title title="내 구독" />
			{/* map으로 데이터 돌리면서 하나씩 보여주기 */}
			{subscribes?.map((s) => <ClassInfo subscribe={s} />)}
			<Title title="다가오는 컨설팅 일정" />
			<ConsultingReservationList />
		</DashBoardPageLayout>
	);
}

export default DashBoardPage;
