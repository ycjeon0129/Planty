import PageHeader from 'components/organisms/common/PageHeader/PageHeader';
import DashBoardPageLayout from 'components/layout/page/DashBoard/DashBoardPageLayout/DashBoardPageLayout';
import React from 'react';
import ClassInfo from 'components/atoms/classinfo/ClassInfo';
import Img from 'assets/icons/product/product1.svg';
import Title from 'components/atoms/title/Title';
import ClassReservation from 'components/atoms/classreservation/ClassReservation';
import Img2 from 'assets/icons/GreenP.svg';
import CurrentProgress from 'components/atoms/currentProgress/CurrentProgress';

function DashBoardPage() {
	// 내 구독 정보(개수, 상품) 가져와서 보여주기
	return (
		<DashBoardPageLayout>
			<PageHeader text="대시보드" />
			<CurrentProgress />
			<Title title="내 구독" />
			<ClassInfo img={Img} title="4주만에 끝내는 토마토 클래스" date="2023/07/03(월) ~ 2023/07/28(금)" />
			<Title title="다가오는 컨설팅 일정" />
			<ClassReservation img={Img2} />
		</DashBoardPageLayout>
	);
}

export default DashBoardPage;
