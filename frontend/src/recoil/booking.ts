import { atom } from 'recoil';
import { SelectedDate } from 'types/domain/booking';

const selectedDateState = atom<SelectedDate>({
	key: 'selectedDateState',
	// default: null,
	default: new Date(),
});

export default selectedDateState;
