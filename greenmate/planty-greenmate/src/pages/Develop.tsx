import 'react-calendar/dist/Calendar.css';
import React from 'react';
import CheckOnline from 'components/atoms/sidebar/checkonline/CheckOnline';
import ClassInfo from 'components/atoms/classinfo/ClassInfo';
import Img from 'assets/icons/product/product1.svg';
import ClassReservation from 'components/atoms/classreservation/ClassReservation';

function Develop() {
	return (
		<div>
			<CheckOnline />
			<ClassInfo img={Img} />
			<ClassReservation img={Img} />
		</div>
	);
}

export default Develop;
