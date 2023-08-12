import { simpleConfirm } from 'react-simple-dialogs';

interface IConfirmDialogProps {
	title: string;
	message: string;
	confirmLabel: string;
	cancelLabel: string;
	onConfirm: () => Promise<void>;
}
const confirmDialog = async ({ title, message, confirmLabel, cancelLabel, onConfirm }: IConfirmDialogProps) => {
	if (await simpleConfirm({ title, message, confirmLabel, cancelLabel })) {
		onConfirm();
	}
};

export default confirmDialog;
