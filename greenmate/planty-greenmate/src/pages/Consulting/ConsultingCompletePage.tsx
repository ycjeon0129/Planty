import React from 'react';
import CompleteLottie from 'components/atoms/consulting/CompleteLottie/CompleteLottie';
import Button from 'components/atoms/common/Button/Button';
import useMovePage from 'hooks/useMovePage';
import ConsultingCompletePageLayout from 'components/layout/page/Consulting/ConsultingCompletePageLayout/ConsultingCompletePageLayout';

function ConsultingCompletePage() {
	const { movePage } = useMovePage();

	return (
		<ConsultingCompletePageLayout>
			<CompleteLottie />
			<h2>컨설팅 세션이 종료되었습니다.</h2>
			<h4>이용내역에서 그린메이트가 남긴 조언을 확인하세요.</h4>
			<Button
				text="홈으로 돌아가기"
				handleClick={() => {
					movePage('/', null);
				}}
				isActive
			/>
		</ConsultingCompletePageLayout>
	);
}

export default ConsultingCompletePage;
