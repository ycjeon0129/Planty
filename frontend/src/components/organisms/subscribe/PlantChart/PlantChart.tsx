import React from 'react';
import { Chart } from 'react-chartjs-2';
import './PlantChart.scss';

import useChartData from 'hooks/useChartData';
import ChartButton from 'components/atoms/common/ChartButton/ChartButton';
import useToggle from 'hooks/useToggle';

function PlantChart() {
	const [tempState, tempToggle] = useToggle();
	const [hudiState, hudiToggle] = useToggle();
	const data = useChartData(tempState, hudiState);

	return (
		<div className="plant-chart-container">
			<div>
				<ChartButton type="danger" isActive={tempState} message="온도" onClick={tempToggle} />
				<ChartButton type="success" isActive={hudiState} message="습도" onClick={hudiToggle} />
			</div>
			<Chart type="line" data={data} />
		</div>
	);
}

export default PlantChart;
