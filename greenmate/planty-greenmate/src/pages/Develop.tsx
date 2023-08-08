import 'react-calendar/dist/Calendar.css';
import React from 'react';
import PageLayout from 'components/layout/common/PageLayout/PageLayout';
import ContentsLayout from 'components/layout/common/ContentsLayout/ContentsLayout';

function Develop() {
	return (
		<PageLayout>
			{/* test */}
			<div style={{ display: 'flex', height: '200px' }}>
				<ContentsLayout id="test-area">gd</ContentsLayout>
				<ContentsLayout id="test-area">gd</ContentsLayout>
			</div>
		</PageLayout>
	);
}

export default Develop;
