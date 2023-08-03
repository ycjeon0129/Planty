import React, { ReactNode } from 'react';
import './BookingPageLayout.scss';
import PageLayout from 'components/layout/common/PageLayout/PageLayout';
import NavigationLayout from 'components/layout/navigation/NavigationLayout/NavigationLayout';

function BookingPageLayout({ children }: { children: ReactNode[] }) {
	return (
		<PageLayout>
			<NavigationLayout>{children[0]}</NavigationLayout>

			<div className="booking-page-layout">{children[1]}</div>
		</PageLayout>
	);
}

export default BookingPageLayout;
