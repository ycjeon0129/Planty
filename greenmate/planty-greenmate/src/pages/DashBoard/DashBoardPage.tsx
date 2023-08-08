import PageHeader from 'components/organisms/common/PageHeader/PageHeader';
import DashBoardPageLayout from 'components/layout/page/DashBoard/DashBoardPageLayout/DashBoardPageLayout';
import React from 'react';

function DashBoardPage() {
	return (
		<DashBoardPageLayout>
			<PageHeader text="대시보드" />
			<div>1</div>
			<div>2</div>
			<div>3</div>
		</DashBoardPageLayout>
	);
}

export default DashBoardPage;
