import { simpleConfirm } from 'react-simple-dialogs';

const confirmDialog = async (text: string, onSuccess: () => void) => {
	if (await simpleConfirm(text)) {
		onSuccess();
	}
};

export default confirmDialog;
