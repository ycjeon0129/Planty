import PageHeader from 'components/organisms/common/PageHeader/PageHeader';
import DashBoardPageLayout from 'components/layout/page/DashBoard/DashBoardPageLayout/DashBoardPageLayout';
import React from 'react';
import ClassInfo from 'components/atoms/classinfo/ClassInfo';
import Img from 'assets/icons/product/product1.svg';
import Title from 'components/atoms/title/Title';
import ClassReservation from 'components/atoms/classreservation/ClassReservation';
import Img2 from 'assets/icons/GreenP.svg';
import CurrentProgress from 'components/atoms/currentProgress/CurrentProgress';
import NotingCurrentProgress from 'components/atoms/currentProgress/NotingCurrentProgress';

// Axios로 ISubscribe 타입의 데이터 가져와서 map으로 하나하나 ClassInfo로 뿌려주기
function DashBoardPage() {
	// 내 구독 정보(개수, 상품) 가져와서 보여주기
	// 현재 진행중인 컨설팅이 있는지 확인하는 상수 필요
	const DoingConsult = 1;
	return (
		<DashBoardPageLayout>
			<PageHeader text="대시보드" />
			{DoingConsult ? <CurrentProgress /> : <NotingCurrentProgress />}
			<Title title="내 구독" />
			<ClassInfo
				thumbnail={Img}
				title="4주만에 끝내는 토마토 클래스"
				subscriberCnt={7}
				startDate="2023/07/03(월)"
				endDate="2023/07/28(금)"
			/>
			<Title title="다가오는 컨설팅 일정" />
			<ClassReservation img={Img2} />
		</DashBoardPageLayout>
	);
}

export default DashBoardPage;
