/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import TabPanel from 'components/organisms/common/TabPanel/TabPanel';
import SubScribeDetail from 'components/organisms/subscribes/SubScribeDetail/SubScribeDetail';
import SubscribeBookingList from 'components/organisms/subscribes/SubscribeBookingList/SubscribeBookingList';
// import BookingList from '../../components/organisms/subscribes/BookingList/BookingList';

function a11yProps(index: number) {
	return {
		id: `simple-tab-${index}`,
		'aria-controls': `simple-tabpanel-${index}`,
	};
}

function SubscribesDetailPage() {
	const [value, setValue] = React.useState(0);

	const handleChange = (event: React.SyntheticEvent, newValue: number) => {
		setValue(newValue);
	};

	return (
		<Box sx={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
			<Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
				<Tabs value={value} onChange={handleChange} textColor="primary" indicatorColor="primary">
					<Tab label="구독 상세정보" {...a11yProps(0)} />
					<Tab label="컨설팅 예약 목록" {...a11yProps(1)} />
				</Tabs>
			</Box>
			{/* 탭 패널 1 : 구독 상세정보 */}
			<TabPanel value={value} index={0}>
				<SubScribeDetail />
			</TabPanel>
			{/* 탭 패널 2 : 컨설팅 예약 목록 */}
			<TabPanel value={value} index={1}>
				<SubscribeBookingList />
			</TabPanel>
		</Box>
	);
}

export default SubscribesDetailPage;
