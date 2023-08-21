import React from 'react';
import AppRouter from 'router/AppRouter';
import { RecoilRoot } from 'recoil';
import { Chart as ChartJS, registerables } from 'chart.js';

ChartJS.register(...registerables);

function App() {
	return (
		<RecoilRoot>
			<AppRouter />
		</RecoilRoot>
	);
}

export default App;
