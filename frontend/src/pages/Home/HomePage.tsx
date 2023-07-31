import React from 'react';
import NavigationLayout from 'components/layout/NavigationLayout/NavigationLayout';
import PageLayout from 'components/layout/PageLayout/PageLayout';
import Navigation from 'components/organisms/common/Navigation/Navigation';

function HomePage() {
	return (
		<PageLayout>
			<NavigationLayout>
				<Navigation />
			</NavigationLayout>
		</PageLayout>
	);
}

export default HomePage;
