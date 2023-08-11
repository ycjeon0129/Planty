const MAX_TITLE_LENGTH = 18;

const sliceText = (text: string) => {
	let displayedTitle = text;
	if (text.length > MAX_TITLE_LENGTH) {
		displayedTitle = `${text.substring(0, MAX_TITLE_LENGTH - 3)}...`;
	}
	return displayedTitle;
};

export default sliceText;
