import React from 'react';
import EmergencyPageLayout from 'components/layout/Page/EmergencyPageLayout/EmergencyPageLayout';
import PageTitle from 'components/atoms/common/PageTitle/PageTitle';
import Capsule from 'assets/icons/pageTitle/Capsule.svg';
import AreaTitle from 'components/atoms/common/AreaTitle/AreaTitle';
import SquareShortcutButton from 'components/atoms/common/SquareShortcutButton/SquareShortcutButton';
import CurrentGreenmateCount from 'components/atoms/emergency/CurrentGreenmateCount/CurrentGreenmateCount';
import TicketInfo from 'components/organisms/emergency/TicketInfo/TicketInfo';
import useMovePage from 'hooks/common/useMovePage';
import { toast } from 'react-hot-toast';

function EmergencyPage() {
	const { movePage } = useMovePage();

	return (
		<EmergencyPageLayout>
			{/* 페이지 헤더 */}
			<PageTitle icon={Capsule} text="응급실" />

			{/* 현재 접속 중인 그린메이트 */}
			<CurrentGreenmateCount />

			{/* 이용권 정보 */}
			<AreaTitle title="이용권 정보" url="#" />
			<TicketInfo />

			{/* 응급실 이용하기 */}
			<AreaTitle title="응급실 이용하기" url="#" />
			<SquareShortcutButton
				type="consulting-chat"
				text="채팅 응급실"
				handleClick={() => {
					toast.error('준비 중인 서비스입니다 😥');
				}}
			/>
			<SquareShortcutButton
				type="consulting-video"
				text="화상 응급실"
				handleClick={() => {
					movePage('/emergency/participate', null);
				}}
			/>
		</EmergencyPageLayout>
	);
}

export default EmergencyPage;
