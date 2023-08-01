import React from 'react';
import ContentsLayout from 'components/layout/ContentsLayout/ContentsLayout';
import NavigationLayout from 'components/layout/NavigationLayout/NavigationLayout';
import PageLayout from 'components/layout/PageLayout/PageLayout';
import Navigation from 'components/organisms/common/Navigation/Navigation';

function HomePage() {
	return (
		<PageLayout>
			<NavigationLayout>
				<Navigation />
			</NavigationLayout>
			<ContentsLayout>
				<div>
					<h2>콘텐츠 헤더</h2>
					<div>콘텐츠</div>
				</div>
			</ContentsLayout>
		</PageLayout>
	);
}

export default HomePage;
